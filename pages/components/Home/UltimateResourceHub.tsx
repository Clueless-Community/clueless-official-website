/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { motion } from "framer-motion";
import StorageIcon from '@mui/icons-material/Storage';
import Link from "next/link";

const UltimateResourceHub: React.FC = () => {
  const [state, setState] = useState<number>(0);

  return (
    <div className="md:grid lg:grid-cols-2 xl:mx-40 mt-10 flex flex-col text-center lg:text-left sm:mb-32">
      <div className="bg-skin-main lg:rounded-l-3xl md:rounded-t-3xl lg:rounded-tr-none py-20 transition-all duration-500 relative">
        <div className="xl:px-24 md:px-10 flex flex-col items-center w-11/12 mx-auto my-auto">
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
              The Ultimate Resource Hub
            </h2>
            <p className="text-gray-200 mt-8">
            Internet is flooded with so many resources that can make one confused and clueless. So we, the Clueless Community provide the best, filtered, and curated resources like YouTube videos, GitHub repositories, websites, cheatsheets, etc! 
            </p>
            <a href="https://clueless-resources.super.site/resources" target="_blank" rel="noreferrer">
              <button className="btn-blue bg-white text-black hover:bg-gray-100 mt-10 flex items-center mx-auto lg:mx-0">
              <StorageIcon className="mr-2 text-md"/>Explore
              </button>
            </a>
            <img src="/resource hub cat.png" alt="" className="w-32 absolute right-5 -bottom-[56px] md:hidden z-20" />
          </motion.div>
        </div>
      </div>
      <div className="md:bg-[#F2F2F2] lg:rounded-r-3xl md:rounded-b-3xl lg:rounded-bl-none pt-20 pb-10 relative">
        <div className="flex flex-col justify-end h-full">
          <img src="/resource hub.png" alt="" className="mx-auto w-80" />
          <img src="/resource hub cat.png" alt="" className="w-40 absolute right-5 -bottom-16 hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default UltimateResourceHub;
