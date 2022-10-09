/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import EditIcon from "@mui/icons-material/Edit";
import { useRouter } from 'next/router'
import { MdDelete } from 'react-icons/md';
import { Dialog } from '@mui/material';
import { db } from '../../../../lib/clientApp';
import { deleteDoc, doc } from 'firebase/firestore';

interface agenda {
    startTime: string,
    endingTime: string,
    amOrpm: string,
    subject: string,
}

interface instructorOrspeaker {
    name: string,
    image: string,
    linkedinLink: string,
    githubLink: string,
    twitterLink: string,
}

interface dataProps {
    eventposter: string,
    heading: string,
    venue: string,
    Time: string,
    instructorOrspeaker: instructorOrspeaker[],
    attractions: string,
    agenda: Array<agenda>
    eventId: string,
    date: string,
}




const UpcomingEventCard: React.FC<dataProps> = ({ eventposter, heading, venue, Time, instructorOrspeaker, attractions, eventId, date }) => {
    const router = useRouter()
    const [open, setOpen] = React.useState(false);
    const [admin, setAdmin] = React.useState(false)
    const allSpeakerNames = instructorOrspeaker?.map(key => key.name)
    const [deleteInput, setDeleteInput] = useState<string>("")

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    const handleChange = (e: any) => {
        e.preventDefault();
        setDeleteInput(e.target.value.toUpperCase())
    }

    const handleDelete = async () => {
        // const eventRef = collection()
        // const eventSnap = await getDocs(eventRef);
        await deleteDoc(doc(db, "events", eventId));
        handleClose()
    }



    useEffect(() => {
        router.pathname.includes('admin') && setAdmin(true)
    }, [router.pathname])

    console.log(admin)

    return (
        <div className=' bg-[#1954ca25] border-dashed border-2 border-opacity-30 border-black font-nunito xl:flex-row flex-col flex xl:justify-between xl:p-8 p-3 rounded-xl relative space-y-3 xl:space-y-0'>
            <section className={`flex xl:justify-start xl:space-x-8 space-x-4  pb-4 xl:pb-0 w-full`}>
                <div>
                    <img src={eventposter} className="rounded-full h-auto w-36 object-cover xl:h-[200px] xl:w-[200px]" alt='' />
                </div>
                <div className='flex flex-col xl:justify-center  space-y-16 xl:text-xl'>
                    <div className={`flex flex-col xl:justify-center justify-between md:space-y-4`}>
                        <h1 className='xl:text-4xl text-2xl hidden xl:block'> {heading}</h1>
                        <div className={`flex md:flex-row flex-col flex-wrap xl:justify-start md:child:mr-8 h-full md:space-y-0 space-y-4 child:mb-4`}>
                            <div className={`flex 2xl:flex-row flex-col 2xl:space-x-2 justify-start`}>
                                <h1 className='font-semibold'>Venue :</h1>
                                <h1>{venue}</h1>
                            </div>
                            <div className={`flex 2xl:flex-row flex-col 2xl:space-x-2 justify-start`}>
                                <h1 className='font-semibold'>Date :</h1>
                                <h1>{date}</h1>
                            </div>
                            <div className={`flex 2xl:flex-row flex-col 2xl:space-x-2 justify-start`}>
                                <h1 className='font-semibold'>Time :</h1>
                                <h1>{Time}</h1>
                            </div>
                        </div>
                        <div className='hidden md:block xl:space-y-4'>
                            <div className={`flex 2xl:flex-row flex-col 2xl:space-x-2`}>
                                <h1 className='font-semibold pb-2'>Instructor / speaker :</h1>
                                {allSpeakerNames?.map((item, i) => {
                                    return <h1 key={i}>{item}</h1>
                                })}
                            </div>
                            <h1 className='text-xl font-semibold pt-4'>{attractions}</h1>
                        </div>
                    </div>
                </div>
            </section>
            <div className='space-y-2 md:hidden'>
                <h1 className='xl:text-4xl text-xl xl:hidden font-semibold'> {heading}</h1>
                <div className={`flex flex-col  xl:hidden text-lg space-y-2`}>
                    <h1 className='font-semibold '>Instructor / speaker :</h1>
                    <div className='flex child:mr-8 flex-wrap'>
                        {allSpeakerNames?.map((item, i) => {
                            return <h1 key={i} className="text-base">{item}</h1>
                        })}
                    </div>
                </div>
            </div>
            <div className='text-right flex items-center space-x-4 h-fit'>
                <Link href={`/events/[event_id]`} as={`/events/${eventId}`} passHref>
                    <button className='bg-skin-main px-4 xl:py-3 py-2 rounded-md text-white font-semibold xl:text-xl text-lg'>View</button>
                </Link>
                <div>
                    <Link href={`/admin/events/[event_id]`} as={`/admin/events/${eventId}`} passHref>
                        <button className='bg-skin-main p-2 rounded-full text-white font-semibold xl:text-xl text-lg'><EditIcon /></button>
                    </Link>
                </div>
                <button className='hover:bg-skin-red bg-red-600 p-2 rounded-full'>
                <MdDelete className="text-3xl text-white cursor-pointer" onClick={handleOpen} />

                </button>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                // sx={{borderRadius : 200}}
            >
                <div className='space-y-4 p-6'>
                    <div id="alert-dialog-title">
                        <img src="/icons/warning.svg" alt="warning" className='text-sky-500 text-5xl mx-auto' />
                    </div>
                    <div className='space-y-4 h-fit flex  flex-col justify-center items-center'>
                        <h1 className='text-3xl font-nunito font-semibold'>Please Confirm!</h1>
                        <h1 className='text-lg font-nunito text-zinc-500'>Type “Delete” in the box below to confirm your deletion.</h1>
                        <input type="text" className='text-xl rounded-md focus:outline-none px-4 py-3 border-black border border-opacity-30 w-full' value={deleteInput} placeholder='DELETE' onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="w-10/12 mx-auto text-center">
                        {deleteInput === "DELETE" ? <button className="btn-blue bg-skin-red hover:bg-skin-red" autoFocus onClick={handleDelete}>
                            Delete
                        </button> : <button className="btn-blue bg-gray-400 hover:bg-gray-400 text-white cursor-not-allowed" autoFocus disabled>
                            Delete
                        </button>}
                    </div>
                </div>

            </Dialog>

        </div>
    )
}

export default UpcomingEventCard
