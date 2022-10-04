import Head from 'next/head'
import React from 'react'
import Clueless_Hacktoberfest from './components/Hacktoberfest/Clueless_Hacktoberfest'
import Guidelines from './components/Hacktoberfest/Guidelines'
import Projects from './components/Hacktoberfest/Projects'
import RewardsAndPerks from './components/Hacktoberfest/RewardsAndPerks'
import Why_Contribute from './components/Hacktoberfest/Why_Contribute'
import Footer from './components/shared/Footer'
import Navbar from './components/shared/Navbar/Navbar'
import Swags from './components/Hacktoberfest/Swags'

const hacktoberfest = () => {
    return (
        <div>
            <Head>
                <title>Hacktoberfest</title>
            </Head>
            <Navbar />
            <Clueless_Hacktoberfest />
            <RewardsAndPerks />
            <Projects />
            <Swags />
            <Why_Contribute />
            <Guidelines />
            <Footer />
        </div>
    )
}

export default hacktoberfest