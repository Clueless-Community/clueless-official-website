import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import UpcomingEvents from './components/home/events/UpcomingEvents';
import Copilot from './components/home/Copilot/Copilot';
// import Navbar01 from './components/shared/Navbar/Navbar01';
import Navbar01 from './components/shared/Navbar/Navbar';
import HomeMain from './components/home/WhatIsClueless/HomeMain';
import WhatIsClueLess from './components/home/WhatIsClueless/WhatIsClueLess';
import WorldOfOpenSource from './components/home/WorldOfOpenSource/WorldOfOpenSource';
import Footer from './components/shared/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ClueLess</title>
      </Head>
      <Navbar01 />
      <HomeMain />
      <WhatIsClueLess />
      <Copilot />
      <UpcomingEvents />
      {/* <Copilot /> */}
      <WorldOfOpenSource />
      {/* <UpcomingEvents /> */}
      <Footer />
    </>
  );
};

export default Home;
