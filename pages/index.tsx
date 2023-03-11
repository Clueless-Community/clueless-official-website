import React from 'react';
import WorldOfOpenSource from './components/home/WorldOfOpenSource/WorldOfOpenSource';
import HeroSection from './components/home/HeroSection/HeroSection';
import WhatIsClueless from './components/home/WhatIsClueless/WhatIsClueless';
import TutorialHell from './components/home/Tutorial Hell/tutorial_hell';
import ExploreProjects from './components/home/ExploreProjects/ExploreProjects';
import OpenSourcePrograms from './components/home/Open-Source Programs/mainOpenSource';
import LackingSkills from './components/home/lackingskills/lackingskills';
import OpenSourceProfile from './components/home/OpenSourceProfile/OpenSourceProfile';
import Head from 'next/head';
import { NextPage } from 'next';
import UpcomingEvents from './components/home/Events/UpcomingEvents';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ClueLess</title>
      </Head>
      <HeroSection />
      <WhatIsClueless />
      <WorldOfOpenSource />
      <TutorialHell />
      <ExploreProjects />
      <OpenSourceProfile />
      <OpenSourcePrograms />
      <LackingSkills />
      <UpcomingEvents />
    </>
  );
};

export default Home;
