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
import Hacktoberfest from "./components/Home/Hacktoberfest";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ClueLess</title>
        <meta name="description" content="A virtual Open source and development community" />
        <meta property="og:image" content="https://i.ibb.co/WVBNFXB/Clueless-SS.png" />
      </Head>
      <Navbar />
      <HomeMain />
      <Hacktoberfest />
      <WhatIsClueLess />
      <h2 className="md:text-6xl sm:text-5xl text-3xl text-center my-10 mt-28 font-bold sm:leading-[80px] leading-10">
        Dive into the world of <br />{" "}
        <span className=" text-skin-main">Development🚀</span>
      </h2>
      <TeachStackLine />
      <div className="flex justify-center w-full lg:hidden">
        <img src="/Open-source Home.png" alt="" className="w-72 sm:w-96" />
      </div>
      <h1 className='child:text-skin-main md:text-6xl sm:text-5xl text-3xl text-center my-10 mt-28 font-bold sm:leading-[80px] leading-10'>️❤️<span>Events </span>by ClueLess <span>X</span> iNeuron.</h1>
      {/* <UpcomingEvents/>  */}
      <UpcomingEvents />
      <UltimateResourceHub />
      {/* Sponsors Section */}
      <div className="flex flex-col justify-center items-center xl:space-y-16 space-y-8 w-[10/12] mx-auto">
        <h1 className="xl:text-5xl font-bold md:text-4xl text-2xl">
          Our <span className="text-skin-main">Sponsors</span>
        </h1>
        <img src="ineuron-logo.png" alt="ineutron Logo" className="p-10"/>
      </div>
      {/* Community Partner Section */}
      <div className="mt-32 flex flex-col justify-center items-center xl:space-y-16 space-y-8 w-[10/12] mx-auto">
        <h1 className="xl:text-5xl font-bold md:text-4xl text-2xl">
          Our <span className="text-skin-main">Community Partners</span>
        </h1>
        <div className="flex space-x-5">
          <img src="flutter_kolkata.jpeg" alt="Flutter Kolkata Logo" className="w-[170px] sm:w-[250px]" />
          <img src="Metafy-3.png" alt="Flutter Kolkata Logo" className="w-[170px] sm:w-[250px]" />
        </div>
      </div>

      {/* <TeamMembersHome/> */}
      <SocialHome />
      <DonateHome />
      <Footer />
    </>
  );
};

export default Home;


