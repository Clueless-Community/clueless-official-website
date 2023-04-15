/* eslint-disable @next/next/no-img-element */
import React from 'react';

const LackingSkills = () => {
  return (
    <div className="">
      <div className="md:w-3/5 xl:w-1/2 space-y-2">
        <h1 className="text-[36px] text-[#72cf7b] whitespace-nowrap">
          Lacking skills?
        </h1>
        <h1 className="text-3xl text-white whitespace-nowrap">
          We got you covered.
        </h1>
        <h4 className="pb-2 text-lg text-gray-300">
          We have curated all the resources all over the internet and
          categorised into Tech-Stack. One Stop Solution for your development
          resources.
        </h4>
        <a
          href="https://clueless-resources.super.site/resources"
          target="_blank"
          rel="noreferrer"
          className="relative z-100"
        >
          <button className="btn-green my-2">Explore resource hub</button>
        </a>
      </div>
      <div className="flex justify-center pt-8 md:mb-5">
        <img
          className="-mt-28 xl:-mt-36 w-full hidden md:block"
          src="/path.png"
          alt="Path"
        />
        <img className="md:hidden w-[50%]" src="/path2.png" alt="Path" />
      </div>
    </div>
  );
};

export default LackingSkills;
