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
      {/* Blur Effect */}
      <div
        className="hidden md:block absolute shrink-0 mt-24 w-[200px] h-[200px]"
        style={{
          background: 'rgba(126, 231, 135, 0.4)',
          filter: 'blur(180px)',
        }}
      />
      <div className="relative sm:p-10">
        <div className="hidden lg:block">
          <h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mt-24">
            About <br /> Community.
          </h1>
          <p className="text-white lg:w-3/5 ml-12 xl:w-1/2 text-lg mt-8 tracking-wider">
            Clueless in a virtual open-source community built with the motive of
            “Learn and Grow”. We, as a community, encourage and guide
            enthusiasts to dive into the world of open-source. We provide the
            best resources available on the internet, write blogs that helps
            other to explore their domain more deeply, organize events, GitHub
            repositories, organize hackathons, and more couniting activities
          </p>
          <div>
            <img
              className="lg:w-1/2 2xl:w-[600px] p-20 absolute top-56 xl:top-8 lg:-right-16 xl:right-0 lg:top-28"
              src="About/right.png"
              alt=""
            />
            {/* Blur Effect */}
            <div
              className="hidden md:block right-40 absolute shrink-0 w-[200px] h-[200px]"
              style={{
                background: 'rgba(126, 231, 135, 0.3)',
                filter: 'blur(180px)',
              }}
            />
          </div>
          <div>
            <img
              className="w-36 top-72 ml-2 hidden absolute lg:block"
              src="About/greenLine.png"
              alt=""
            />
            {/* Blur Effect */}
            <div
              className="hidden md:block -left-60 absolute shrink-0 w-[200px] h-[200px]"
              style={{
                background: 'rgba(126, 231, 135, 0.3)',
                filter: 'blur(180px)',
              }}
            />
          </div>

          <div className="mt-60 bg-[#272D36] flex relative border rounded-[32px]">
            <div className="flex items-center 2xl:gap-20 py-10">
              <img
                src="/About/vision.svg"
                className="-ml-20 h-52"
                alt="vision"
              />
              <div className="flex cursor-default flex-col lg:px-8 xl:px-20">
                <h1 className="text-[40px] text-[#F9F9F9] font-black tracking-wider">
                  Our Vision
                </h1>
                <p className="text-[#D4D4D4] text-xl tracking-wider">
                  Internet is flooded with so many resources that can make one
                  confused and clueless. So we provide the best, filtered, and
                  curated resources like YouTube videos, GitHub repositories,
                  websites, cheatsheets, etc!{' '}
                </p>
              </div>
            </div>
            <div className="bg-[#7EE787] w-5 p-7 rounded-r-[30px]"></div>
          </div>
        </div>
        <div className="lg:hidden">
          <h1 className="text-5xl px-2 md:text-7xl font-bold text-white mt-24">
            About <br className="hidden" /> Community.
          </h1>
          <div>
            {/* Blur Effect */}
            <div
              className="block  absolute shrink-0 top-80 left-20 w-[200px] h-[200px]"
              style={{
                background: 'rgba(126, 231, 135, 0.25)',
                filter: 'blur(182px)',
              }}
            />
            <img
              className="w-96 my-8 px-2 sm:mx-auto lg:mx-0"
              src="About/right.png"
              alt=""
            />
          </div>
          <p className="text-white font-normal text-[20px] px-3 tracking-wider">
            Clueless in a virtual open-source community built with the motive of
            “Learn and Grow”. We, as a community, encourage and guide
            enthusiasts to dive into the world of open-source. We provide the
            best resources available on the internet, write blogs that helps
            other to explore their domain more deeply, organize events, GitHub
            repositories, organize hackathons, and more couniting activities
          </p>
          <img
            className="w-5 my-3 ml-6 lg:hidden"
            src="About/greenLineMobile.png"
            alt=""
          />
          <div className=" bg-[#272D36] flex flex-col-reverse relative border rounded-[19px]">
            <div className="flex flex-col-reverse text-center items-center 2xl:gap-20 py-4">
              <img
                src="/About/vision.svg"
                className="h-48 sm:h-56 sm:-mb-20 -mb-16"
                alt="vision"
              />
              <div className="flex cursor-default flex-col px-8 xl:px-20">
                <h1 className="text-[36px] text-[#F9F9F9] font-black tracking-wider pb-8">
                  Our Vision
                </h1>
                <p className="text-[#D4D4D4] text-xl tracking-wider text-start pb-20">
                  Internet is flooded with so many resources that can make one
                  confused and clueless. So we provide the best, filtered, and
                  curated resources like YouTube videos, GitHub repositories,
                  websites, cheatsheets, etc!{' '}
                </p>
              </div>
            </div>
            <div className="bg-[#7EE787] p-5 rounded-t-[19px]"></div>
          </div>
        </div>
        <TeamMember />
      </div>
    </>
  );
};

export default AboutUs;
