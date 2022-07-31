import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "./components/shared/Navbar/Navbar";
import WhatIsClueLess from "./components/Home/WhatIsClueLess";
import UltimateResourceHub from "./components/Home/UltimateResourceHub";
import Footer from "./components/shared/Footer";
import TeamMembersHome from "./components/Home/TeamMembersHome";
import DonateHome from "./components/Home/DonateHome";
import HomeMain from "./components/Home/HomeMain";
import OpenSourceHome from "./components/Home/OpenSourceHome";
import SocialHome from "./components/Home/SocialHome";
import UpcomingEvents from "./components/Home/Events/UpcomingEvents";

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
      <WhatIsClueLess />
      <h2 className="md:text-6xl sm:text-5xl text-3xl text-center my-10 mt-28 font-bold sm:leading-[80px] leading-10">
        Dive into the world of <br />{" "}
        <span className=" text-skin-main ">Development🚀</span>
      </h2>
      <OpenSourceHome />
      <h1 className='child:text-skin-main md:text-6xl sm:text-5xl text-3xl text-center my-10 mt-28 font-bold sm:leading-[80px] leading-10'>️❤️<span>Events </span>by ClueLess <span>X</span> iNeuron.</h1>
      {/* <UpcomingEvents/> */}
      <UltimateResourceHub />
      <SocialHome />
      <DonateHome />
      <Footer />
    </>
  );
};

export default Home;
