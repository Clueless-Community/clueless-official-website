import React from 'react'
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Link from 'next/link';


const Hacktoberfest = () => {
    return (
        <div className='bg-[#f5f0f7] md:grid lg:grid-cols-2 m-8 md:mx-40 sm:m-20 flex flex-col text-center lg:text-left rounded-3xl py-[28px] px-[20px] md:px-[91px] justify-center items-center'>
            <img src='/hacktoberfest_2022.svg' className='mx-auto lg:mx-0' />
            <div className='my-auto'>
                <h1 className='text-black text-[14px] lg:text-3xl xl:text-4xl p-10'>Join the biggest Open-source festival with Clueless & Win Amazing Swags 🎊</h1>
                <Link href="/hacktoberfest" passHref>
                    <button className="btn-blue bg-white text-black hover:bg-gray-100 flex mx-auto lg:mx-10">
                        <ReadMoreIcon className="mr-2" />Explore
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Hacktoberfest