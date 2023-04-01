/* eslint-disable @next/next/no-img-element */
import React from 'react';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const DonateHome = () => {
  return (
    <>
      <div className="flex justify-between px-5 sm:px-40 bg-skin-main pt-10 mt-10 flex-col lg:flex-row">
        <div className="my-auto pb-10 text-center lg:text-left">
          <h1 className="text-white md:text-5xl text-3xl">
            Loved what we are doing?
          </h1>
          <a
            href="https://www.buymeacoffee.com/forclueless"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn-blue bg-white hover:bg-gray-200 mt-8 md:text-2xl flex items-center text-gray-800 mx-auto lg:mx-0 text-xl">
              <VolunteerActivismIcon className="mr-2 text-3xl" />
              Donate
            </button>
          </a>
        </div>
        <div className="mx-auto lg:mx-0">
          <img
            src="https://c.tenor.com/r2b7aS322tUAAAAi/mochi-peach-cat-cat.gif"
            alt="cat gif"
            className="w-80"
          />
        </div>
      </div>
    </>
  );
};

export default DonateHome;
