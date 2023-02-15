import React from 'react';
import { TfiGithub } from 'react-icons/tfi';

const Go = () => {
  return (
    <div>
      <div>
        <h1 className="text-white pl-[15px] pb-[5px] mt-[15px]">
          <span className="text-[#c92828]">package </span> main
        </h1>
        <h1 className="text-white pl-[15px] pb-[5px]">
          <span className="text-[#c92828]">func </span>
          <span className="text-[#bb85eb]">Memoize</span>
          (fn
          <span className="text-[#c92828]"> func </span>
          (int) int)
          <span className="text-[#c92828]"> func </span>
          (int) int &#123;
        </h1>
      </div>
      <div className="border-l-[3px] border-blue-600 ">
        <div className="mr-[104px] pl-[25px] bg-blue-600/[0.25]">
          <h1 className="text-white pl-[15px] pb-[5px] ">
            cache
            <span className="text-[#73b2ed]"> := </span>
            <span className="text-[#bb85eb]">make</span>(
            <span className="text-[#c92828]">map</span>
            [int]int)
          </h1>
        </div>
        <div className="mr-[142px] pl-[25px] bg-blue-600/[0.25]">
          <h1 className="text-white pl-[15px] pb-[5px] ">
            <span className="text-[#c92828]">return func</span>
            (n int) int &#123;
          </h1>
        </div>
        <div className="mr-[106px] pl-[55px] bg-blue-600/[0.25]">
          <h1 className="text-white pl-[15px] pb-[5px] ">
            <span className="text-[#c92828]">if </span>
            v, ok
            <span className="text-[#73b2ed]"> := </span>
            cache[n]; ok &#123;
          </h1>
        </div>
        <div className="mr-[186px] pl-[85px] bg-blue-600/[0.25]">
          <h1 className="text-white pl-[15px] pb-[5px] ">
            <span className="text-[#c92828]">return </span>v
          </h1>
        </div>
        <div className="mr-[266px] pl-[55px] bg-blue-600/[0.25]">
          <h1 className="text-white pl-[15px] pb-[5px] ">&#125;</h1>
        </div>
        <div className="mr-[156px] pl-[55px] bg-blue-600/[0.25]">
          <h1 className="text-white pl-[15px] pb-[5px] ">
            cache[n]
            <span className="text-[#73b2ed]"> = </span>
            <span className="text-[#bb85eb]">fn</span>
            (n)
          </h1>
        </div>
        <div className="mr-[159px] pl-[55px] bg-blue-600/[0.25]">
          <h1 className="text-white pl-[15px] pb-[5px] ">
            <span className="text-[#c92828]">return </span>
            cache[n]
          </h1>
        </div>
        <div className="mr-[296px] pl-[25px] bg-blue-600/[0.25]">
          <h1 className="text-white pl-[15px] pb-[5px] ">&#125;</h1>
        </div>
        <div className="mr-[323px] bg-blue-600/[0.25]">
          <h1 className="text-white pl-[15px] pb-[5px] ">&#125;</h1>
        </div>
      </div>
      <div className="rounded-[5px] w-[83px] h-[37px] flex flex-row bg-blue-600">
        <TfiGithub className="text-white mt-[10px] ml-[5px]" />
        <h1 className="text-white pt-[7px] ml-[2px]">Copilot</h1>
      </div>
    </div>
  );
};

export default Go;
