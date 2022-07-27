import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { AiFillLinkedin, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'
import { GoPrimitiveDot } from 'react-icons/go'
import { useState } from 'react'
import Collapse from '@mui/material/Collapse';


const agendaDummy = [
    {
        startTime: '12:30',
        amOrpm: 'pm',
        endTime: '1',
        subject: 'Intoduction'
    },
    {
        startTime: '1',
        amOrpm: 'pm',
        endTime: '2',
        subject: 'Intro to Machine Learning'
    },
    {
        startTime: '2',
        amOrpm: 'pm',
        endTime: '2:30',
        subject: 'Machine Learning and artificial Intelligence as a career option'
    },
    {
        startTime: '2:30',
        amOrpm: 'pm',
        endTime: '3',
        subject: 'Machine Learning and artificial Intelligence Roadmap'
    },
]

const UpcomingEventCard = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className=' bg-[#1954ca25] border-dashed border border-black font-nunito flex justify-between p-8 rounded-xl md:mx-40'>
            <section className='flex justify-center space-x-4'>
                <div>
                    <img src="/eventbanner.png" className="rounded-xl" />
                </div>
                <div className='flex flex-col justify-center space-y-16'>
                    <div className={`flex flex-col justify-evenly h-full ${open && 'space-y-4'}`}>
                        <h1 className='text-4xl'> Session 0 : Introduction</h1>
                        <div className={` ${open ? 'flex-col justify-start space-y-4' : 'justify-center space-x-8'} flex text-xl`}>
                            <div className={`${open ? 'justify-start' : 'justify-center'} flex items-center space-x-2`}>
                                <h1 className='font-semibold'>Venue :</h1>
                                <h1> Swami Vivekanda Hall</h1>
                            </div>
                            <div className={`${open ? 'justify-start' : 'justify-center'} flex items-center space-x-2`}>
                                <h1 className='font-semibold'>Time :</h1>
                                <h1> 12:00 - 4:00</h1>
                            </div>
                        </div>
                        <div className={`${open && 'hidden'} text-xl flex items-center space-x-2`}>
                            <h1 className='font-semibold'>Instructor / speaker :</h1>
                            <h1>Roshan Kumar (ML Expert)</h1>
                        </div>
                        <h1 className='text-xl font-semibold'>Win T-shirts, swags and free food. 🚀 </h1>
                    </div>
                    {open && <div className='space-y-12 child:space-y-8 transition-all duration-200'>
                        <div>
                            <h1 className='text-3xl font-semibold'>Instructor / speaker </h1>
                            <section className='flex justify-start space-x-4 '>
                                <img src="/profilePic.png" className='w-32 rounded-full' />
                                <div className='flex flex-col items-start justify-center space-y-2'>
                                    <h1 className='text-xl'>Roshan Kumar (ML Expert)</h1>
                                    <div className='flex justify-center space-x-2 child:text-[#7D7D7D] child:text-3xl'><AiFillLinkedin /><AiOutlineGithub /> <AiOutlineTwitter /></div>
                                </div>
                            </section>
                        </div>
                        <div>
                            <h1 className='text-3xl font-semibold'>Agenda</h1>
                            <div className='space-y-6'>
                                {agendaDummy.map((agenda, i) => {
                                    return (
                                        <div className='flex justify-start items-center space-x-20 text-xl' key={i}><div className='flex items-center justify-center space-x-2 w-44'><GoPrimitiveDot className='text-2xl' /><h1 className='w-full'>{agenda.startTime} - {agenda.endTime}{agenda.amOrpm}</h1></div><h1 className=''>{agenda.subject}</h1></div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>}
                </div>
            </section>
            <section className='flex flex-col justify-between'>
                <button className='bg-skin-main text-white px-4 py-2 rounded-md text-2xl'>Register</button>
                <button className='flex items-center justify-center space-x-2 bg-white px-4 py-2 rounded-full font-bold' onClick={() => open ? setOpen(false) : setOpen(true)}><span>Show {open ? 'less' : 'more'}</span><BsChevronDown /></button>
            </section>
        </div>
    )
}

export default UpcomingEventCard