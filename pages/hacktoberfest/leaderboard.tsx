import Head from 'next/head';
import React from 'react'
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar/Navbar';

interface Ileaderboard {
    userName: string,
    PRLinks: string[],
    PRCount: number,
    Score: number,
    avatarUrl: string
}

const Leaderboard: React.FC = (leaderboardData) => {
    const leaderBoardDataArray = Object.values(leaderboardData)[0] as Ileaderboard[]

    console.log(leaderBoardDataArray);


    return (
        <div className=''>
            <Head>
                <title>Leaderboard</title>
            </Head>
            <Navbar />
            <div className='xl:my-20 my-4 md:mx-40 sm:mx-4 mx-1'>
                <h1 className='flex justify-center w-full xl:space-x-16 space-x-8 items-center xl:py-8 pb-4 xl:text-5xl md:text-3xl sm:text-2xl text-xl font-bold'>🥇Clueless LeaderBoard🥇</h1>
                <p className='my-1.5 sm:my-3 text-center'>Leaderboard will be updated everyday. Checkout the Points System <a href='https://clueless-resources.super.site/hacktoberfest/how-points-are-calculated' target='_blank' className='text-blue-600 hover:underline'>here</a>.</p>
                <table className='w-full xl:text-xl text-lg box-content my-8 xl:my-12'>
                    <thead className='bg-[#1C1525] text-white'>
                        <tr className='text-left child:py-2 child:px-2'>
                            <th className='xl:rounded-tl-md rounded-tl-sm xl:rounded-bl-md rounded-bl-sm'>No</th>
                            <th>Name</th>
                            <th className='text-center'>PR Merged</th>
                            <th className='xl:rounded-tr-md rounded-tr-sm xl:rounded-br-md rounded-br-sm w-fit'>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderBoardDataArray.map((data, i) => {
                            const avatarURL = data.avatarUrl === '#' ? 'https://i.stack.imgur.com/YaL3s.jpg' : data.avatarUrl
                            return (
                                <tr className={`${i % 2 === 0 && 'bg-[#DBE0EB]'} rounded-md`} key={i}>
                                    <td className={`my-2 pl-2 xl:rounded-tl-md rounded-tl-sm xl:rounded-bl-md rounded-bl-sm font-semibold`}>{i + 1}.</td>
                                    <td className={`my-2 flex justify-start items-center xl:space-x-4 space-x-2 w-full`}><img src={avatarURL} className='w-16 rounded-full border-dashed border-2 border-blue-400 text-sm ' alt='' /><span className='max-w-[113px] truncate sm:max-w-fit'>{data.userName}</span></td>
                                    <td className={`my-2 pl-2 xl:rounded-tl-md rounded-tl-sm xl:rounded-bl-md rounded-bl-sm font-semibold text-center`}>{data.PRCount}</td>
                                    <td className='my-2 pr-2 xl:rounded-tr-md rounded-tr-sm xl:rounded-br-md rounded-br-sm w-fit'><div className='flex justify-start items-center space-x-2'><img src="/leaderboardlogo.png" alt='leaderboardLogo' className='w-8' /><span className='float-left'>{data.Score}</span></div></td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    )
}

export default Leaderboard

export async function getStaticProps() {
    const res = await fetch('https://clueless-leaderboard.herokuapp.com/leaderboard');
    const leaderboardData = await res.json();

    return {
        props: {
            leaderboardData,
        },
        revalidate: 3600,
    }
}