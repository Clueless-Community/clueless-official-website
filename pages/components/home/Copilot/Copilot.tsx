import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LoopIcon from '@mui/icons-material/Loop';
import { FaPython } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiGoland } from 'react-icons/si';

const Copilot = () => {
  return (
    <div className="my-[150px] xl:ml-[105px] md:mx-20 mx-[20px]">
      <h1 className="text-[#7EE787] xl:text-[55px] font-semibold xl:leading-[70.5px] leading-[30.5px] my-[55px] text-[36px]  xl:mr-[516px]">
        Get out of tutorial hell and start contributing{' '}
      </h1>
      <div className="flex flex-row h-[519px]">
        <div className="w-[800px]">
          <div className="h-[50px] flex flex-row bg-black rounded-t-[31px]">
            <button className="h-[100%] flex flex-row rounded-tl-[31px]">
              <FaPython className="text-[#b6b5b5] ml-[10px] mt-[15px]" />
              <h1 className="text-[#b6b5b5] ml-[5px] mt-[10px] mr-[10px]">
                draw_scatterplot.py
              </h1>
            </button>
            <button className="h-[100%] flex flex-row">
              <IoLogoJavascript className="text-[#b6b5b5] ml-[10px] mt-[15px]" />
              <h1 className="text-[#b6b5b5] ml-[5px] mt-[10px] mr-[10px]">
                time.js
              </h1>
            </button>
            <button className="h-[100%] flex flex-row">
              <SiGoland className="text-[#b6b5b5] ml-[10px] mt-[15px]" />
              <h1 className="text-[#b6b5b5] ml-[5px] mt-[10px] mr-[10px]">
                memoize.go
              </h1>
            </button>
          </div>
          <div className="h-[375px] bg-[#312b32]"></div>
          <div className="h-[93px] flex flex-row ">
            <button className="w-[667px] flex flex-row bg-black rounded-b-[31px]">
              <LoopIcon className="text-[30px] mt-[30px] ml-[273px] text-white" />
              <h1 className="text-[26px] mt-[27px] text-white">Replay</h1>
            </button>
          </div>
        </div>
        <div className="w-[800px]">
          <div className="h-[257px] mt-[120px] mr-[20px] ml-[75px]">
            <h1 className="text-[26px] mb-[20px] font-medium">
              Built with the vision to encourage open-source enthusiasts!
            </h1>
            <h1 className="text-[26px] font-medium">
              built with the vision to encourage open-source enthusiasts! built
              with the vision to encourage open-source enthusiasts!
            </h1>
          </div>
          <div className="ml-[75px]">
            <button className="bg-[#FFFFFF] text-[#7EE787] flex flex-row">
              <h1 className="text-[22px] font-extrabold">Explore</h1>
              <ArrowForwardIosIcon className="text-[23px] font-extrabold mt-[6px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copilot;
