import React from 'react';
import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LoopIcon from '@mui/icons-material/Loop';
import { FaPython } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiGoland } from 'react-icons/si';

const Copilot = () => {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  const ActivateButton1 = () => {
    if (active1 === false) {
      setActive1(!active1);
    }
    if (active2 === true) {
      setActive2(!active2);
    }
    if (active3 === true) {
      setActive3(!active3);
    }
  };

  const ActivateButton2 = () => {
    if (active2 === false) {
      setActive2(!active2);
    }
    if (active1 === true) {
      setActive1(!active1);
    }
    if (active3 === true) {
      setActive3(!active3);
    }
  };

  const ActivateButton3 = () => {
    if (active3 === false) {
      setActive3(!active3);
    }
    if (active1 === true) {
      setActive1(!active1);
    }
    if (active2 === true) {
      setActive2(!active2);
    }
  };

  return (
    <div className="my-[150px] xl:ml-[105px] md:mx-20 mx-[20px]">
      <h1 className="text-[#7EE787] xl:text-[55px] font-semibold xl:leading-[70.5px] leading-[30.5px] my-[55px] text-[36px]  xl:mr-[516px]">
        Get out of tutorial hell and start contributing{' '}
      </h1>
      <div className="flex flex-row h-[519px]">
        <div className="w-[800px]">
          <div className="h-[50px] flex flex-row bg-[#262227] rounded-t-[31px]">
            <button
              onClick={ActivateButton1}
              className={`flex flex-row rounded-tr-[10px] ${
                active1 === true ? 'bg-black' : 'bg-[#262227]'
              }`}
            >
              <FaPython
                className={` ml-[10px] mt-[17px] ${
                  active1 === true ? 'text-white' : 'text-[#b6b5b5]'
                }`}
              />
              <h1 className="text-[#b6b5b5] ml-[5px] mt-[12px] mr-[10px]">
                draw_scatterplot.py
              </h1>
            </button>
            <button
              onClick={ActivateButton2}
              className={`flex flex-row ${
                active2 === true ? 'bg-black' : 'bg-[#262227]'
              }`}
            >
              <IoLogoJavascript
                className={` ml-[10px] mt-[17px] ${
                  active2 === true ? 'text-white' : 'text-[#b6b5b5]'
                }`}
              />
              <h1 className="text-[#b6b5b5] ml-[5px] mt-[12px] mr-[10px]">
                time.js
              </h1>
            </button>
            <button
              onClick={ActivateButton3}
              className={`flex flex-row ${
                active3 === true ? 'bg-black' : 'bg-[#262227]'
              }`}
            >
              <SiGoland
                className={` ml-[10px] mt-[17px] ${
                  active3 === true ? 'text-white' : 'text-[#b6b5b5]'
                }`}
              />
              <h1 className="text-[#b6b5b5] ml-[5px] mt-[12px] mr-[10px]">
                memoize.go
              </h1>
            </button>
          </div>

          <div className="flex flex-row h-[375px] bg-black">
            <div className="w-[20px] bg-[#262227]">
              <h1 className="text-white pl-[7px] pb-[5px] mt-[30px]">1</h1>
              <h1 className="text-white pl-[5px] pb-[5px]">2</h1>
              <h1 className="text-white pl-[5px] pb-[5px]">3</h1>
              <h1 className="text-white pl-[5px] pb-[5px]">4</h1>
              <h1 className="text-white pl-[5px] pb-[5px]">5</h1>
              <h1 className="text-white pl-[5px] pb-[5px]">6</h1>
              <h1 className="text-white pl-[5px] pb-[5px]">7</h1>
              <h1 className="text-white pl-[5px] pb-[5px]">8</h1>
              <h1 className="text-white pl-[5px] pb-[5px]">9</h1>
              <h1 className="text-white pl-[2px] pb-[5px]">10</h1>
              <h1 className="text-white pl-[4px] pb-[5px]">11</h1>
            </div>
            <div></div>
          </div>

          <div className="h-[93px] flex flex-row ">
            <button className="w-[667px] flex flex-row bg-[#262227] rounded-b-[31px]">
              <LoopIcon className="text-[30px] mt-[30px] ml-[273px] text-white" />
              <h1 className="text-[26px] mt-[27px] text-white">Replay</h1>
            </button>
          </div>
        </div>
        <div className="w-[800px]">
          <div className="h-[257px] mt-[80px] mr-[20px] ml-[75px]">
            <h1 className="text-[26px] mb-[20px] font-medium text-white">
              Built with the vision to encourage open-source enthusiasts!
            </h1>
            <h1 className="text-[26px] font-medium text-white">
              built with the vision to encourage open-source enthusiasts! built
              with the vision to encourage open-source enthusiasts!
            </h1>
          </div>
          <div className="ml-[75px]">
            <button className="text-[#7EE787] flex flex-row">
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
