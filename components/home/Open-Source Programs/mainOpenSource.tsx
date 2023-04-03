/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import GSSOC from '../../../public/Gssoc.png';
import MLH from '../../../public/MLH.png';
import LFX from '../../../public/LFX.png';

function OpenSourcePrograms() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row box-border mx-w-screen justify-between items-center">
        <div className="p-3 lg:w-[45%] space-y-10">
          <h1 className="xl:text-5xl font-thin lg:text-4xl text-3xl">
            <span className="font-semibold text-[#7EE787]">
              Learn about some biggest
            </span>{' '}
            <span className="text-white">Open-source Programs</span>
          </h1>
          <button className="btn-green">
            <a>Explore</a>
          </button>
        </div>
        <div className="md:w-4/5 lg:w-3/5 relative md:p-10">
          <img
            className="relative z-10"
            src="/LandingPage/OpenSource/program.png"
            alt=""
          />
          <div className="green-gradient absolute z-0 lg:bottom-52 sm:bottom-24 bottom-16 lg:right-96"></div>
        </div>
      </div>
    </div>
  );
}

export default OpenSourcePrograms;
