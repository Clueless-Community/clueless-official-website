import Link from 'next/link'
import React from 'react'
import { AiFillLinkedin, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'
import { GoPrimitiveDot } from 'react-icons/go'
import Navbar from '../components/shared/Navbar/Navbar'
import eventData from '../../dummyPrevEventData'
import Footer from '../components/shared/Footer'

const dynamicupcomig = () => {
    return (
        <div>
            <Navbar />
            <img src='/banner.png' />
            <div className='flex flex-col justify-center xl:px-24 px-8 xl:-mt-20 my-20 space-y-8 xl:space-y-0'>
                <div className='w-full flex justify-between items-start space-x-4'>
                    <img src='/eventbanner.png' className='xl:w-56 w-36' />
                    <button className='bg-[#949CAB] font-semibold text-white px-4 py-3 rounded-md text-lg xl:hidden'>
                        Event Ended
                    </button>
                </div>
                <div className='xl:ml-60 flex justify-between items-start' >
                    <div className='xl:space-y-6 space-y-3 xl:-mt-12'>
                        <span className='bg-[#1954ca4b] rounded-full py-2 px-3 font-semibold xl:text-xl text-lg'>offline</span>
                        <h1 className='xl:text-4xl text-3xl font-semibold '>
                            Session 1 : Into to Git & GitHub
                        </h1>
                        <div className={`text-xl xl:space-y-6 space-y-3`}>
                            <div className={`flex flex-col xl:flex-row xl:space-x-2 xl:items-center`}>
                                <h1 className='font-semibold text-skin-main'>Venue :</h1>
                                <h1> Swami Vivekanda Hall</h1>
                            </div>
                            <div className={`flex flex-col xl:flex-row xl:items-center xl:space-x-2 xl:w-fit w-full`}>
                                <h1 className='font-semibold text-skin-main'>Date & Time :</h1>
                                <h1>12 - 4 on 24th August 2022</h1>
                            </div>
                        </div>
                        <div className='space-y-4'>
                            <h1 className='xl:text-3xl text-2xl font-semibold text-skin-main'>Instructor / speaker </h1>
                            <div className='flex items-center max-w-fit flex-wrap'>
                                <section className='flex justify-start space-x-4  mr-4 xl:mr-0'>
                                    <img src='/profilePic.png' className='xl:w-28 w-20 rounded-full border-dashed border-2 border-zinc-400 xl:mr-8 mr-2 xl:mb-8 mb-4' />
                                    <div className='flex flex-col items-start justify-center space-y-2'>
                                        <h1 className='xl:text-xl text-lg'>Roshan Kumar</h1>
                                        <div className='flex justify-center space-x-2 child:text-[#7D7D7D] child:text-3xl'>
                                            <Link href='#'><a><AiFillLinkedin /></a></Link>
                                            <Link href='#'><a><AiOutlineGithub /></a></Link>
                                            <Link href='#'><a><AiOutlineTwitter /></a></Link>
                                        </div>
                                    </div>
                                </section>
                                <section className='flex justify-start space-x-4 mr-4 xl:mr-0'>
                                    <img src='/profilePic.png' className='xl:w-28 w-20 rounded-full border-dashed border-2 border-zinc-400 xl:mr-8 mr-2 xl:mb-8 mb-4' />
                                    <div className='flex flex-col items-start justify-center space-y-2'>
                                        <h1 className='xl:text-xl text-lg'>Roshan Kumar</h1>
                                        <div className='flex justify-center space-x-2 child:text-[#7D7D7D] child:text-3xl'>
                                            <Link href='#'><a><AiFillLinkedin /></a></Link>
                                            <Link href='#'><a><AiOutlineGithub /></a></Link>
                                            <Link href='#'><a><AiOutlineTwitter /></a></Link>
                                        </div>
                                    </div>
                                </section>
                                <section className='flex justify-start space-x-4  mr-4 xl:mr-0'>
                                    <img src='/profilePic.png' className='xl:w-28 w-20 rounded-full border-dashed border-2 border-zinc-400 xl:mr-8 mr-2 xl:mb-8 mb-4' />
                                    <div className='flex flex-col items-start justify-center space-y-2'>
                                        <h1 className='xl:text-xl text-lg'>Roshan Kumar</h1>
                                        <div className='flex justify-center space-x-2 child:text-[#7D7D7D] child:text-3xl'>
                                            <Link href='#'><a><AiFillLinkedin /></a></Link>
                                            <Link href='#'><a><AiOutlineGithub /></a></Link>
                                            <Link href='#'><a><AiOutlineTwitter /></a></Link>
                                        </div>
                                    </div>
                                </section>

                            </div>

                        </div>
                        <div className='space-y-4'>
                            <h1 className='text-3xl font-semibold'>Agenda</h1>
                            <div className='space-y-6'>
                                {eventData[0].agenda?.map((agenda, i) => {
                                    return (
                                        <div className='flex xl:flex-row flex-col justify-start xl:items-center xl:text-xl text-lg' key={i}>
                                            <div className='flex xl:items-center justify-start space-x-2 xl:w-80'>
                                                <GoPrimitiveDot className='text-2xl' />
                                                <h1 className=''>{agenda?.startTime} - {agenda.endingTime}{agenda.amOrpm}</h1>
                                            </div>
                                            <h1 className='w-full ml-2 xl:mr-0'>{agenda.subject}</h1>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={`space-y-2`}>
                            <h1 className='text-3xl font-semibold'>Event Winners</h1>
                            <div className='flex flex-start space-x-2 xl:space-x-8'>
                                {eventData[0]?.eventWinners?.map((image, i) => {
                                    return <img src={image} className="rounded-full w-16 xl:w-32 h-16 xl:h-32 border-2 border-dashed border-[#949CAB]" />
                                })}
                            </div>
                        </div>
                    </div>
                    <button className='bg-[#949CAB] font-semibold text-white px-4 py-3 rounded-md xl:text-xl text-lg hidden xl:block'>
                        Event Ended
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default dynamicupcomig