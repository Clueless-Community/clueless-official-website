import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import UpcomingEvents from './components/home/events/UpcomingEvents';
import ReactTooltip from 'react-tooltip';
import OpenSource from './components/home/OpenSource/mainOpenSource';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ClueLess</title>
        <meta
          name="description"
          content="A virtual Open source and development community"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/WVBNFXB/Clueless-SS.png"
        />
      </Head>
      <UpcomingEvents />
      <OpenSource/>
    </>
  );
};

export default Home;
