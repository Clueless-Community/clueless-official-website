/* eslint-disable @next/next/no-img-element */
import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Close } from "@mui/icons-material";
import { TextField, Snackbar, Alert } from "@mui/material";
import TechStackAutoComplete from "../../shared/TechStackAutoComplete"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { theme } from '../../../../styles/theme'
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../../../lib/clientApp";
import { useSession } from "next-auth/react";
import { doc, setDoc } from "firebase/firestore";


interface Props {
    projectId: string
    projectImage: string,
    projectName: string,
    publicLink?: string,
    gitHubLink?: string,
    projectDesc: string,
    techStacks: { 'name': string }[],
    handleProjectFetch: () => Promise<void>
}

const editSvg = (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M16.474 5.40783L18.592 7.52483L16.474 5.40783ZM17.836 3.54283L12.109 9.26983C11.8131 9.56533 11.6113 9.94181 11.529 10.3518L11 12.9998L13.648 12.4698C14.058 12.3878 14.434 12.1868 14.73 11.8908L20.457 6.16383C20.6291 5.99173 20.7656 5.78742 20.8588 5.56256C20.9519 5.33771 20.9998 5.09671 20.9998 4.85333C20.9998 4.60994 20.9519 4.36895 20.8588 4.14409C20.7656 3.91923 20.6291 3.71492 20.457 3.54283C20.2849 3.37073 20.0806 3.23421 19.8557 3.14108C19.6309 3.04794 19.3899 3 19.1465 3C18.9031 3 18.6621 3.04794 18.4373 3.14108C18.2124 3.23421 18.0081 3.37073 17.836 3.54283V3.54283Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M19 15V18C19 18.5304 18.7893 19.0391 18.4142 19.4142C18.0391 19.7893 17.5304 20 17 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    [theme.breakpoints.down('sm')]: {
        maxWidth: 350,
        mt: 30,
        mb: 30
    },
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
};

const MAX_PROJECT_NAME_LENGTH = 100;
const MAX_DESC_LENGTH = 200;
const MAX_GITHUB_LINK_LENGTH = 100;
const MAX_PUBLIC_LINK_LENGTH = 100;

