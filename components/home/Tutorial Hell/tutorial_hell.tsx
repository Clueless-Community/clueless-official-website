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
import Link from 'next/link';

const TutorialHell = () => {
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
    <div className="relative mx-auto">
      <div className="green-gradient absolute z-0 bottom-52 -left-20"></div>
      <div className="relative z-10">
        <h1 className="text-[2rem] md:text-[3rem] text-[#7EE787] font-medium xl:leading-[55px] leading-[40px] my-12">
          Get out of tutorial hell and start <br className="sm:block hidden" />{' '}
          contributing{' '}
        </h1>
        <div className="flex xl:flex-row items-center xl:items-start flex-col">
          <div className="xl:w-[1300px] w-[320px] sm:w-[600px]">
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
              <div className="sm:text-base text-[14px] w-[20px] bg-[#262227]">
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
                <h1 className="text-slate-400 pl-[4px] pb-[5px] sm:hidden block">
                  12
                </h1>
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

            <div className="sm:h-[93px] h-[65px] flex flex-row xl:mt-0">
              <button
                onClick={ReplayButton}
                className="w-[100%] flex flex-row bg-[#262227] rounded-b-[31px] justify-items-center"
              >
                <div className="flex flex-row mx-auto my-auto">
                  <LoopIcon className="sm:text-[30px] text-[22px] mr-1 sm:mr-0 text-white my-auto" />
                  <h1 className="sm:text-[26px] text-[20px] text-white">
                    Replay
                  </h1>
                </div>
              </button>
            </div>
          </div>
          <div className="xl:ml-[40px]">
            <div className="xl:h-[227px] xl:mt-[100px] xl:mx-[100px] mt-[50px]">
              <h1 className="text-[22px] mb-[20px] font-medium text-white">
                Don't just always sit before your desktop watching Tutorials.
                Get out of Tutorial Hell!
              </h1>
              <h1 className="text-[22px] font-medium text-white">
                Contribute to our beginner-friendly repositories and gain
                practical experience on the technology you are eyeing to master.
              </h1>
            </div>
            <div className="xl:ml-[100px] mt-[10px] xl:mt-0">
              <Link href="/coming-soon" passHref>
                <button className="text-[#7EE787] flex flex-row">
                  <h1 className="xl:text-[22px] text-[20px] font-extrabold">
                    Explore
                  </h1>
                  <ArrowForwardIosIcon className="text-[23px] font-extrabold mt-[6px]" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex sm:h-40 h-28 m-10">
          <img src="/line1.png" alt="line3 " />
        </div>
      </div>
    </div>
  );
};

export default TutorialHell;
