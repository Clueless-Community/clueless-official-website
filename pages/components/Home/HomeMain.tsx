import React from 'react'
import RightImage from './RightImage'
import { SvgButton } from '../../../styles/Mui-styles/HoverFillButton'
import { FaDiscord } from 'react-icons/fa'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const HomeMain = () => {

    const session = useSession();

    return (
        <div className='lg:grid xl:grid-cols-2 xl:mx-40 mt-8 flex flex-col w-10/12 mx-auto lg:text-left md:py-28 pt-16'>
            <div>
                <h1 className='text-skin-main md:text-[90px] leading-tight font-bold text-5xl'>ClueLess <br /> <span className='text-gray-900'>Community</span></h1>
                <h2 className=' font-raleway text-skin-main mt-5 text-4xl mb-16 '>Learn.<span className='text-gray-900'>Grow.</span></h2>
                <div className='flex flex-col sm:flex-row items-start'>
                    {session.status === "unauthenticated" && (
                        <Link href="/auth/signin">
                            <button className='btn-blue text-xl flex items-center px-6 py-3 shadow-blue-600'>Become a Member</button>
                        </Link>
                    )}
                    {session.status === "authenticated" && (
                            <button className='btn-blue text-xl flex items-center px-6 py-3 shadow-blue-600'>Explore our Community</button>
                    )}
                    <div>
                    </div>
                    <a href="https://discord.gg/zrVMjGW8sB" target="_blank">
                        <SvgButton className='sm:ml-10 mt-5 sm:mt-0 max-w-fit'><FaDiscord className='text-3xl text-[#1955CA]' /> <span className=' font-nunito font-bold'>Join Discord</span> </SvgButton>
                    </a>
                </div>
            </div>
            <div className='hover:scale-125 scale-110 transition-all xl:ml-auto xl:mr-10 mx-auto mt-32 xl:mt-0 hidden md:block'>
                <RightImage />
            </div>
            <div className='mt-28 md:hidden'>
                <img src="/home-code.png" alt="" />
            </div>
        </div>
    )
}

export default HomeMain