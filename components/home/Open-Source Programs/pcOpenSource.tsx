import React from 'react';
import Image from 'next/image';
import GSSOC from '../../../public/Gssoc.png';
import MLH from '../../../public/MLH.png';
import LFX from '../../../public/LFX.png';

function PcOpenSource() {
  return (
    <>
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
        <div className="md:w-3/5 md:p-10">
          <img src="/LandingPage/OpenSource/program.png" alt="" />
        </div>
        {/* <div>
          <div className="m-4 h-[600px] text-[30px] relative">
            <div className="absolute z-7">
              <div className="bg-[#282E36] rounded-[46px] h-[200px] space-y-6  w-[28rem] border border-white lg:w-[35rem]">
                <div className="flex mx-4 my-1 justify-between">
                  <h3 className="ml-4 text-white h-[4rem] w-[16rem] my-2">
                    LFX Mentorship
                  </h3>
                  <Image
                    src={LFX}
                    alt="Picture of the LFX"
                    height={59.6}
                    width={153.5}
                    className="mr-[1rem]"
                  />
                </div>
                <div className="space-y-3 mx-4">
                  <div className="h-1 max-w-[300px] bg-white mx-5"></div>
                  <div className="h-1 max-w-[200px] bg-white mx-5"></div>
                  <div className="h-1 max-w-[270px] bg-white mx-5"></div>
                  <div className="h-1 max-w-[300px] bg-white mx-5"></div>
                </div>
              </div>
            </div>
            <div className="absolute -left-10 my-[6rem] z-8">
              <div className="bg-[#272D36] rounded-[46px] h-[200px] space-y-6 right-15 w-[30rem] border border-white mr-4 lg:w-[35rem]">
                <div className="flex mx-4 my-1 justify-between">
                  <h3 className="ml-4 text-white h-[4rem] w-[16rem] my-2 mx-4">
                    MLH Fellowship
                  </h3>
                  <Image
                    src={MLH}
                    alt="MLH"
                    className="mr-[2.5rem] mt-[1rem]"
                    height={50.8}
                    width={119.3}
                  />
                </div>
                <div className="space-y-3 mx-4">
                  <div className="h-1 max-w-[300px] bg-white mx-5"></div>
                  <div className="h-1 max-w-[200px] bg-white mx-5"></div>
                  <div className="h-1 max-w-[270px] bg-white mx-5"></div>
                  <div className="h-1 max-w-[300px] bg-white mx-5"></div>
                </div>
              </div>
            </div>
            <div className="absolute -left-20 my-[12rem] z-10">
              <div className="bg-[#282E36F7] rounded-[46px] h-[200px] space-y-6 right-20 w-[30rem] border border-white mr-4 lg:w-[35rem]">
                <div className="flex mx-4 justify-between">
                  <h3 className="ml-4 text-white h-[4rem] w-[30rem] my-1">
                    Google Summer Of Code
                  </h3>
                  <Image
                    src={GSSOC}
                    alt="GSSOC"
                    className="h-[5rem] left-[10rem]"
                    height={86.94}
                    width={261.5}
                  />
                </div>
                <div className="space-y-3 mx-4">
                  <div className="h-1 max-w-[380px] bg-white opacity-30 mx-5"></div>
                  <div className="h-1 max-w-[290px] bg-white mx-5"></div>
                  <div className="h-1 max-w-[330px] bg-white mx-5"></div>
                  <div className="h-1 max-w-[380px] bg-white mx-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default PcOpenSource;
