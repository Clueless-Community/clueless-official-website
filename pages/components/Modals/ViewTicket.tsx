import { Avatar, Box, Button, Modal, Typography } from '@mui/material';
import React from 'react'
import QRCode from "react-qr-code";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
};

type Props = {
    //Interface of the Prop Passed in this Compnent
    eventId: string | string[] | undefined
    eventName: string
    date: string
    venue: string
    eventLogo: string
};

const ViewTicket: React.FC<Props> = ({ eventId, eventName, date, venue, eventLogo }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>

            <button onClick={handleOpen} className="btn-blue">View Ticket</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='flex'>
                        <div className="flex flex-col justify-center items-center space-y-4 border-dashed border-r-2 border-[#989797] p-8 pr-16">
                            <QRCode value={eventId as string} size={150} />
                            <p className='text-sm text-gray-400 text-center'>Scan this QR code for the entry in the venue</p>
                        </div>
                        <div className='w-full p-8 space-y-6'>
                            <div className='flex justify-between '>
                                <p className='text-sm text-gray-400'>Token No. 123456</p>
                                <div className='text-center'>
                                    <p className='text-2xl text-gray-400'>TICKET</p>
                                    <h1 className='text-[#1955CA] font-poppins text-5xl'>{eventName}</h1>
                                </div>
                                <img src='/ClueLess Logo.png' className='w-[60px] h-[60px]' />
                            </div>
                            <div className='flex justify-between mx-auto w-[90%]'>
                                <ul className='list-disc text-[#858585] my-auto w-[50%] space-y-4'>
                                    <li>Date: {date}</li>
                                    <li>Venue: {venue}</li>
                                    <li>Event Mode: offline</li>
                                </ul>
                                <img src={eventLogo} className='w-[50%] h-[160px] border-dashed border-2 border-[#989797] rounded-lg' />
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default ViewTicket