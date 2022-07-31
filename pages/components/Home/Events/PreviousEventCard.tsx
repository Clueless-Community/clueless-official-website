import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { AiFillLinkedin, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'
import { GoPrimitiveDot } from 'react-icons/go'
import { useState } from 'react'
import Collapse from '@mui/material/Collapse';
import Link from 'next/link'

interface agenda {
    startTime: string,
    endingTime: string,
    amOrpm: string,
    subject: string,
}
interface instructorOrspeaker {
    profileURL: string,
    // image: string,
    // linkedinLink: string,
    // githubLink: string,
    // twitterLink: string,
}

interface dataProps {
    eventposter: string,
    heading: string,
    venue: string,
    startingTime: string,
    endingTime: string,
    instructorOrspeaker: instructorOrspeaker,
    participants?: number,
    agenda: agenda[],
    winners?: string[]
}




const UpcomingEventCard: React.FC<dataProps> = ({ eventposter, heading, venue, startingTime, endingTime, instructorOrspeaker, agenda, winners, participants }) => {
    return (
        <div className=' bg-[#c3c8d241] border-dashed border-2 border-opacity-30 border-black font-nunito xl:flex-row flex-col flex xl:p-8 p-4 rounded-xl relative space-y-2 xl:space-y-0'>
            <section className={`flex xl:justify-start xl:space-x-8 space-x-4  pb-4 xl:pb-0 w-full`}>
                <div className='space-y-4'>
                    <img src={eventposter} className="rounded-xl w-36 xl:w-fit" />
                    <div className={`rounded-full px-4 py-2 bg-[#1954ca36] text-center xl:text-xl text-lg font-semibold hidden xl:block `}>Participants : {participants}</div>
                </div>
                <div className='flex flex-col justify-center xl:justify-start space-y-16'>
                    <div className={`flex flex-col xl:space-y-4 `}>
                        <h1 className='xl:text-4xl text-2xl hidden xl:block'> {heading}</h1>
                        <div className={` flex xl:flex-row items-start xl:items-center flex-col xl:text-xl h-full xl:space-x-4`}>
                            <div className={` flex flex-col xl:flex-row xl:items-center xl:space-x-2`}>
                                <h1 className='font-semibold'>Venue :</h1>
                                <h1>{venue}</h1>
                            </div>
                            <div className={`flex flex-col xl:flex-row xl:items-center xl:space-x-2 xl:w-fit w-full`}>
                                <h1 className='font-semibold'>Time :</h1>
                                <h1>{startingTime} - {endingTime}</h1>
                            </div>
                        </div>
                        <div className='hidden xl:block xl:space-y-4'>
                            <div className={`text-xl flex items-center space-x-2`}>
                                <h1 className='font-semibold'>Instructor / speaker :</h1>
                                <h1>{instructorOrspeaker?.name}</h1>
                            </div>
                            <div className={`space-y-2 hidden xl:block`}>
                                <h1 className='text-2xl font-semibold'>Event Winners</h1>
                                <div className='flex flex-start space-x-2'>
                                    {winners?.map((image, i) => {
                                        return <img src={image} className="rounded-full w-16 h-16" key={i} />
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <h1 className='xl:text-4xl text-2xl xl:hidden font-semibold'>{heading}</h1>
            <div className={`text-xl flex flex-col space-y-2 xl:hidden`}>
                <h1 className='font-semibold'>Instructor / speaker :</h1>
                <h1>{instructorOrspeaker?.name}</h1>
            </div>
            <div className={`space-y-2 xl:hidden`}>
                <h1 className='text-xl font-semibold'>Event Winners</h1>
                <div className='flex flex-start space-x-2'>
                    {winners?.map((image, i) => {
                        return <img src={image} className="rounded-full w-16 h-16" key={i} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default UpcomingEventCard