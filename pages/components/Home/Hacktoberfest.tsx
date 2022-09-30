import React from 'react'
import ReadMoreIcon from '@mui/icons-material/ReadMore';


const Hacktoberfest = () => {
    return (
        <div className='bg-[#1B1424] md:grid lg:grid-cols-2 md:mx-40 m-20 flex flex-col text-center lg:text-left rounded-3xl py-[28px] px-[91px]'>
            <img src='/hacktoberfest_logo.png' className='mx-auto lg:mx-0' />
            <div className='my-auto'>
                <h1 className='text-white text-[14px] lg:text-3xl xl:text-4xl'>Join the biggest Open-source festival with Clueless & Win Amazing Swags 🎊</h1>
                <button className="btn-blue bg-white text-black hover:bg-gray-100 mt-10 flex items-center mx-auto lg:mx-0">
                    <ReadMoreIcon className="mr-2" />Learn More
                </button>
            </div>
        </div>
    )
}

export default Hacktoberfest