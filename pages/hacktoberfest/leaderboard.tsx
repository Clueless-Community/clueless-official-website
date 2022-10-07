import { CircularProgress } from '@mui/material';
import { query, collection, getDocs, orderBy } from 'firebase/firestore';
import React, { SetStateAction } from 'react'
import { ILeaderboardHacktoberfest } from '../../interfaces/hacktoberfest_leaderboard';
import { db } from '../../lib/clientApp';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar/Navbar';

const leaderboard: React.FC = () => {
    const [leaderboard, setLeaderboard] = React.useState<ILeaderboardHacktoberfest[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);

    console.log(leaderboard);


    const handleLeaderboardFetch = React.useCallback(async () => {
        setLoading(true);
        setLeaderboard([])
        const leaderboardQuery = query(collection(db, `hacktoberfest2022`), orderBy('points'));
        const querySnapshot = await getDocs(leaderboardQuery);
        querySnapshot.forEach((doc) => {
            setLeaderboard((prev: any) => {
                return [{ ...doc.data() }, ...prev] as any
            })
        })
        setLoading(false);
    }, [])

    React.useEffect(() => {
        handleLeaderboardFetch();

    }, [])

    return (
        <div>
            <Navbar />
            {loading ? <div className='flex justify-center items-center h-screen'>
                <CircularProgress />
            </div> : <div className='xl:my-20 my-4 md:mx-40 mx-4'>
                <h1 className='flex justify-center w-full xl:space-x-16 space-x-8 items-center xl:py-8 pb-4 xl:text-5xl md:text-3xl sm:text-2xl text-xl font-bold'>🥇HacktoberFest LeaderBoard🥇</h1>
                <p className='my-1.5 sm:my-3 text-center'>Leaderboard will be updated everyday</p>
                <table className='w-full xl:text-xl text-lg box-content my-8 xl:my-12'>
                    <thead className='bg-[#1C1525] text-white'>
                        <tr className='text-left child:py-2 child:px-2'>
                            <th className='xl:rounded-tl-md rounded-tl-sm xl:rounded-bl-md rounded-bl-sm'>No</th>
                            <th>Name</th>
                            <th>PR Merged</th>
                            <th className='xl:rounded-tr-md rounded-tr-sm xl:rounded-br-md rounded-br-sm w-fit'>Points</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {leaderboard?.map((data, i) => {
                            return (
                                <tr className={`${i % 2 === 0 && 'bg-[#DBE0EB]'} rounded-md`} key={i}>
                                    <td className={`my-2 pl-2 xl:rounded-tl-md rounded-tl-sm xl:rounded-bl-md rounded-bl-sm font-semibold`}>{i + 1}.</td>
                                    <td className={`my-2 flex justify-start items-center xl:space-x-4 space-x-2 w-full`}><img src={data.avatar} className='w-16 rounded-full border-dashed border-2 border-blue-400' alt='' /><span>{data.name}</span></td>
                                    <td className={`my-2 pl-2 xl:rounded-tl-md rounded-tl-sm xl:rounded-bl-md rounded-bl-sm font-semibold`}>{data.pr_merged}</td>
                                    <td className='my-2 pr-2 xl:rounded-tr-md rounded-tr-sm xl:rounded-br-md rounded-br-sm w-fit'><div className='flex justify-start items-center space-x-2'><img src="/leaderboardlogo.png" alt='leaderboardLogo' className='w-8' /><span className='float-left'>{data.points}</span></div></td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>}
            <Footer />
        </div>
    )
}

export default leaderboard