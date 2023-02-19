/* eslint-disable @next/next/no-img-element */
import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "./components/shared/Navbar/Navbar";
import WhatIsClueLess from "./components/Home/WhatIsClueLess";
import UltimateResourceHub from "./components/Home/UltimateResourceHub";
import Footer from "./components/shared/Footer";
import DonateHome from "./components/Home/DonateHome";
import HomeMain from "./components/Home/HomeMain";
import SocialHome from "./components/Home/SocialHome";
import TeachStackLine from "./components/shared/TeachStackLine";
import UpcomingEvents from "./components/Home/Events/UpcomingEvents";
import ReactTooltip from 'react-tooltip';
import Codepeak from "./components/Home/Codepeak";
import WorldOfOpenSource from "./components/Home/WorldOfOpenSource";

const Home: NextPage = () => {
  return (
    <>
      <ReactTooltip />
      <Head>
        <title>ClueLess</title>
        <meta name="description" content="A virtual Open source and development community" />
        <meta property="og:image" content="https://i.ibb.co/WVBNFXB/Clueless-SS.png" />
      </Head>
      <Navbar />
      <WorldOfOpenSource />
    </>
  );
};

export default Home;
