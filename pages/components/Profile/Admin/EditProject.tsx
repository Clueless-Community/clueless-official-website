/* eslint-disable @next/next/no-img-element */
import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import { Close } from "@mui/icons-material";
import { TextField, Snackbar, Alert } from "@mui/material";
import TechStackAutoComplete from "../../shared/TechStackAutoComplete"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { theme } from '../../../../styles/theme'
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../../../lib/clientApp";
import { useSession } from "next-auth/react";
import { collection, doc, setDoc } from "firebase/firestore";


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

const EditProject: React.FC<Props> = ({ projectId, projectName, projectImage, projectDesc, publicLink, gitHubLink, techStacks, handleProjectFetch }) => {


    const [editIsOpen, setEditIsOpen] = React.useState<boolean>(false);
    const { data: session } = useSession();
    const uid = session?.user?.id;
    const handleOpen = () => setEditIsOpen(true);

    const [projectNameNew, setProjectNameNew] = React.useState<string>(projectName);
    const [projectImageNew, setProjectImageNew] = React.useState<string>(projectImage);
    const [media, setMedia] = React.useState<File>();
    const [projectDescNew, setProjectDescNew] = React.useState<string>(projectDesc);
    const [publicLinkNew, setPublicLinkNew] = React.useState<string>(publicLink as string);
    const [gitHubLinkNew, setGitHubLinkNew] = React.useState<string>(gitHubLink as string);
    const [projectTechStacks, setProjectTechStacks] = React.useState<{ name: string }[]>(techStacks);
    const [downloadURL, setDownloadURL] = React.useState<string>('');

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
                console.log("Prject Added.");
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
            <button className='ml-3 bg-blue-500 text-white p-1 hover:bg-blue-600 rounded-full w-9 h-9 flex items-center justify-center transition-all' onClick={handleOpen}><EditIcon /></button>
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
                            <TextField label="Deployed URL" variant="outlined" sx={{ width: '100%' }} defaultValue={publicLinkNew} value={publicLinkNew} onChange={(e) => { setPublicLinkNew(e.target.value) }} />
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
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                   Your project is updated.😉
                </Alert>
            </Snackbar>
        </>
    );
};
export default EditProject; 