import Head from 'next/head'
import React from 'react'
import Navbar from '../components/shared/Navbar/Navbar'
import WorkInProgress from '../components/shared/WorkInProgress'

const index = () => {
  return (
    <div>
      <Head>
        <title>ClueLess | Challenge & Event</title>
      </Head>
      <Navbar />
      <WorkInProgress />
    </div>
  )
}

export default index