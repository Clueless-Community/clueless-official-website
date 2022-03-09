import Head from "next/head";
import Link from "next/link";

import Navbar from "./components/Navbar/Navbar";

import React from "react";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <Navbar />
      <div className="scale-75">
        <div className="flex flex-col justify-center h-full  ">
          <img
            src="/cluelessdog404.png"
            alt=""
            className="mx-auto flex flex-row  justify-center"
          />
        </div>
        <div className="flex justify-center">
          <Link href="/">
            <button className="font-bold flex justify-center btn-blue bg-blue-600 text-white hover:bg-blue-700 mt-5 items-center mx-auto lg:mx-0  ">
              Go To Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
