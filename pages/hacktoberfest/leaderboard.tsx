import { CircularProgress } from '@mui/material';
import { query, collection, getDocs, orderBy } from 'firebase/firestore';
import Head from 'next/head';
import React, { SetStateAction } from 'react'
import { db } from '../../lib/clientApp';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar/Navbar';

const Leaderboard: React.FC = () => {
    const [leaderboard, setLeaderboard] = React.useState([]);
    const [loading, setLoading] = React.useState<boolean>(false);

    console.table(leaderboard);


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
        window.onbeforeunload = () => {
            window.scrollTo({top:0, behavior:'smooth'});
          }
        handleLeaderboardFetch();
    }, [])

    return (
        <div className='h-screen'>
            <Head>
                <title>Leaderboard</title>
            </Head>
            <Navbar />
            <div className="scale-75">
                <div className="flex flex-col justify-center h-full  ">
                    <img
                        src="/maintenance.png"
                        alt=""
                        className="mx-auto flex flex-row justify-center w-[500px]"
                    />
                    <h1 className='text-2xl sm:text-4xl text-center mt-5'>On Maintenance, Will be live soon.</h1>
                </div>
            </div>

        </div>
    )
}

export default Leaderboard
