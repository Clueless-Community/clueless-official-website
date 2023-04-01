import React from 'react';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Link from 'next/link';

const Codepeak = () => {
  return (
    <div className="codepeak22 mx-5 my-20 flex flex-col-reverse rounded-3xl bg-black text-white ring-8 ring-neutral-200 dark:ring-neutral-800 md:my-0 md:mx-40 lg:grid lg:grid-cols-2">
      <div className="content mb-16 flex w-full flex-col items-start justify-center px-12 sm:mt-16 md:px-20 lg:px-14 xl:px-24">
        <h1 className="title mb-12 w-full text-center text-4xl font-bold lg:mb-2 lg:text-left lg:text-4xl">
          Win Exciting <br className="lg:hidden"></br> Swags! 🎊
        </h1>
        <p className="tagline mb-4 w-full text-center text-xl font-light lg:text-left">
          Take part in this month-long Open-Source program!
        </p>
        <Link href="https://www.codepeak.tech/project" passHref>
          <button className="explore btn-blue mx-auto mt-10 flex items-center bg-white text-black hover:bg-gray-100 lg:mx-0 lg:py-3 lg:px-4">
            <ReadMoreIcon className="mr-2" />
            Explore
          </button>
        </Link>
      </div>
      <div className="banner-image relative h-72 w-full overflow-hidden rounded-t-3xl md:h-auto lg:rounded-r-3xl">
        <img
          src="/codepeak.jpeg"
          alt="Codepeak 2022"
          className="h-full w-full scale-125 object-cover object-top lg:scale-100 lg:object-center"
        />
        <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent lg:bg-gradient-to-r"></div>
      </div>
    </div>
  );
};

export default Codepeak;
