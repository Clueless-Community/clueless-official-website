import React from 'react';
import Image from 'next/image';
import GSSOC from '../../../../public/Gssoc.png';
import MLH from '../../../../public/MLH.png';
import LFX from '../../../../public/LFX.png';

function MobileOpensource() {
  return (
    <>
      <div className="bg-[#181f19] grid  grid-rows-2">
        <div className="grid  grid-rows-2 gap-4 ml-3">
          <h1 className="m-5 leading-[3rem] text-[44px]">
            <span className="font-bold  text-[#7EE787]">
              Learn about some biggest
            </span>{' '}
            <span className="text-white">Open-source Programs</span>
          </h1>
          <div>
            <button className="bg-[#7EE787] px-12 py-3 ml-3 rounded-md">
              Explore
            </button>
          </div>
        </div>
        {/* Card Section */}
        <div className="grid grid-cols-3 gap-4 mt-2 place-items-center">
          <div className="bg-[#282E36] border-[1px] border-white rounded-[25px] w-[129px] h-[246px] absolute z-10 rotate-[-4deg] mr-[240px]">
            <Image
              src={GSSOC}
              alt="Picture of the Gssoc"
              className="mt-[3rem] h-[55px]"
            />
            <h1 className="text-white text-center ">Google Summer Of Code</h1>
            <div className="space-y-3 m-[1rem]">
              <div className="h-1 w-[87.3px] bg-white"></div>
              <div className="h-1 w-[71.32px] bg-white"></div>
              <div className="h-1 w-[81.77px] bg-white"></div>
              <div className="h-1 w-[87.3px] bg-white"></div>
            </div>
          </div>
          <div className="bg-[#282E36] border-[1px] border-white rounded-[25px] w-[129px] h-[246px]  absolute  z-20 mb-[3rem]">
            <Image
              src={MLH}
              alt="Picture of the MLH"
              className="ml-8 m-[3rem] mb-[1rem]"
              height={30}
            />
            <h1 className="text-white text-center">MLH Fellowship</h1>
            <div className="space-y-3 m-[1rem]">
              <div className="h-1 w-[87.3px] bg-white"></div>
              <div className="h-1 w-[71.32px] bg-white"></div>
              <div className="h-1 w-[81.77px] bg-white"></div>
              <div className="h-1 w-[87.3px] bg-white"></div>
            </div>
          </div>
          <div className="bg-[#282E36] border-[1px] border-white rounded-[25px] w-[129px] h-[246px] absolute z-10 rotate-[4deg] ml-[240px]">
            <Image
              src={LFX}
              alt="Picture of the LFX"
              className="m-[3rem] mb-[1rem] ml-8"
              height={35}
            />
            <h1 className="text-white ml-[1rem] text-center px-1">
              LFX Mentorship
            </h1>
            <div className="space-y-3 m-[1rem]">
              <div className="h-1 w-[87.3px] bg-white"></div>
              <div className="h-1 w-[71.32px] bg-white"></div>
              <div className="h-1 w-[81.77px] bg-white"></div>
              <div className="h-1 w-[87.3px] bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileOpensource;
