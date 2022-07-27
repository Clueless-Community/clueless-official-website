import Head from "next/head";
import Link from "next/link";
import Navbar from "./components/shared/Navbar/Navbar";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <>
      <Head>
        <title>Oops! You are lost.</title>
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
            <button className="flex justify-center btn-blue mt-5 items-center mx-auto lg:mx-0 text-2xl ">
              Go To Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
