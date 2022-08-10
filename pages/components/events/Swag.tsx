/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Swag = () => {
    return (
        <div className='xl:my-20 my-4 xl:mx-40 md:mx-20'>
            <div className='bg-gradient-to-r from-[#1955CA] to-[#C5DCFA] xl:rounded-3xl flex justify-between xl:px-8 px-4 font-raleway items-center xl:py-4 py-2 text-white'>
                <div className='hidden xl:block'>
                    <div className='font-semibold flex flex-col space-y-2'>
                        <span className='xl:text-3xl text-xl'>Attend Events &</span>
                        <span className='xl:text-5xl text-2xl'>Workshops 👊</span>
                    </div>
                </div>
                <h1 className='xl:hidden text-xl font-semibold'>
                    Monthy Top Scorer will
                    win this Swag 🔥
                </h1>
                <div className='flex xl:flex-row md:justify-end justify-between items-center space-x-6 xl:space-x-0'>
                    <h1 className='text-3xl font-semibold hidden xl:block'>Win amazing swags,<br /> stickers, t-shirts and<br /> cash prizes. </h1>
                    <img src='tshirt.png' alt='tshirt' className='w-32 xl:w-fit' />
                </div>
            </div>
        </div>

    )
}

export default Swag