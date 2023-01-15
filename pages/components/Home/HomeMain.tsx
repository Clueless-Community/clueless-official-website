/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import RightImage from "./RightImage";
import { SvgButton } from "../../../styles/Mui-styles/HoverFillButton";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Head from "next/head";


const HomeMain = () => {
  const session = useSession();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }
  }, []);

  const scrollToTop = () => {
    if (typeof window !== undefined) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Head>

      </Head>
      {showButton && (
        <div
          id="return_top"
          style={{
            position: "fixed",
            zIndex: "99",
            right: "5%",
            top: "90%",
            width: "50px",
            height: "50px",
            textDecoration: "none",
            borderRadius: "50%",
            backgroundColor: "#0b5ac2",
            padding: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={scrollToTop}
            className="fa fa-arrow-up"
            style={{ color: "white", fontSize: "25px" }}
          ></button>
        </div>
      )}
      <div
        className="lg:grid xl:grid-cols-2 xl:mx-40 mt-8 flex flex-col w-10/12 mx-auto lg:text-left md:py-28 pt-16"
        id="home"
      >
        <div>
          <h1 className="text-skin-main md:text-[90px] leading-tight font-bold text-5xl  animation">
            ClueLess <br /> <span className="text-gray-900 dark:text-white">Community</span>
          </h1>
          <h2 className=" font-raleway text-skin-main mt-5 text-4xl mb-16 animation">
            Learn.<span className="text-gray-900 dark:text-white">Grow.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-start ">
            <Link href={"/events"} passHref>
              <button className="btn-blue text-xl flex items-center px-6 py-3 shadow-blue-600 button_animation">Explore events</button>
            </Link>
            <div></div>
            <a href="https://discord.gg/zrVMjGW8sB" target="_blank" rel="noreferrer">
              <SvgButton className="sm:ml-10 mt-5 sm:mt-0 max-w-fit button_animation">
                <FaDiscord className="text-3xl text-[#1955CA]" />{" "}
                <span className=" font-nunito font-bold ">Join Discord</span>{" "}
              </SvgButton>
            </a>
          </div>
        </div>
        <div className="hover:scale-125 scale-110 transition-all xl:ml-auto xl:mr-10 mx-auto mt-32 xl:mt-0 hidden md:block">
          <RightImage />
        </div>
        <div className="mt-28 md:hidden">
          <img src="/home-code.png" alt="home-code" />
        </div>
      </div>
    </>
  );
};

export default HomeMain;
