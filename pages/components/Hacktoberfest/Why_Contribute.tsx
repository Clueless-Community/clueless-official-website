import React from 'react';

const Why_Contribute = () => {
  return (
    <div className="bg-gradient-to-r from-black via-blue-1000 to-blue-800  mx-10 mt-10 mb-20 md:mx-40 flex flex-col text-center lg:text-left rounded-3xl py-[28px] px-[40px] sm:px-[91px] space-y-7">
      <h1 className="text-[24px] text-white text-center lg:text-3xl xl:text-4xl">
        Why You Should Contribute?
      </h1>
      <div className="md:grid lg:grid-cols-2">
        <ol className="list-disc text-white text-[14px] sm:text-lg lg:text-xl xl:text-2xl space-y-1 md:space-y-3 my-auto">
          <li>Top Contributor will get Exclusive t-shirts for free</li>
          <li>All contributors will receive certificate for contributing</li>
          <li>Contribute to open-source and be the part of the revolution</li>
        </ol>
        <img src="/why_contribute.png" className="mx-auto hidden lg:block" />
      </div>
    </div>
  );
};

export default Why_Contribute;
