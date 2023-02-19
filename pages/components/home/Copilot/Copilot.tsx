import React from 'react';
import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LoopIcon from '@mui/icons-material/Loop';
import { FaPython } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiGoland } from 'react-icons/si';
import Py from './py';
import Js from './js';
import Go from './go';

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

  const ReplayButton = () => {
    if (active1 === true) {
      setActive1(false);
      setTimeout(() => setActive1(true), 50);
    }
    if (active2 === true) {
      setActive2(false);
      setTimeout(() => setActive2(true), 50);
    }
    if (active3 === true) {
      setActive3(false);
      setTimeout(() => setActive3(true), 50);
    }
  };

  return (
    <div className="mt-[150px] xl:ml-[105px] mx-[20px] mb-[400px] xl:mb-[200px] sm:px-[100px] md:px-[150px] lg:px-[200px] xl:px-0">
      <h1 className="text-[#7EE787] xl:text-[55px] font-semibold xl:leading-[70.5px] leading-[30.5px] my-[55px] text-[36px] xl:mr-[516px]">
        Get out of tutorial hell and start contributing{' '}
      </h1>
      <div className="flex xl:flex-row flex-col h-[519px]">
        <div className="xl:w-[1300px]">
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
                draw.py
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
                memo.go
              </h1>
            </button>
          </div>

          <div className="flex flex-row h-[375px] bg-black">
            <div className="w-[20px] bg-[#262227]">
              <h1
                className={`text-slate-400 pl-[7px] pb-[5px] ${
                  active3 === true ? 'mt-[15px]' : 'mt-[30px]'
                }`}
              >
                1
              </h1>
              <h1 className="text-slate-400 pl-[5px] pb-[5px]">2</h1>
              <h1 className="text-slate-400 pl-[5px] pb-[5px]">3</h1>
              <h1 className="text-slate-400 pl-[5px] pb-[5px]">4</h1>
              <h1 className="text-slate-400 pl-[5px] pb-[5px]">5</h1>
              <h1 className="text-slate-400 pl-[5px] pb-[5px]">6</h1>
              <h1 className="text-slate-400 pl-[5px] pb-[5px]">7</h1>
              <h1 className="text-slate-400 pl-[5px] pb-[5px]">8</h1>
              <h1 className="text-slate-400 pl-[5px] pb-[5px]">9</h1>
              <h1 className="text-slate-400 pl-[2px] pb-[5px]">10</h1>
              <h1 className="text-slate-400 pl-[4px] pb-[5px]">11</h1>
            </div>

            <div className={`w-[100%] ${active1 === true ? '' : 'hidden'}`}>
              <Py />
            </div>
            <div className={`w-[100%] ${active2 === true ? '' : 'hidden'}`}>
              <Js />
            </div>
            <div className={`w-[100%] ${active3 === true ? '' : 'hidden'}`}>
              <Go />
            </div>
          </div>

          <div className="h-[93px] flex flex-row mt-[25px] xl:mt-0">
            <button
              onClick={ReplayButton}
              className="w-[100%] flex flex-row bg-[#262227] rounded-b-[31px] justify-items-center"
            >
              <div className="flex flex-row mx-auto my-auto">
                <LoopIcon className="text-[30px] text-white my-auto" />
                <h1 className="text-[26px] text-white">Replay</h1>
              </div>
            </button>
          </div>
        </div>
        <div className="xl:ml-[80px]">
          <div className="xl:h-[227px] xl:mt-[100px] xl:mx-[100px] mt-[50px]">
            <h1 className="text-[22px] mb-[20px] font-medium text-white">
              Built with the vision to encourage open-source enthusiasts!
            </h1>
            <h1 className="text-[22px] font-medium text-white">
              built with the vision to encourage open-source enthusiasts! built
              with the vision to encourage open-source enthusiasts!
            </h1>
          </div>
          <div className="xl:ml-[100px] mt-[10px] xl:mt-0">
            <button className="text-[#7EE787] flex flex-row">
              <h1 className="xl:text-[22px] text-[20px] font-extrabold">
                Explore
              </h1>
              <ArrowForwardIosIcon className="text-[23px] font-extrabold mt-[6px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copilot;
