/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Navbar from './components/shared/Navbar/Navbar'
import Footer from './components/shared/Footer'

const leaderboard = () => {
    return (
        <div>
            <Navbar />
            <div className='xl:my-20 my-4 md:mx-40 mx-4'>
                <h1 className='flex justify-center w-full xl:space-x-16 space-x-8 items-center xl:py-8 pb-4'><img src="/leaderboardlogo.png" alt='leaderboardLogo' className='w-16 xl:w-36'/><span className='xl:text-7xl md:text-4xl text-2xl font-bold'>Leaderboard</span></h1>
                <table className='w-full xl:text-xl text-lg box-content my-8 xl:my-12'>
                    <thead className='bg-skin-main text-white'>
                        <tr className='text-left child:py-2 child:px-2'>
                            <th className='xl:rounded-tl-md rounded-tl-sm xl:rounded-bl-md rounded-bl-sm'>No</th>
                            <th>Name</th>
                            <th className='xl:rounded-tr-md rounded-tr-sm xl:rounded-br-md rounded-br-sm w-fit'>Points</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {/* {leaderboardData?.map((data, i) => {
                            return (
                                <tr className={`${i % 2 === 0 && 'bg-[#1954ca33]'} rounded-md`} key={i}>
                                    <td className={`my-2 pl-2 xl:rounded-tl-md rounded-tl-sm xl:rounded-bl-md rounded-bl-sm font-semibold`}>{i + 1}.</td>
                                    <td className={`my-2 flex justify-start items-center xl:space-x-4 space-x-2 w-full`}><img src={data.image} className='w-16 rounded-full border-dashed border-2 border-blue-400' alt=''/><span>{data.name}</span></td>
                                    <td className='my-2 pr-2 xl:rounded-tr-md rounded-tr-sm xl:rounded-br-md rounded-br-sm w-fit'><div className='flex justify-start items-center space-x-2'><img src="/leaderboardlogo.png" alt='leaderboardLogo' className='w-8' /><span className='float-left'>{data.points}</span></div></td>
                                </tr>)
                        })} */}
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
    )
}

export default leaderboard