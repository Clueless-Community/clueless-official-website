/* eslint-disable @next/next/no-img-element */
import React from 'react';

const LackingSkills = () => {
  return (
    <main>
      <div className="">
        <div className="md:w-3/5 xl:w-1/2 space-y-2">
          <h1 className="text-[36px] text-[#72cf7b] whitespace-nowrap">
            Lacking skills?
          </h1>
          <h1 className="text-3xl text-white whitespace-nowrap">
            We got you covered.
          </h1>
          <h4 className="pb-2 text-lg text-gray-300">
            built with the vision to encourage open-source enthusiasts built
            with the vision to encourage open-source enthusiasts
          </h4>
          <button className="btn-green">Explore resource hub</button>
        </div>
        <div className="flex justify-center pt-8 mb-[-8rem] md:mb-5">
          <img
            className="-mt-28 xl:-mt-36 w-full hidden md:block"
            src="/path.png"
            alt="Path"
          />
          <img className="md:hidden w-1/2 " src="/path2.png" alt="Path" />
        </div>
      </div>

      {/* destop view svg */}

      {/* <div className="hidden lg:block h-[56vh] relative ">
        <h1 className="text-4xl text-[#72cf7b] absolute bottom-[36rem] left-[65.5rem]">
          App Dev
        </h1>
        <svg
          width="326"
          height="240"
          viewBox="0 0 366 321"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-[20rem] left-[50.5rem]"
        >
          <path
            d="M6 240.268C10.9259 222.807 65.5993 189.732 182.161 300.206C224.526 340.358 307.24 301.734 296.613 209.541C283.804 98.4291 348.632 20.0531 361 5"
            stroke="#7EE787"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="20 20"
          />
        </svg>
        <h1 className="text-4xl text-[#72cf7b] absolute bottom-[21rem] left-[49.5rem]">
          Web3
        </h1>
        <svg
          width="211"
          height="107"
          viewBox="0 0 271 133"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-[14.5rem] left-[38.5rem]"
        >
          <path
            d="M6 127C10.6697 112.143 1.17592 106.343 40.5 71.2171C79.8241 36.0909 120.749 56.1253 165 52.3553C254.5 44.7303 254.275 17.8085 266 5"
            stroke="#E5E5E5"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="20 20"
          />
        </svg>
        <h1 className="text-4xl text-[#72cf7b] absolute bottom-[11.5rem] left-[34.5rem]">
          Web Dev
        </h1>
        <svg
          width="424"
          height="169"
          viewBox="0 0 484 189"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-[2rem] left-[10.5rem]"
        >
          <path
            d="M6 104.589C10.4353 87.1377 36.3536 101.863 67.7369 55.967C132.798 -39.1803 179.813 3.23676 273.368 147.014C355.88 273.818 429.61 33.8838 479 33.8838"
            stroke="#7EE787"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="20 20"
          />
        </svg>
        <h1 className="text-4xl text-[#72cf7b] absolute bottom-[3.5rem] left-20 ">
          DevOps
        </h1>
      </div> */}

      {/* mobile view svg */}

      {/* <div className="h-[100%] lg:hidden relative">
        <h1 className="text-4xl text-[#72cf7b] flex justify-center py-1">
          App Dev
        </h1>
        <div className="flex justify-center">
          <svg
            width="73"
            height="166"
            viewBox="0 0 73 166"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.92116 163.206C0.684609 159.083 3.64733 134.832 53.7524 107.351C71.9635 97.3622 79.2074 62.2013 54.7707 53.7179C25.3192 43.4935 19.3583 9.49871 18.1967 2.99973"
              stroke="#7EE787"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="20 20"
            />
          </svg>
        </div>
        <h1 className="text-4xl text-[#72cf7b] flex justify-center py-1">
          Web 3
        </h1>
        <div className="flex justify-center">
          <svg
            width="39"
            height="175"
            viewBox="0 0 39 175"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32 172C23.7738 164.496 17.5302 167.049 5.65946 135.605C-6.21134 104.161 17.5344 91.4042 26.9864 68.6368C46.1033 22.589 28.8693 13.199 23.8402 2.99989"
              stroke="#E5E5E5"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="20 20"
            />
          </svg>
        </div>
        <h1 className="text-4xl text-[#72cf7b] flex justify-center py-1">
          Web Dev
        </h1>
        <div className="flex justify-center">
          <svg
            width="97"
            height="233"
            viewBox="0 0 97 233"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5309 230.305C11.5294 226.311 20.4235 215.933 10.3768 196.289C-10.4512 155.566 10.8129 138.484 72.52 111.085C126.943 86.9204 60.1859 26.1007 67.9685 3.20752"
              stroke="#7EE787"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="20 20"
            />
          </svg>
        </div>
        <h1 className="text-4xl text-[#72cf7b] flex justify-center py-1">
          DevOps
        </h1>
      </div> */}
    </main>
  );
};

export default LackingSkills;
