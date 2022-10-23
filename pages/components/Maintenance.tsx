import Head from 'next/head'
import React from 'react'
import Navbar from './shared/Navbar/Navbar'

const Maintenance = () => {
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

export default Maintenance