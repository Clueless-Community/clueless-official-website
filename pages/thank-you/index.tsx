import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Link from "next/link";
const thankyou = () => {
  return (
    <>
      
        <Navbar />
        <div className="mt-14"> 
        <div className="flex flex-col  items-center justify-center ">
          <div>
            <div className="flex items-center justify-center font-semibold text-2xl md:text-4xl sm:text-3xl ">
              Thank You For Your Donation
            </div>
            <div className="scale-75">
              <img
                src="https://c.tenor.com/96iRPxYwxvAAAAAC/white-cat-grey-cat-cat-couple.gif"
                alt=""
              />
            </div>

            <div className="flex justify-center">
              <Link href="/">
                <button className="hover:drop-shadow-xl   font-bold flex justify-center btn-blue bg-blue-600 text-white hover:bg-blue">
                  Go To Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default thankyou;
