/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";
import { motion } from "framer-motion";
import BuildProjects from "./WhatIsClueLessStates/BuildProjects";
import OpenSource from "./WhatIsClueLessStates/OpenSource";
import Resources from "./WhatIsClueLessStates/Resources";
import WeeklyChallenges from "./WhatIsClueLessStates/WeeklyChallenges";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Link from "next/link";

const WhatIsClueLess: React.FC = () => {
  const [state, setState] = useState<number>(0);

  return (
    <div className="md:grid lg:grid-cols-2 md:mx-40 mt-10 flex flex-col-reverse text-center lg:text-left rounded-tr-3xl rounded-br-3xl">
      <div className="md:bg-[#F2F2F2] lg:rounded-l-3xl md:rounded-t-3xl lg:rounded-tr-none pt-20 pb-10 relative border-y-2 border-dashed border-l-2 border-black border-opacity-30">
        <div className="flex flex-col justify-end h-full">
          <img src="/what-is-cluless.png" alt="" className="mx-auto" />
        </div>
        <GitHubIcon
          className="absolute hover:scale-125 transition-all cursor-pointer hover:text-skin-main text-skin-hoverBlue  md:block top-44 xl:left-20 lg:left-5 left-10 sm:left-24"
          fontSize='inherit'sx={{fontSize: "50px"}}
          onMouseOver={() => {
            setState(1);
          }}
          onMouseOut={() => {
            setState(0);
          }}
        />
        <StorageIcon
          className="absolute text-5xl hover:scale-125 transition-all cursor-pointer hover:text-skin-main text-skin-hoverBlue  md:block top-12 2xl:left-60 xl:left-28 left-10 sm:left-24"
          fontSize='inherit'sx={{fontSize: "50px"}}
          onMouseOver={() => {
            setState(2);
          }}
          onMouseOut={() => {
            setState(0);
          }}
        />
        <LocalPoliceIcon
          className="absolute text-5xl hover:scale-125 transition-all cursor-pointer hover:text-skin-main text-skin-hoverBlue  md:block top-12 2xl:right-72 xl:right-40 sm:right-24 right-10"
          fontSize='inherit'sx={{fontSize: "50px"}}
          onMouseOver={() => {
            setState(3);
          }}
          onMouseOut={() => {
            setState(0);
          }}
        />
        <BuildIcon
          className="absolute text-5xl hover:scale-125 transition-all cursor-pointer hover:text-skin-main text-skin-hoverBlue  md:block top-44 xl:right-32 lg:right-16 sm:right-24 right-10"
          fontSize='inherit'sx={{fontSize: "50px"}}
          onMouseOver={() => {
            setState(4);
          }}
          onMouseOut={() => {
            setState(0);
          }}
        />
      </div>
      <div
        className={
          (state === 0 &&
            "bg-skin-main lg:rounded-r-3xl md:rounded-b-3xl lg:rounded-bl-none py-20 transition-all duration-500 ") ||
          (state === 1 &&
            "bg-gray-900 lg:rounded-r-3xl md:rounded-b-3xl lg:rounded-bl-none py-20 transition-all duration-500") ||
          (state === 2 &&
            "bg-[#1229F4] lg:rounded-r-3xl md:rounded-b-3xl lg:rounded-bl-none py-20 transition-all duration-500") ||
          (state === 3 &&
            "bg-[#DA6B1B] lg:rounded-r-3xl md:rounded-b-3xl lg:rounded-bl-none py-20 transition-all duration-500") ||
          (state === 4 &&
            "bg-[#7C19CA] lg:rounded-r-3xl md:rounded-b-3xl lg:rounded-bl-none py-20 transition-all duration-500") ||
          ""
        }
      >
        <div className="xl:px-24 md:px-10 flex flex-col items-center w-11/12 mx-auto my-auto">
          {state === 0 && (
            <motion.div
              className="container h-72 flex flex-col items-start justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "fade",
                duration: 0.5,
              }}
            >
              <h2 className="font-semibold text-4xl text-white ease-in-out transition-all duration-1000 text-center sm:text-left mx-auto sm:m-0">
                What is ClueLess?
              </h2>
              <p className="text-gray-200 mt-8">
              Clueless is a student community built with the vision to encourage development ! We provide the best resources, conducts contests, hackathons, workshops, sessions to test your skills, a guide to Open-source, and help you build projects.
              </p>
              <Link href="/about-us" passHref>
              <button className="btn-blue bg-white text-black hover:bg-gray-100 mt-10 flex items-center mx-auto lg:mx-0">
                <ReadMoreIcon className="mr-2"/>Learn More
              </button>
              </Link>
            </motion.div>
          )}
          {state === 1 && (
            <OpenSource />
          )}
          {state === 2 && (
            <Resources />
            )}
          {state === 3 && (
            <WeeklyChallenges />
            )}
          {state === 4 && (
            <BuildProjects />
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatIsClueLess;
