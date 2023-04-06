/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import GSSOC from '../../../public/Gssoc.png';
import MLH from '../../../public/MLH.png';
import LFX from '../../../public/LFX.png';
import Link from 'next/link';

function OpenSourcePrograms() {
  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row mt-5 sm:mt-0 box-border mx-w-screen justify-between items-center">
        <div className="p-3 lg:w-[45%] space-y-5 sm:space-y-10">
          <h1 className="xl:text-5xl font-thin lg:text-4xl text-3xl">
            <span className="font-semibold text-[#7EE787]">
              Learn about some biggest
            </span>{' '}
            <span className="text-white">Open-source Programs</span>
          </h1>
          <Link href="404.tsx">
            <button className="btn-green">
              <a>Explore</a>
            </button>
          </Link>
        </div>
        <div className="flex justify-center lg:w-4/5 relative md:p-10">
          <img
            className="relative z-10 sm:block hidden"
            src="/LandingPage/OpenSource/program.png"
            alt=""
          />
          <img
            className="relative scale-110 z-10 sm:hidden block"
            src="/LandingPage/OpenSource/Group111.png"
            alt=""
          />
          <div className="green-gradient absolute z-0 lg:bottom-52 sm:bottom-24 bottom-16 lg:right-96"></div>
        </div>
      </div>
      <div className="flex sm:justify-end justify-start sm:h-40 h-28 ml-8 sm:ml-0 sm:mr-40">
        <img src="/line1.png" alt="line3 " />
      </div>
    </div>
  );
}

export default OpenSourcePrograms;
