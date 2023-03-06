import Image from 'next/image';
import React from 'react';

function error() {
  return (
    <div className="h-screen w-screen ">
      <div className="flex-col justify-center items-center bg-[url('/ErrorBG.png')] bg-center h-full w-full">
        <Image
          className="mx-auto"
          src="/Errorpic.png"
          alt="error"
          height={400}
          width={400}
        />
        <p className="text-center mb-8 mt-64 font-semibold">
          OOPS! PAGE NOT FOUND
        </p>
        <div className="w-full text-center ">
          <button
            className="rounded-full bg-orange-400 text-white py-4 px-16 shadow-lg rounded"
            type="button"
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </div>
  );
}

export default error;
