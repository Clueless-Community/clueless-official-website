import Head from 'next/head';
import React from 'react';

const comingSoon = () => {
  return (
    <div>
      <Head>
        <title>ClueLess | Coming Soon</title>
        <meta name="description" content="ClueLess About Us Page" />
      </Head>
      <div className="flex flex-col-reverse min-h-[90vh]">
        <div className=" flex items-center justify-center">
          <img
            className="sm:w-[95%] w-[800px] h-[150px] sm:h-auto md:w-[70%] mt-5"
            src="/comingSoon/globe.png"
            alt=""
          />
        </div>

        <div className="flex flex-col items-center">
          <img
            className="mt-[22vh] w-[90%] sm:w-[70%] sm:mt-[20vh] md:w-[45%] md:mt-[21vh]"
            src="/comingSoon/img1.png"
            alt=""
          />

          <img
            className="sm:w-[65%] w-[80%] mt-[6%] mb-[6%] sm:mt-[3%] sm:mb-[3%] md:w-[40%] md:mt-0 md:mb-0"
            src="/comingSoon/load.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default comingSoon;