const EditProject: React.FC<Props> = ({ projectId, projectName, projectImage, projectDesc, publicLink, gitHubLink, techStacks, handleProjectFetch }) => {
    const [editIsOpen, setEditIsOpen] = React.useState<boolean>(false);
    const { data: session } = useSession();
    const uid = session?.user?.id;
    const handleOpen: React.MouseEventHandler<HTMLButtonElement> = e => {
        e.stopPropagation();
        e.preventDefault();
        setEditIsOpen(true);
    };

    const [projectNameNew, _setProjectNameNew] = React.useState<string>(projectName);
    const [projectImageNew, setProjectImageNew] = React.useState<string>(projectImage);
    const [media, setMedia] = React.useState<File>();
    const [projectDescNew, _setProjectDescNew] = React.useState<string>(projectDesc);
    const [publicLinkNew, _setPublicLinkNew] = React.useState<string>(publicLink as string);
    const [gitHubLinkNew, _setGitHubLinkNew] = React.useState<string>(gitHubLink as string);
    const [projectTechStacks, setProjectTechStacks] = React.useState<{ name: string }[]>(techStacks);
    const [downloadURL, setDownloadURL] = React.useState<string>('');

    const setProjectNameNew = (val: string) =>
        _setProjectNameNew(val.slice(0, MAX_PROJECT_NAME_LENGTH));
    const setProjectDescNew = (val: string) =>
        _setProjectDescNew(val.slice(0, MAX_DESC_LENGTH));
    const setPublicLinkNew = (val: string) =>
        _setPublicLinkNew(val.slice(0, MAX_PUBLIC_LINK_LENGTH));
    const setGitHubLinkNew = (val: string) =>
        _setGitHubLinkNew(val.slice(0, MAX_GITHUB_LINK_LENGTH));

    const addImageToPost = (e: any) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            readerEvent?.target?.result && setProjectImageNew(readerEvent?.target.result as string);
        };

    };

    const handleClose = () => {
        setEditIsOpen(false);
    };

    const validateProject = () => {
        if (projectTechStacks?.length === 0 || projectDescNew === '' || projectImageNew === '' || projectImageNew === '' || gitHubLinkNew === '' || publicLinkNew === '') return true
        else return false
    }

    //Firebase Ahead
    const handleImageUpload = async () => {
        const date = new Date();
        const projectImageRef = ref(storage, `${uid}/project/${date.getTime()}_project.jpg`);
        const uploadTask = media && uploadBytesResumable(projectImageRef, media);
        uploadTask && uploadTask.on('state_changed',
            (snapshot: { bytesTransferred: number; totalBytes: number; state: any; }) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error: { code: any; }) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        break;
                    case 'storage/canceled':
                        break;

                    case 'storage/unknown':
                        break;
                }
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURLOnUpload) => {
                    console.log('File uploaded');
                    setDownloadURL(downloadURLOnUpload);
                });
            }
        );
    }

    const handleUpload = async () => {
        if (uid) {
            if (projectImage !== projectImageNew) {
                await handleImageUpload();
            }
            const projectRef = doc(db, `users/${uid}/projects`, projectId)
            try {
                await setDoc(projectRef, {
                    project_name: projectNameNew,
                    project_desc: projectDescNew,
                    project_image: projectImageNew,
                    github_link: gitHubLinkNew,
                    public_link: publicLinkNew,
                    techstacks: projectTechStacks
                })
                console.log("Project Added.");
            } catch (e) {
                console.log(e)
            }
        }
    }

    //Snackbar Settings
    const [open, setOpen] = React.useState(false);

    const handleCloseSnackBar = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };


    return (
        <>
            <button className='hover:text-black text-gray-500 p-1 rounded-full w-9 h-9 flex items-center justify-center transition-all' onClick={handleOpen}>
                {editSvg}
            </button>
            <Modal
                open={editIsOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                closeAfterTransition
                sx={{
                    [theme.breakpoints.down('md')]: {
                        overflowY: 'scroll',
                    },
                }}
            >
                <Box sx={style} key={projectId}>
                    <Box sx={{
                        display: "flex", justifyContent: 'space-between'
                    }}>
                        <Typography id="edit-modal-title" variant="h6" component="h2">
                            Edit Project
                        </Typography>
                        <Close onClick={() => handleClose()} sx={{ cursor: 'pointer' }} />
                    </Box>
                    <Box sx={{
                        display: "flex", justifyContent: 'space-between', alignItems: 'center', mt: 2, [theme.breakpoints.down('sm')]: {
                            flexDirection: 'column',
                        },
                    }}>
                        <label
                            htmlFor="file-upload"
                            className=" cursor-pointer h-52 relative"
                        >
                            <img src={projectImageNew} alt="" className=" rounded-lg md:w-80 h-52 absolute -z-40" />
                            <div className="absolute rounded-lg w-52 h-52 bg-black opacity-50 flex justify-center items-center -z-20"></div>
                            <div className="w-52 h-52 flex justify-center items-center text-white">
                                <CloudUploadIcon fontSize="large" />
                            </div>
                        </label>
                        <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only "
                            accept="image/*"
                            onChange={(e) => {
                                setMedia(e.target?.files![0] as File)
                                addImageToPost(e);
                            }}
                        />
                        <Box sx={{
                            ml: '5%', display: 'flex', flexDirection: 'column', width: '100%', gap: 2.5, [theme.breakpoints.down('sm')]: {
                                ml: 0, mt: 3
                            },
                        }}>
                            <TextField label="Project Name" required variant="outlined" sx={{ width: '100%' }} defaultValue={projectNameNew} value={projectNameNew} onChange={(e) => { setProjectNameNew(e.target.value) }} />
                            <TextField label="GitHub Link" required variant="outlined" sx={{ width: '100%' }} defaultValue={gitHubLinkNew} value={gitHubLinkNew} onChange={(e) => { setGitHubLinkNew(e.target.value) }} />
                            <TextField label="Deployed URL" required variant="outlined" sx={{ width: '100%' }} defaultValue={publicLinkNew} value={publicLinkNew} onChange={(e) => { setPublicLinkNew(e.target.value) }} />
                        </Box>
                    </Box>
                    <TextField label="Project Description" variant="outlined" required multiline sx={{ width: '100%', mt: 3.5 }} rows={5} defaultValue={projectDescNew} value={projectDescNew} onChange={(e) => { setProjectDescNew(e.target.value) }} />
                    <Box sx={{ mt: 2.5 }}>
                        <TechStackAutoComplete projectTechStacks={projectTechStacks} setProjectTechStacks={setProjectTechStacks} />
                    </Box>
                    {validateProject() ? (
                        <button className='btn-blue bg-gray-300 hover:bg-gray-300 mt-5 float-right px-6 py-2 shadow-blue-600' disabled >Save</button>
                    ) : (
                        <button className='btn-blue mt-5 float-right px-6 py-2 shadow-blue-600' onClick={async () => { await handleUpload(); handleClose(); await handleProjectFetch(); setOpen(true) }}>Save</button>
                    )}
                    <button className='btn-red mt-5 float-right px-6 py-2 shadow-red-600 mr-5' onClick={handleClose}>Discard</button>
                </Box>
            </Modal>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseSnackBar}>
                <Alert onClose={handleCloseSnackBar} severity="success" sx={{ width: '100%' }}>
                   Your project is updated.😉
                </Alert>
            </Snackbar>
        </>
    );
};
export default EditProject; 