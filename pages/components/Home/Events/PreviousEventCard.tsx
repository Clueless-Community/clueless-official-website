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
    startingTime: string,
    endingTime: string,
    instructorOrspeaker:instructorOrspeaker,
    participants: number,
    agenda: agenda[],
    winners: string[]
}




const UpcomingEventCard: React.FC<dataProps> = ({ eventposter, heading, venue, startingTime, endingTime, instructorOrspeaker, agenda, winners, participants }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className=' bg-[#c3c8d241] border-dashed border border-black font-nunito xl:flex-row flex-col flex xl:justify-between xl:p-8 p-4 rounded-xl relative space-y-2 xl:space-y-0'>
            <section className={`flex xl:justify-start xl:space-x-8 space-x-4 ${open && 'pb-12'} pb-4 xl:pb-0 w-full`}>
                <div className='space-y-4'>
                    <img src={eventposter} className="rounded-xl" />
                    <div className={`rounded-full px-4 py-2 bg-[#1954ca36] text-center xl:text-xl text-lg font-semibold hidden xl:block ${open && 'hidden'}`}>Participants : {participants}</div>
                </div>
                <div className='flex flex-col justify-center space-y-16'>
                    <div className={`flex flex-col xl:justify-evenly xl:space-y-4  h-full ${open && 'xl:space-y-4'}`}>
                        <h1 className='xl:text-4xl text-2xl hidden xl:block'> {heading}</h1>
                        <div className={` ${open ? 'flex-col justify-start space-y-4 xl:space-y-0 xl:space-x-8' : 'xl:justify-start justify-evenly items-center xl:space-x-8'} flex xl:flex-row items-start xl:items-center flex-col text-lg xl:text-xl h-full`}>
                            <div className={`${open ? 'justify-start' : 'justify-center'} flex flex-col xl:flex-row xl:items-center xl:space-x-2`}>
                                <h1 className='font-semibold'>Venue :</h1>
                                <h1>{venue}</h1>
                            </div>
                            <div className={`${open ? 'justify-start' : 'justify-center'} flex flex-col xl:flex-row xl:items-center xl:space-x-2 xl:w-fit w-full`}>
                                <h1 className='font-semibold'>Time :</h1>
                                <h1>{startingTime} - {endingTime}</h1>
                            </div>
                        </div>
                        <div className='hidden xl:block xl:space-y-4'>
                            <div className={`${open && 'hidden'} text-xl flex items-center space-x-2`}>
                                <h1 className='font-semibold'>Instructor / speaker :</h1>
                                <h1>{instructorOrspeaker?.name}</h1>
                            </div>
                            <div className={`space-y-2 ${open ? 'hidden' : 'xl:block hidden'} `}>
                                <h1 className='text-2xl font-semibold'>Event Winners</h1>
                                <div className='flex flex-start space-x-2'>
                                    {winners?.map((image, i) => {
                                        return <img src={image} className="rounded-full w-16 h-16" key={i} />
                                    })}
                                </div>
                            </div>
                            <div className={`rounded-full px-4 py-2 bg-[#1954ca36] text-center text-xl max-w-fit font-semibold ${!open && 'hidden'}`}>Participants : {participants}</div>
                        </div>
                    </div>
                    {open && <div className='space-y-12 child:space-y-8 transition-all duration-200 hidden xl:block'>
                        <div>
                            <h1 className='text-3xl font-semibold'>Instructor / speaker </h1>
                            <section className='flex justify-start space-x-4 '>
                                <img src={instructorOrspeaker?.image} className='w-32 rounded-full' />
                                <div className='flex flex-col items-start justify-center space-y-2'>
                                    <h1 className='text-xl'>{instructorOrspeaker?.name}</h1>
                                    <div className='flex justify-center space-x-2 child:text-[#7D7D7D] child:text-3xl'>
                                        <Link href={instructorOrspeaker?.linkedinLink}><a><AiFillLinkedin /></a></Link>
                                        <Link href={instructorOrspeaker?.githubLink}><a><AiOutlineGithub /></a></Link>
                                        <Link href={instructorOrspeaker?.twitterLink}><a><AiOutlineTwitter /></a></Link>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div>
                            <h1 className='text-3xl font-semibold'>Agenda</h1>
                            <div className='space-y-6'>
                                {agenda?.map((agenda, i) => {
                                    return (
                                        <div className='flex justify-start items-center text-xl' key={i}>
                                            <div className='flex items-center justify-start space-x-2 w-80'>
                                                <GoPrimitiveDot className='text-2xl' />
                                                <h1 className=''>{agenda.startTime} - {agenda.endingTime}{agenda.amOrpm}</h1>
                                            </div>
                                            <h1 className='w-full'>{agenda.subject}</h1>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>}
                    <div className={`space-y-2 ${!open ? 'hidden' : 'hidden xl:block'} `}>
                        <h1 className='text-3xl font-semibold'>Event Winners</h1>
                        <div className='flex flex-start space-x-2'>
                            {winners?.map((image, i) => {
                                return <img src={image} className="rounded-full w-20 h-20" />
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <h1 className='xl:text-4xl text-2xl xl:hidden font-semibold'>{heading}</h1>
            <div className={`text-xl flex flex-col space-y-2 xl:hidden`}>
                <h1 className='font-semibold'>Instructor / speaker :</h1>
                <h1>{instructorOrspeaker?.name}</h1>
            </div>
            <div className={`space-y-2 pb-16 xl:hidden`}>
                        <h1 className='text-xl font-semibold '>Event Winners</h1>
                        <div className='flex flex-start space-x-2'>
                            {winners?.map((image, i) => {
                                return <img src={image} className="rounded-full w-12 h-12" />
                            })}
                        </div>
                    </div>
            <div>
                <div className={`space-y-6 pb-16 ${!open && 'hidden'} xl:hidden`}>
                    <h1 className='text-3xl font-semibold'>Agenda</h1>
                    {agenda?.map((agenda, i) => {
                        return (
                            <div className='flex flex-col justify-start text-xl' key={i}>
                                <div className='flex items-center justify-center space-x-2 w-56 font-semibold'><GoPrimitiveDot className='text-2xl' />
                                    <h1 className='w-full'>{agenda.startTime} - {agenda.endingTime}{agenda.amOrpm}</h1>
                                </div>
                                <h1 className=''>{agenda.subject}</h1>
                            </div>
                        )
                    })}
                    <div className={`space-y-2`}>
                        <h1 className='text-3xl font-semibold'>Event Winners</h1>
                        <div className='flex flex-start space-x-2'>
                            {winners?.map((image, i) => {
                                return <img src={image} className="rounded-full w-16 h-16" />
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <button className='flex items-center justify-center space-x-2 bg-[#1954ca36] xl:px-4 px-2 py-2 rounded-full font-bold absolute bottom-7 right-8' onClick={() => open ? setOpen(false) : setOpen(true)}><span>Show {open ? 'less' : 'more'}</span><BsChevronDown /></button>

        </div>
    )
}

export default UpcomingEventCard