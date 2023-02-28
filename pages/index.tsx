import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import UpcomingEvents from './components/home/events/UpcomingEvents';
import ReactTooltip from 'react-tooltip';
import OpenSource from './components/home/OpenSource/mainOpenSource';
import Copilot from './components/home/Copilot/Copilot';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ClueLess</title>
      </Head>
      <Copilot />
      <UpcomingEvents />
      <OpenSource />
    </>
  );
};

export default Home;
