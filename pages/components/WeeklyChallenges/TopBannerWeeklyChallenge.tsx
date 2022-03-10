import React from 'react'

const TopBannerWeeklyChallenge = () => {
    return (
        <div className='w-11/12 mx-auto lg:w-full relative'>
            <div className='lg:mx-28 flex justify-between items-center bg-gradient-to-r from-[#1955CA] to-blue-300 rounded-2xl my-12 px-10 h-[150px] sm:h-[200px] lg:h-[225px]'>
                <div className="hidden lg:block">
                    <p className='text-gray-50 text-3xl font-bold'>Challenge yourself <br /><span className='text-5xl'>NOW!👊</span></p>
                </div>
                <div className=' flex items-center'>
                    <p className="text-gray-50 xl:text-3xl text-xl font-bold mr-24 sm:mr-0">Monthly Top Scorer will <br />Get One for Free🔥</p>
                    <img src="/ClueLess Merch.png" alt="" className='w-32 sm:w-48 lg:w-60 absolute right-0 lg:relative' />
                </div>
            </div>

        </div>
    )
}

export default TopBannerWeeklyChallenge