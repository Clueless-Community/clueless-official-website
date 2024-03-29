import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const oops = () => {
  return (
    <div className="relative">
      <Head>
        <title>ClueLess | Error</title>
        <meta name="description" content="ClueLess About Us Page" />
      </Head>
      <div className="green-gradient absolute z-0 -left-40 bottom-0 hidden sm:block "></div>
      <div className="green-gradient absolute z-0 sm:top-60 top-[40%] left-10 sm:left-[500px] "></div>
      <div className="green-gradient absolute z-0 bottom-0 -right-20 hidden sm:block "></div>
      <div className=" min-h-screen relative">
        <div className="flex flex-col sm:mt-0 items-center h-fit  min-h-screen">
          <img
            className="mx-auto mt-11 h-[55vh] w-auto sm:mt-[1%] sm:h-[68vh] sm:w-auto flex flex-row items-center max-h-screen md:mt-[1.7%] "
            src="./LandingPage/404/404-img.png"
            alt=""
          />
          <h2 className=" text-white text-xl sm:text-2xl md:text-3xl mx-auto font-black ">
            OOPS! PAGE NOT FOUND
          </h2>
          <Link href="/">
            <button className=" pl-[40px] pr-[40px] pb-[7px] pt-[7px] text-base items-center btn-green rounded-[5px] mt-5">
              Go Home
            </button>
          </Link>
        </div>
        {/* <img
          className="absolute opacity-70 top-[-190px] left-[-190px] w-[700px]"
          src="./LandingPage/shade/shade.png"
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default oops;
