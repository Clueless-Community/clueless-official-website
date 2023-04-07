import React from 'react';
import { NextPage } from 'next';
import ExploreProjects from '../components/home/ExploreProjects/ExploreProjects';
import HeroSection from '../components/home/HeroSection/HeroSection';
import LackingSkills from '../components/home/lackingskills/lackingskills';
import OpenSourcePrograms from '../components/home/Open-Source Programs/mainOpenSource';
import TutorialHell from '../components/home/Tutorial Hell/tutorial_hell';
import WhatIsClueless from '../components/home/WhatIsClueless/WhatIsClueless';
import WorldOfOpenSource from '../components/home/WorldOfOpenSource/WorldOfOpenSource';
import Testimonial from '../components/home/Testimonials/testimonials';
import TeamMember from '../components/home/TeamSection/TeamMember';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ClueLess</title>
        <meta name="description" content="Clueless Home Page" />
      </Head>
      <HeroSection />
      <WhatIsClueless />
      <WorldOfOpenSource />
      <TutorialHell />
      <ExploreProjects />
      {/* <OpenSourceProfile /> */}
      <OpenSourcePrograms />
      <LackingSkills />
      {/* <UpcomingEvents /> */}
      <TeamMember />
      <Testimonial />
    </>
  );
};

export default Home;
