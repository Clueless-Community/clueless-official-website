import React from 'react';
import { BsGithub } from "react-icons/bs";
import { motion } from 'framer-motion';

const Js = () => {
  return (
    <div>
      <div>
        <h1 className="text-white pl-[18px] pb-[5px] mt-[30px]">
          <span className="text-[#c92828]">const</span> seconds{' '}
          <span className="text-[#73b2ed]">= 3600</span>{' '}
        </h1>
        <h1 className="text-white pl-[18px] pb-[5px] typewriter">
          <span className="text-[#c92828]">const </span>
          minutes
          <span className="text-[#73b2ed]"> = </span>
          seconds
          <span className="text-[#73b2ed]"> / 60</span>
        </h1>
      </div>
      <motion.div
        whileInView={{ y: [10, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="border-l-[3px] border-blue-600">
          <div className="bg-blue-600/[0.25]">
            <h1 className="text-white pl-[15px] pb-[5px]">
              <span className="text-[#c92828]">const </span>
              hours
              <span className="text-[#73b2ed]"> = </span>
              minutes
              <span className="text-[#73b2ed]"> / 60</span>
            </h1>
          </div>
          <div className="bg-blue-600/[0.25]">
            <h1 className="text-white pl-[15px] pb-[5px]">
              <span className="text-[#c92828]">const </span>
              days
              <span className="text-[#73b2ed]"> = </span>
              hours
              <span className="text-[#73b2ed]"> / 24</span>
            </h1>
          </div>
          <div className="bg-blue-600/[0.25]">
            <h1 className="text-white pl-[15px] pb-[5px]">
              <span className="text-[#c92828]">const </span>
              weeks
              <span className="text-[#73b2ed]"> = </span>
              days
              <span className="text-[#73b2ed]"> / 7</span>
            </h1>
          </div>
          <div className="bg-blue-600/[0.25]">
            <h1 className="text-white pl-[15px] pb-[5px]">
              <span className="text-[#c92828]">const </span>
              months
              <span className="text-[#73b2ed]"> = </span>
              days
              <span className="text-[#73b2ed]"> / 30</span>
            </h1>
          </div>
          <div className="bg-blue-600/[0.25]">
            <h1 className="text-white pl-[15px] pb-[5px]">
              <span className="text-[#c92828]">const </span>
              years
              <span className="text-[#73b2ed]"> = </span>
              months
              <span className="text-[#73b2ed]"> / 12</span>
            </h1>
          </div>
        </div>
        <div className="rounded-[5px] w-[83px] h-[37px] flex flex-row bg-blue-600">
          <BsGithub className="text-white mt-[10px] ml-[5px]" />
          <h1 className="text-white pt-[7px] ml-[2px]">Copilot</h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Js;
