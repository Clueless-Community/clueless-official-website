import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import WorkInProgress from '../components/WorkInProgress'

const index = () => {
  return (
    <div>
        <Head>
            <title>ClueLess | Challenegs & Event</title>
        </Head>
        <Navbar />
        <WorkInProgress />
    </div>
  )
}

export default index