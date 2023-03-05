/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
// import RightImage from "./RightImage";
// import { SvgButton } from "../../../styles/Mui-styles/HoverFillButton";
import { FaDiscord } from 'react-icons/fa';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Head from 'next/head';

const HomeMain = () => {
  const session = useSession();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('scroll', () => {
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
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Head>{}</Head>
      {showButton && (
        <div
          id="return_top"
          style={{
            position: 'fixed',
            zIndex: '99',
            right: '5%',
            top: '90%',
            width: '50px',
            height: '50px',
            textDecoration: 'none',
            borderRadius: '50%',
            backgroundColor: '#0b5ac2',
            padding: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={scrollToTop}
            className="fa fa-arrow-up"
            style={{ color: 'white', fontSize: '25px' }}
          ></button>
        </div>
      )}
      <div
        className="lg:grid xl:grid-cols-2 xl:mx-40 mt-8 flex flex-col w-10/12 mx-auto lg:text-left md:py-18 pt-16"
        id="home"
      >
        <div>
          <h1 className="text-white text-skin-main md:text-[6rem] mt-2 leading-tight font-bold text-5xl animation">
            ClueLess <br /> <span className="text-white">Community</span>
          </h1>
          <div className="relative">
            <img
              className="w-[14rem] absolute top-[1rem] left-[1rem] sm:w-[20rem] sm:top-[1rem] sm:left-[1rem]"
              src="/vectors/figure1.png"
              alt="figure1"
            />
            <img
              className="w-[2rem] absolute top-[12.1rem] left-[0.6rem] sm:w-[4.6rem] sm:top-[16.5rem] sm:left-[-0.5rem]"
              src="/vectors/figure2.png"
              alt="figure2"
            />
            <img
              className="w-[14rem] absolute top-[14rem] left-[1.5rem] sm:w-[20rem] sm:top-[20.5rem] sm:left-[1.8rem]"
              src="/vectors/figure3.png"
              alt="figure3"
            />
          </div>
          <h2 className="text-white font-raleway text-skin-main ml-20 mt-2 text-4xl mb-10 animation">
            Learn,<span className="text-white dark:text-white">Grow.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-start">
            <a
              href="https://discord.gg/zrVMjGW8sB"
              target="_blank"
              rel="noreferrer"
              className="invisible sm:visible"
            >
              <div className="sm:ml-20 mt-5 sm:mt-0 px-5 py-3 max-w-fit button_animation btn">
                <FaDiscord className="text-base" />{' '}
                <span className=" font-nunito font-bold ml-4">
                  Join Discord
                </span>{' '}
              </div>
            </a>
            <div></div>
            <Link href={'/events'} passHref>
              <button className="text-white w-[7rem] ml-[10rem] mt-[-6rem] text-[0.75rem] flex items-center py-3 btnborder button_animation sm:w-[12rem] sm:text-base sm:mt-[0rem] sm:ml-[3rem]">
                Explore projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMain;
