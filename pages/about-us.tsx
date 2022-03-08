import Head from 'next/head'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'

const aboutUs = () => {
  return (
    <div>
        <Head>
            <title>ClueLess | About Us</title>
        </Head>
        <Navbar />
        <Footer />
    </div>
  )
}

export default aboutUs