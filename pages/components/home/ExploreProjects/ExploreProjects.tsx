import React from 'react';
import ExploreCard from './ExploreCard';

function ExploreProjects() {
  const contentData = [
    {
      title: 'ClueLess Official Website',
      tags: ['HTML', 'Tailwind CSS'],
      desc: 'built with the vision to encourage open-source enthusiasts!',
    },
    {
      title: 'SeamLess UI',
      tags: ['HTML', 'Tailwind CSS'],
      desc: 'built with the vision to encourage open-source enthusiasts!',
    },
    {
      title: 'Flutter UI Components',
      tags: ['Flutter', 'Tailwind CSS'],
      desc: 'built with the vision to encourage open-source enthusiasts!',
    },
  ];

  return (
    <div>
      <div className="w-full relative">
        {/* Heading Part */}
        <div className="flex justify-between gap-2 md:items-center flex-col md:flex-row mb-5">
          <h1 className="md:text-[64px] text-[36px] text-[#7EE787] font-medium">
            Explore Projects to contribute
          </h1>
          <button className="btn-outline">Explore projects</button>
        </div>

        {/* Cards */}
        <div className="flex md:flex-row flex-col gap-6 py-6">
          <div className="md:w-1/2 w-full">
            <ExploreCard data={contentData[0]} />
          </div>
          <div className="md:w-1/2 md:mt-40 w-full">
            <ExploreCard data={contentData[1]} />
          </div>
        </div>

        {/* Blur Effect */}
        <div
          className="hidden md:block absolute ml-56 shrink-0 -mt-24 w-[200px] h-[200px]"
          style={{
            background: 'rgba(126, 231, 135, 0.54)',
            filter: 'blur(180px)',
          }}
        />

        {/* Cards */}
        <div className="flex md:mt-1">
          <div className="w-1/4 hidden md:block pt-28 pb-12 px-10">
            {/* Connector Big Screen */}
            <div className="">
              <div className="flex h-[300px]">
                <div className="flex-1 pt-[6px] pl-[47px]">
                  <div className="border-t-[3px] border-l-[3px] border-[#7ee787] w-full h-full float-right rounded-tl-[30px]" />
                </div>
                <div className="w-4">
                  <div className="w-4 h-4 rounded-full border-[3px] border-[#7ee787]"></div>
                </div>
              </div>
              <div className="flex h-4">
                <div className="flex-1">
                  <div className="w-4 h-4 rounded-full ml-[40px] border-[3px] border-[#7ee787]"></div>
                </div>
                <div className="w-4"></div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full relative shrink-0">
            <ExploreCard data={contentData[2]} />
          </div>
          <div className="w-1/4 hidden md:block"></div>
        </div>

        {/* Connector Mobile */}
        <div className="md:hidden flex flex-col items-center w-fit px-8 py-12">
          <div className="w-4 h-4 rounded-full border-2 border-[#7ee787]" />
          <div className="border-l-2 border-[#7EE787] h-16" />
          <div className="w-4 h-4 rounded-full border-2 border-[#7ee787]" />
        </div>
      </div>
    </div>
  );
}

export default ExploreProjects;
