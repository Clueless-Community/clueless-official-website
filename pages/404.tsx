import Head from "next/head";
import Link from "next/link";

import Navbar from "./components/Navbar/Navbar";

import React from "react";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>OOPS,You're Lost</title>
      </Head>
      <Navbar />
      <div className="flex flex-col justify-center h-full">
      <div className="scale-75 ">
        <div className="  ">
          <img
            src="/cluelessdog404.png"
            alt=""
            className="mx-auto flex  justify-center mt-8"
          />
        </div>
        <div className="flex justify-center ">
          <Link href="/">
            <button className="mt-4 font-bold text-2xl flex justify-center btn-blue bg-blue-600 text-white hover:bg-blue">
              Go To Home
            </button>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default NotFound;
