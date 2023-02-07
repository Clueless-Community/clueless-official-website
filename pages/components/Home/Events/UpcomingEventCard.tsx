/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
    agenda: Array<agenda>
    eventId: string,
    date: string,
}




const UpcomingEventCard: React.FC<dataProps> = ({ eventposter, heading, Time, instructorOrspeaker, agenda, eventId, date }) => {
    const router = useRouter()
    const allSpeakerNames = instructorOrspeaker?.map(key => key.name)
    console.log(eventId);


    return (
        <div className=' bg-[#282e36f7] border-[0.5px] border-black xl:flex-row flex-col flex xl:justify-between rounded-[46px] relative space-y-3 xl:space-y-0'>
            <div className='h-[293px] w-[455px]'>
                <img src={eventposter} className="h-auto w-36 object-cover xl:h-[293px] xl:w-[455px] rounded-l-[46px]" alt='event poster' />
            </div>
            <section className="flex xl:justify-start xl:space-x-8 space-x-4  pb-4 xl:pb-0 w-full pl-[52px] pr-[301px]">
                <div className='flex flex-col xl:justify-center  space-y-16 xl:text-xl'>
                    <div className={`flex flex-col xl:justify-center justify-between md:space-y-4`}>
                        <h1 className='xl:text-4xl text-2xl hidden xl:block text-[#7EE787] leading-[70px]'> {heading}</h1>
                        <div className={`flex md:flex-row flex-col flex-wrap xl:justify-start md:child:mr-8 h-full md:space-y-0 space-y-4 child:mb-4`}>
                            <div className={`flex 2xl:flex-row flex-col 2xl:space-x-2 justify-start`}>
                                <h1 className=' text-[#E2E2E2] text-lg'>{agenda}</h1>
                            </div>
                            <div className={`flex 2xl:flex-row flex-col 2xl:space-x-2 justify-start`}>
                                <h1 className='font-bold text-[#E2E2E2] text-lg'>Timeline :</h1>
                                <h1 className=' text-[#E2E2E2] text-lg'>{date}</h1>
                            </div>
                            <div className={`flex 2xl:flex-row flex-col 2xl:space-x-2 justify-start`}>
                                <h1 className='font-bold text-[#E2E2E2] text-lg'>Time :</h1>
                                <h1 className=' text-[#E2E2E2] text-lg'>{Time}</h1>
                            </div>
                        </div>
                        <div className='hidden md:block xl:space-y-4'>
                            <div className={`flex 2xl:flex-row flex-col 2xl:space-x-2 `}>
                                <h1 className='font-bold pb-2 text-[#E2E2E2] text-lg'>Instructor / speaker :</h1>
                                {allSpeakerNames?.map((item, i) => {
                                    return <h1 className='text-[#E2E2E2] text-lg' key={i}>{item}</h1>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className='space-y-2 md:hidden'>
                <h1 className='xl:text-4xl text-xl xl:hidden font-semibold'> {heading}</h1>
                <div className={`flex flex-col  xl:hidden text-lg space-y-2`}>
                    <h1 className='font-semibold '>Instructor / speaker :</h1>
                    <div className='flex child:mr-8 flex-wrap'>
                        {allSpeakerNames?.map((item, i) => {
                            return <h1 key={i} className="text-base">{item}</h1>
                        })}
                    </div>
                </div>
            </div> */}
            <div className='text-right flex items-center space-x-4 h-fit'>
                <Link href={`/events/[event_id]`} as={`/events/${eventId}`} passHref>
                    <button className='bg-[#7EE787] rounded-r-[46px] text-[#272D35] w-[131px] h-[293px] xl:text-xl'><ArrowForwardIosIcon className='text-[42px] font-bold' /></button>
                </Link>
            </div>
        </div>
    )
}

export default UpcomingEventCard
