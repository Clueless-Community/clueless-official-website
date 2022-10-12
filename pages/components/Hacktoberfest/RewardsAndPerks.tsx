import Link from "next/link";
import React from "react";

const RewardsAndPerks = () => {
  return (
    <div>
      <h1 className="text-center text-[24px] lg:text-3xl xl:text-4xl">Rewards & Perks 🏆</h1>
      <div className="space-x-5 space-y-3 md:grid lg:grid-cols-2 m-10 md:mx-40 flex flex-col text-center lg:text-left py-[28px] px-[20px] sm:px-[91px]">
        <img src="/rewards.png" className="mx-auto md:mx-0" />
        <div className="ml-12 pt-8">
          <ol className="list-disc text-[14px] sm:text-lg lg:text-2xl space-y-1 md:space-y-3 my-auto">
            <li>Top Contributor will get Exclusive t-shirts for free</li>
            <li>All contributors will receive certificate for contributing</li>
            <li>Contribute to open-source and be the part of the revolution</li>
          </ol>
          <Link href="#" passHref>
            <button className="btn-blue mt-6">More Info</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RewardsAndPerks;
