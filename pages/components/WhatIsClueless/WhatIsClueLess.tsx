import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";
import { motion } from "framer-motion";
import BuildProjects from "./States/BuildProjects";
import OpenSource from "./States/OpenSource";
import Resources from "./States/Resources";
import WeeklyChallenges from "./States/WeeklyChallenges";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Link from "next/link";

const WhatIsClueLess: React.FC = () => {
  const [state, setState] = useState<number>(0);

  return (
    <div className="md:grid lg:grid-cols-2 md:mx-28 mt-10 flex flex-col-reverse text-center lg:text-left">
      <div className="md:bg-[#F2F2F2] lg:rounded-l-3xl md:rounded-t-3xl lg:rounded-tr-none pt-20 pb-10 relative">
        <div className="flex flex-col justify-end h-full">
          <img src="/what-is-cluless.png" alt="" className="mx-auto" />
        </div>
        <GitHubIcon
          className="absolute text-5xl hover:text-6xl transition-all cursor-pointer hover:text-skin-main text-skin-hoverBlue hidden md:block top-44 xl:left-32 lg:left-5 left-28"
          onMouseOver={() => {
            setState(1);
          }}
          onMouseOut={() => {
            setState(0);
          }}
        />
        <StorageIcon
          className="absolute text-5xl hover:text-6xl transition-all cursor-pointer hover:text-skin-main text-skin-hoverBlue hidden md:block top-12 2xl:left-60 xl:left-44 left-28"
          onMouseOver={() => {
            setState(2);
          }}
          onMouseOut={() => {
            setState(0);
          }}
        />
        <LocalPoliceIcon
          className="absolute text-5xl hover:text-6xl transition-all cursor-pointer hover:text-skin-main text-skin-hoverBlue hidden md:block top-12 2xl:right-72 xl:right-52 right-40"
          onMouseOver={() => {
            setState(3);
          }}
          onMouseOut={() => {
            setState(0);
          }}
        />
        <BuildIcon
          className="absolute text-5xl hover:text-6xl transition-all cursor-pointer hover:text-skin-main text-skin-hoverBlue hidden md:block top-44 xl:right-44 lg:right-16 right-40"
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
            "bg-skin-main lg:rounded-r-3xl md:rounded-b-3xl lg:rounded-bl-none py-20 transition-all duration-500") ||
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
              className="container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "fade",
                duration: 0.5,
              }}
            >
              <h2 className="font-semibold text-4xl text-white ease-in-out transition-all duration-1000">
                What is ClueLess?
              </h2>
              <p className="text-gray-200 mt-8">
                Clueless is a student community built with the vision to
                encourage open-source enthusiasts! We provide the best
                resources, conducts weekly contests to test your skills, a guide
                to Open-source, and help you build projects.
              </p>
              <Link href="/about-us">
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
            <WeeklyChallenges />
          )}
          {state === 3 && (
            <Resources />
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
