import Head from 'next/head'
import React from 'react'
import Clueless_Hacktoberfest from '../components/Hacktoberfest/Clueless_Hacktoberfest'
import Guidelines from '../components/Hacktoberfest/Guidelines'
import Leaderboard from '../components/Hacktoberfest/Leaderboard'
import Projects from '../components/Hacktoberfest/Projects'
import RewardsAndPerks from '../components/Hacktoberfest/RewardsAndPerks'
import Swags from '../components/Hacktoberfest/Swags'
import Why_Contribute from '../components/Hacktoberfest/Why_Contribute'
import Footer from '../components/shared/Footer'
import Navbar from '../components/shared/Navbar/Navbar'


const hacktoberfest = () => {
    return (
        <div>
            <Head>
                <title>Clueless | Hacktoberfest</title>
            </Head>
            <Navbar />
            <Leaderboard />
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