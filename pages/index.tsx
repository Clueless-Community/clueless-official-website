import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import UpcomingEvents from './components/home/events/UpcomingEvents';
import WorldOfOpenSource from './components/home/WorldOfOpenSource/WorldOfOpenSource';
import ExploreProjects from './components/home/ExploreProjects/ExploreProjects';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ClueLess</title>
      </Head>
      {/* <Copilot /> */}
      <ExploreProjects />
      {/* <WorldOfOpenSource /> */}
      {/* <UpcomingEvents /> */}
    </>
  );
};

export default Home;
