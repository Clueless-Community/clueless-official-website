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
        <div className=' bg-[#282e36f7] xl:flex-row flex-col flex xl:justify-between rounded-[46px] relative xl:h-[232px] mb-[50px]'>
            <div className='xl:h-[231px] xl:w-[515px] h-[293px]'>
                <img src={eventposter} className="xl:w-[515px] xl:h-[231px] xl:rounded-l-[44px] xl:rounded-tr-[0px] rounded-t-[19px] h-[293px]" alt='event poster' />
            </div>
            <section className="flex xl:justify-start xl:space-x-8 space-x-4 xl:w-[1194px] pl-[44px] border-slate-400 xl:border-y-[0.1px] border-x-[0.1px] xl:border-x-[0px]">
                <div className='flex flex-col xl:justify-center space-y-16 xl:text-xl xl:pr-[200px] pr-[44px]'>
                    <div className={`flex flex-col xl:justify-center `}>
                        <h1 className='font-[550] xl:text-3xl text-[28px] text-[#B6F5BB] xl:leading-[40px] pb-[10px] leading-[70.5px] pt-[10px] xl:pt-[0px]'> {heading}</h1>
                        <div className={`flex md:flex-row flex-col flex-wrap xl:justify-start md:child:mr-8 h-full md:space-y-0 space-y-4 child:mb-4`}>
                            <div className={`flex 2xl:flex-row flex-col 2xl:space-x-2 justify-start`}>
                                <h1 className=' text-[#E2E2E2] text-base font-light'>{agenda}</h1>
                            </div>
                            <div className={`flex 2xl:flex-row flex-row space-x-2 justify-start`}>
                                <h1 className='font-bold text-[#E2E2E2] text-base'>Timeline :</h1>
                                <h1 className=' text-[#E2E2E2] text-base font-light pr-[80px]'>{date}</h1>
                            </div>
                            <div className={`flex flex-row space-x-2 justify-start`}>
                                <h1 className='font-bold text-[#E2E2E2] text-base'>Time :</h1>
                                <h1 className=' text-[#E2E2E2] text-base font-light pb-[10px]'>{Time}</h1>
                            </div>
                        </div>
                        <div className='md:block xl:space-y-4 pb-[20px] xl:pb-[0px] pt-[5px] xl:pt-[0px]'>
                            <div className={`flex 2xl:flex-row flex-col 2xl:space-x-2 space-y-1 xl:space-y-0`}>
                                <h1 className='pb-2 text-[#E2E2E2] text-base'>Instructor / speaker :</h1>
                                {allSpeakerNames?.map((item, i) => {
                                    return <h1 className='text-[#E2E2E2] text-base font-light' key={i}>{item}</h1>
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
            <div className='text-right flex items-center space-x-4 h-fit w-[100%]'>
                <Link href={`/events/[event_id]`} as={`/events/${eventId}`} passHref>
                    <button className='bg-[#7EE787] xl:rounded-r-[44px] text-[#272D35] xl:w-[111px] xl:h-[231px] text-10xl xl:rounded-bl-[0px] rounded-b-[19px] h-[100px] w-[100%]'><ArrowForwardIosIcon className='text-[42px] font-bold' /></button>
                </Link>
            </div>
        </div>
    )
}

export default UpcomingEventCard
