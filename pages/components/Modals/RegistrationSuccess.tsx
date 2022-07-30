import React from 'react'
import { Box, Button, Modal, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 469,
    height: 200,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
};

const RegistrationSuccess = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box className="w-full flex justify-center mb-2">
                        <CheckCircleIcon className="text-[#55BD3B] h-[45px] w-[45px] mx-auto" />
                    </Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center font-nunito text-[24px]'>
                        Registration Successful
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 1 }} className='text-center font-nunito text-[16px]'>
                        See you there ✨
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default RegistrationSuccess