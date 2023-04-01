import React from 'react';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Link from 'next/link';

const Hacktoberfest = () => {
  return (
    <div className="bg-[#1B1424] dark:bg-neutral-800 md:grid lg:grid-cols-2 m-8 md:mx-40 sm:m-20 flex flex-col text-center lg:text-left rounded-3xl py-[28px] px-[20px] md:px-[91px]">
      <img
        src="/hacktoberfest.svg"
        alt="hacktoberfest logo"
        className="mx-auto lg:mx-0 p-5"
      />
      <div className="my-auto">
        <h1 className="text-white text-[14px] lg:text-3xl xl:text-4xl">
          Join the biggest Open-source festival with Clueless & Win Amazing
          Swags 🎊
        </h1>
        <Link href="/hacktoberfest" passHref>
          <button className="btn-blue bg-white text-black hover:bg-gray-100 mt-10 flex items-center mx-auto lg:mx-0">
            <ReadMoreIcon className="mr-2" />
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hacktoberfest;
