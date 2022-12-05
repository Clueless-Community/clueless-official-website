import React from 'react'
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Link from 'next/link';

const Codepeak = () => {
    return (
        <div className='bg-[#00030C] md:grid lg:grid-cols-2 m-8 md:mx-40 sm:m-20 flex flex-col text-center lg:text-left rounded-3xl py-[28px] px-[20px] md:px-[91px]'>
            <img src='/codepeak.jpeg' alt="Codepeak logo" className='mx-auto lg:mx-0 p-5' />
            <div className='my-auto'>
                <h1 className='text-white text-[14px] lg:text-3xl xl:text-4xl'>Take part in this month long Open-source program & Win Amazing Swags 🎊</h1>
                <a href="https://www.codepeak.tech/project" target='_blank' rel="noopener noreferrer">

                    <button className="btn-blue bg-white text-black hover:bg-gray-100 mt-10 flex items-center mx-auto lg:mx-0">
                        <ReadMoreIcon className="mr-2" />Explore
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Codepeak