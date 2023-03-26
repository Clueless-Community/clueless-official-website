import React from 'react';
import teamMembers from '../../database/teamMembers';
import Card from './card';
const TeamMember = () => {
  return (
    <div className="mb-12 pb-48 sm:pb-0 mt-16 relative sm:mt-20 lg:mt-10">
      <div className="flex items-center flex-col-reverse justify-center">
        <div className="relative">
          <h1 className="text-3xl sm:text-5xl mt-[90px] sm:mt-[100px] lg:mt-44  text-center font-bold">
            Team Members
          </h1>
          <div>
            <div className="w-5 h-5 absolute -left-48 top-60 rounded-sm bg-[#AAEBB0]"></div>
            <div className="w-5 h-5 absolute rounded-sm -right-32 -bottom-32 bg-[#AAEBB0]"></div>
            <div className="w-5 h-5 absolute rounded-sm -right-[480px] -bottom-96 bg-[#7EE787]"></div>
            <div className="w-5 h-5 absolute rounded-sm  -right-[420px] -bottom-64 bg-[#AAEBB0]"></div>
            <div className="w-5 h-5 absolute rounded-sm right-40 -bottom-96 bg-[#AAEBB0]"></div>
            <div className="w-5 h-5 absolute rounded-sm -left-[420px] -bottom-[650px] bg-[#AAEBB0]"></div>
            <div className="w-5 h-5 absolute rounded-sm -right-[150px] -bottom-[850px] bg-[#AAEBB0]"></div>
            <div className="w-5 h-5 absolute rounded-sm -left-96 top-[550px] bg-[#4F855A]"></div>
            <div className="w-3 h-3 absolute rounded-sm -left-96 top-80 bg-[#4F855A]"></div>
            <div className="w-3 h-3 absolute rounded-sm left-96 -bottom-96 bg-[#4F855A]"></div>
            <div className="w-3 h-3 absolute rounded-sm -left-[100px] -bottom-[800px] bg-[#4F855A]"></div>
          </div>
        </div>
        <div className="-ml-40 sm:-ml-52 lg:-ml-96 flex">
          <div className="relative">
            <div className="h-5 w-5 lg:h-6 lg:w-6 rounded-full border-4 lg:border-[3.5px] border-[#7EE787]"></div>
            <div className="mx-auto h-8 lg:h-20 w-[0.2rem] bg-[#7EE787]"></div>
            <div className="absolute left-[0.55rem] lg:left-[0.65rem] h-5 w-5 rounded-bl-2xl lg:rounded-bl-full border-l-[0.2rem] border-b-[0.2rem] border-[#7EE787]"></div>
            <div className="absolute -bottom-5 left-7 h-[0.2rem] w-20 lg:w-40 bg-[#7EE787]"></div>
            <div className="absolute left-[6.5rem] lg:left-[11.7rem] -bottom-[2.3rem] h-5 w-5 rotate-180 rounded-bl-2xl lg:rounded-bl-full border-l-[0.2rem] border-b-[0.2rem] border-[#7EE787]"></div>
            <div className="absolute left-[7.53rem] lg:left-[12.75rem] -bottom-16 lg:-bottom-[117px] mx-auto h-8 lg:h-20 w-[0.2rem] bg-[#7EE787]"></div>
            <div className="absolute -bottom-[5.2rem] lg:-bottom-[8.7rem] left-28 lg:left-[194px] h-5 lg:h-6 lg:w-6 lg:border-[3.5px] w-5 rounded-full border-4 border-[#7EE787]"></div>
            {/* Blur Effect */}
            <div
              className="hidden md:block left-60 top-20 absolute shrink-0 w-[200px] h-[200px]"
              style={{
                background: 'rgba(126, 231, 135, 0.3)',
                filter: 'blur(182px)',
              }}
            />
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-4 grid-cols-2 lg:grid-cols-3 gap-y-24 mt-20 sm:gap-x-4 gap-x-10 px-5 sm:px-0 place-items-center">
        {teamMembers.map((item, index) => {
          return (
            <div key={index} className={`${index === 0}`}>
              <Card
                name={item.name}
                photo_url={item.photo_url}
                designation={item.designation}
                linkedin_url={item.linkedin_url}
                github_url={item.github_url}
                twitter_url={item.twitter_url}
              />
            </div>
          );
        })}
      </div>
      <div className="lg:mt-40 sm:mt-72 mt-40 sm:mb-52 mb-96 lg:mb-20 px-5 lg:px-0">
        <div className="flex w-full flex-wrap relative gap-4 justify-between items-center">
          <img
            src="/About/Bottom/flutter.svg"
            className="h-12 lg:relative absolute xl:h-16 sm:top-32 top-36 lg:top-0 sm:left-[45%] left-[40%] lg:left-0"
            alt="flutter"
          />
          <img
            src="/About/Bottom/kubernetes.svg"
            className="h-12 lg:relative absolute xl:h-16 sm:left-[25%] left-[15%] top-60 sm:-top-28 lg:top-0 lg:left-0"
            alt="kubernetes"
          />
          <img
            src="/About/Bottom/redux.svg"
            className="h-12 lg:relative absolute xl:h-16 sm:left-[25%] left-[15%] top-16 lg:top-0 lg:left-0"
            alt="Redux"
          />
          <img
            src="/About/Bottom/ether.svg"
            className="h-12 lg:relative absolute xl:h-16 sm:top-0 top-[400px] sm:left-[10%] left-[12%] lg:left-0"
            alt="ether"
          />
          <img
            src="/About/Bottom/github.svg"
            className="lg:h-24 h-16 xl:h-32 lg:relative absolute sm:left-[45%] left-[37%] lg:left-0"
            alt="Github"
          />
          <img
            src="/About/Bottom/react.svg"
            className="h-12 lg:relative absolute xl:h-16 sm:left-[82%] left-[66%] sm:top-0 top-[400px] lg:left-0"
            alt="react"
          />
          <img
            src="/About/Bottom/vscode.svg"
            className="h-12 lg:relative absolute xl:h-16 left-[66%] lg:left-0 top-16 lg:top-0"
            alt="vs code"
          />
          <img
            src="/About/Bottom/d3.svg"
            className="h-12 lg:relative absolute xl:h-16 left-[65%] lg:left-0 sm:-top-28 top-60 lg:top-0"
            alt="d3js"
          />
          <img
            src="/About/Bottom/polygon.svg"
            className="h-12 lg:relative absolute xl:h-16 sm:left-[45%] left-[40%] lg:left-0 sm:-top-40 top-80 lg:top-0"
            alt="polygon"
          />
          {/* Blur Effect */}
          <div
            className="hidden md:block -left-60 -top-[900px] absolute shrink-0 w-[200px] h-[200px]"
            style={{
              background: 'rgba(126, 231, 135, 0.3)',
              filter: 'blur(182px)',
            }}
          />
          {/* Blur Effect */}
          <div
            className="hidden md:block -right-60 -top-[700px] absolute shrink-0 w-[200px] h-[200px]"
            style={{
              background: 'rgba(126, 231, 135, 0.3)',
              filter: 'blur(182px)',
            }}
          />
          {/* Blur Effect */}
          <div
            className="hidden md:block -left-60 -top-20 absolute shrink-0 w-[200px] h-[200px]"
            style={{
              background: 'rgba(126, 231, 135, 0.3)',
              filter: 'blur(182px)',
            }}
          />
          {/* Blur Effect */}
          <div
            className="hidden md:block -right-60 -top-20 absolute shrink-0 w-[200px] h-[200px]"
            style={{
              background: 'rgba(126, 231, 135, 0.2)',
              filter: 'blur(182px)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
