/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

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
    const allSpeakerNames = instructorOrspeaker?.map(key => key.name)
    console.log(eventId);


    return (
        <div className=' bg-[#1954ca25] border-dashed border-2 border-opacity-30 border-black font-nunito xl:flex-row flex-col flex xl:justify-between xl:p-8 p-3 rounded-xl relative space-y-3 xl:space-y-0'>
            <section className="flex xl:justify-start xl:space-x-8 space-x-4  pb-4 xl:pb-0 w-full">
                <div>
                    <img src={eventposter} className="rounded-full h-auto w-36 object-cover xl:h-[200px] xl:w-[200px]" alt='event poster' />
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
            </div>

        </div>
    )
}

export default UpcomingEventCard
