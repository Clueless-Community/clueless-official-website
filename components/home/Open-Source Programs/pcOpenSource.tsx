import React from 'react';
import Image from 'next/image';
import GSSOC from '../../../public/Gssoc.png';
import MLH from '../../../public/MLH.png';
import LFX from '../../../public/LFX.png';

function PcOpenSource() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row box-border mx-w-screen justify-between items-center">
        <div className="p-3 lg:w-1/3 space-y-10">
          <h1 className="leading-[3rem] text-[40px]">
            <span className="font-bold  text-[#7EE787]">
              Learn about some biggest
            </span>{' '}
            <span className="text-white">Open-source Programs</span>
          </h1>
          <button className="btn-green">
            <a>Explore</a>
          </button>
        </div>
        <div className="md:w-3/5 relative md:p-10">
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

export default PcOpenSource;
