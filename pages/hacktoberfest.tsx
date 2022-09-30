import Head from 'next/head'
import React from 'react'
import Clueless_Hacktoberfest from './components/Hacktoberfest/Clueless_Hacktoberfest'
import Contribute from './components/Hacktoberfest/Contribute'
import Guidelines from './components/Hacktoberfest/Guidelines'
import Projects from './components/Hacktoberfest/Projects'
import RewardsAndPerks from './components/Hacktoberfest/RewardsAndPerks'
import Why_Contribute from './components/Hacktoberfest/Why_Contribute'
import Navbar from './components/shared/Navbar/Navbar'

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
            <Contribute />
            <Why_Contribute />
            <Guidelines />
        </div>
    )
}

export default hacktoberfest