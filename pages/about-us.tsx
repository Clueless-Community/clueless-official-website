/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';
import TeamMember from '../components/About/TeamMember';

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>ClueLess | About Us</title>
        <meta name="description" content="ClueLess About Us Page" />
      </Head>
      <div className=" p-10 relative ">
        <div className="hidden lg:block">
          <h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mt-24">
            About <br /> Community
          </h1>
          <p className="text-white lg:w-3/5 ml-12 xl:w-1/2 text-lg  mt-8 tracking-wider">
            Clueless in a virtual open-source community built with the motive of
            “Learn and Grow”. We, as a community, encourage and guide
            enthusiasts to dive into the world of open-source. We provide the
            best resources available on the internet, write blogs that helps
            other to explore their domain more deeply, organize events, GitHub
            repositories, organize hackathons, and more couniting activities
          </p>
          <img
            className="  lg:w-1/2 p-20 absolute top-56 xl:top-8 lg:right-0 lg:top-28"
            src="About/right.png"
            alt=""
          />
          <img
            className="w-32 top-72 ml-2 hidden absolute lg:block"
            src="About/greenLine.png"
            alt=""
          />
          <img
            className="mt-48 scale-x-110 -ml-8"
            src="About/card.svg"
            alt=""
          />
        </div>
        <div className="lg:hidden">
          <h1 className="text-6xl md:text-7xl font-bold text-white mt-24">
            About <br className="hidden" /> Community
          </h1>
          <img className="w-full my-8" src="About/right.png" alt="" />
          <p className="text-white tracking-wider">
            Clueless in a virtual open-source community built with the motive of
            “Learn and Grow”. We, as a community, encourage and guide
            enthusiasts to dive into the world of open-source. We provide the
            best resources available on the internet, write blogs that helps
            other to explore their domain more deeply, organize events, GitHub
            repositories, organize hackathons, and more couniting activities
          </p>
          <img
            className="w-5 m-3 lg:hidden"
            src="About/greenLineMobile.png"
            alt=""
          />
          <img src="About/cardMobile.svg" className="w-full" alt="" />
        </div>
        <TeamMember />
      </div>
    </>
  );
};

export default AboutUs;
