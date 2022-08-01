import React from 'react'
import { Box, Modal, Typography } from '@mui/material'
import HttpsIcon from '@mui/icons-material/Https';
import Link from 'next/link';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 469,
    height: 225,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
};

const SignInRequired = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <button onClick={handleOpen} className='bg-skin-main px-4 xl:py-3 py-2 rounded-md text-white font-semibold xl:text-xl text-lg'>View</button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box className="w-full flex justify-center mb-2">
                        <HttpsIcon className="text-[#F24E1E] h-[45px] w-[45px] mx-auto" />
                    </Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center font-nunito text-[24px]'>
                        Sign-In Required
                    </Typography>
                    <Link href="auth/signin">
                        <Box className="w-full flex justify-center mt-4">
                            <button className="btn-blue">Sign In</button>
                        </Box>
                    </Link>
                </Box>
            </Modal>
        </div>
    )
}

export default SignInRequired