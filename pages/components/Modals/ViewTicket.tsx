import { Box, Modal } from '@mui/material';
import React from 'react'
import QRCode from "react-qr-code";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 3,
};

type Props = {
    //Interface of the Prop Passed in this Compnent
    eventId: string | string[] | undefined
    eventName: string
    date: string
    venue: string
    eventLogo: string
    tokenNo: string
    eventMode: string
};

const ViewTicket: React.FC<Props> = ({ eventId, eventName, date, venue, eventLogo, tokenNo, eventMode }) => {
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
                <Box sx={style} className='w-[70%] p-2 md:p-4'>
                    <div className='flex flex-col-reverse xl:flex-row'>
                        <div className="hidden md:flex flex-col justify-center items-center space-y-4 border-dashed xl:border-r-2 border-[#989797] p-4 md:p-8 xl:pr-16">
                            <QRCode value={eventId as string} size={150} />
                            <p className='text-sm text-gray-400 text-center'>Scan this QR code for the entry in the venue</p>
                        </div>
                        <div className='w-full p-4 md:p-8 space-y-6'>
                            <div className='flex flex-col-reverse md:flex-row justify-between space-y-6 md:space-y-0'>
                                <div className='flex flex-col'>
                                    <p className='text-center md:text-left text-sm text-gray-400 mt-4 md:mt-0'>Token No.</p>
                                    <p className='text-center md:text-left text-[10px] text-gray-400 max-w-fit mx-auto break-all'>{tokenNo}</p>
                                </div>
                                <div className='text-center'>
                                    <p className='text-2xl text-gray-400'>TICKET</p>
                                    <h1 className='text-[#1955CA] font-poppins text-4xl md:text-5xl'>{eventName}</h1>
                                </div>
                                <img src='/ClueLess Logo.png' className='w-[60px] h-[60px] mx-auto md:mx-0' />
                            </div>
                            <div className='justify-between mx-auto w-[90%] flex flex-col sm:flex-row'>
                                <ul className='list-disc text-[#858585] my-auto w-full md:w-[50%] space-y-4'>
                                    <li>Date: {date}</li>
                                    <li>Venue: {venue}</li>
                                    <li>Event Mode: {eventMode}</li>
                                </ul>
                                <img src={eventLogo} className='w-[50%] h-[160px] border-dashed border-2 border-[#989797] rounded-lg hidden md:block' />
                                <div className="sm:w-[50%] flex justify-center  md:hidden mt-4">
                                    <QRCode value={eventId as string} size={120} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default ViewTicket