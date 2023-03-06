import Image from 'next/image';
import React from 'react';

function thankyou() {
  return (
    <div className="bg-white text-black h-screen w-screen w-full h-full text-center flex justify-center items-center flex-col font-ibmSans">
      <p className="font-medium lg:text-5xl md:text-4xl text-2xl">
        Thank You for Your Donation.
      </p>
      <p className="text-3xl font-medium ">User name</p>
      <div className="flex mt-8 mb-8">
        <Image
          className="h-[18px]"
          alt="leftquote"
          src="/leftquote.png"
          height={4}
          width={20}
        />
        <p className="md:w-[34rem] w-[16rem] text-xl">
          The value of life is not in its duration, but in its donation. You are
          not important because of how long you live, you are important because
          of how effective you live.
        </p>
        <Image
          className="h-[18px]"
          alt="rightquote"
          src="/rightquote.png"
          height={4}
          width={20}
        />
      </div>
      <Image
        alt="thankyou"
        src="/thankyoufordonation.png"
        width={300}
        height={300}
      />
      <p className="mt-8 font-medium text-rose-400 text-xl">
        **We will reach you soon within 7 days
      </p>
    </div>
  );
}

export default thankyou;
