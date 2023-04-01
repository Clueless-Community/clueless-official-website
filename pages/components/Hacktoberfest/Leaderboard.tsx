import Link from 'next/link';
import React from 'react';

const Leaderboard = () => {
  return (
    <div className="space-x-5 flex justify-between m-10 md:mx-20 text-center flex-col sm:flex-row lg:text-left pt-[24px] px-[20px] md:px-[91px]">
      <h1 className="text-[24px] lg:text-3xl my-auto">
        Checkout the Leaderboard🥇
      </h1>
      <div className="mt-5 sm:mt-0 ml-12">
        <Link href="/hacktoberfest/leaderboard" passHref>
          <button className="btn-blue">Visit</button>
        </Link>
      </div>
    </div>
  );
};

export default Leaderboard;
