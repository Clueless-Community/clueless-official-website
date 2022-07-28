import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import { Close } from "@mui/icons-material";
import { TextField } from "@mui/material";
import TechStackAutoComplete from "../../shared/TechStackAutoComplete"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { theme } from '../../../../styles/theme'


interface Props {
    projectImage: string,
    projectName: string,
    publicLink?: string,
    gitHubLink?: string,
    projectDesc: string,
    techStacks: { 'name': string }[],
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

const EditProject: React.FC<Props> = ({ projectName, projectImage, projectDesc, publicLink, gitHubLink, techStacks }) => {


    const [editIsOpen, setEditIsOpen] = React.useState<boolean>(false);
    const handleOpen = () => setEditIsOpen(true);

    const [projectNameNew, setProjectNameNew] = React.useState<string>(projectName);
    const [projectImageNew, setProjectImageNew] = React.useState<string>(projectImage);
    const [media, setMedia] = React.useState<File>();
    const [projectDescNew, setProjectDescNew] = React.useState<string>(projectDesc);
    const [publicLinkNew, setPublicLinkNew] = React.useState<string>(publicLink);
    const [gitHubLinkNew, setGitHubLinkNew] = React.useState<string>(gitHubLink);
    const [projectTechStacks, setProjectTechStacks] = React.useState<{ name: string }[]>(techStacks);

    const addImageToPost = (e: any) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setProjectImageNew(readerEvent.target.result as string);
        };

    };

    const handleClose = () => {
        setEditIsOpen(false);
    };

    return (
        <>
            <Button onClick={handleOpen}><EditIcon /></Button>
            <Modal
                open={editIsOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                closeAfterTransition
                sx={{ [theme.breakpoints.down('md')]: {
                    overflowY : 'scroll',
                },}}
            >
                <Box sx={style}>
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
                                setMedia(e.target.files[0]);
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
                    <Box sx={{ mt: 3.5 }}>
                        <TextField label="Project Description" variant="outlined" required multiline sx={{ width: '100%', }} rows={5} defaultValue={projectDescNew} value={projectDescNew} onChange={(e) => { setProjectDescNew(e.target.value) }} />
                        <TechStackAutoComplete projectTechStacks={projectTechStacks} setProjectTechStacks={setProjectTechStacks} />
                    </Box>
                    <button className='btn-blue mt-5 float-right px-6 py-2 shadow-blue-600'>Save</button>
                    <button className='btn-red mt-5 float-right px-6 py-2 shadow-red-600 mr-5' onClick={handleClose}>Discard</button>
                </Box>
            </Modal>
        </>
    );
};
export default EditProject; 