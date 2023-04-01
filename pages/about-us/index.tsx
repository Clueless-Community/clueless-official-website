/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/shared/Navbar/Navbar';
import Footer from '../components/shared/Footer';
import ProfileCard from '../components/AboutUS/ProfileCard';
import '../../database/profileData';
import profile from '../../database/profileData';
import OurVision from '../components/AboutUS/OurVision';
import TeachStackLine from '../components/shared/TeachStackLine';

const AboutUs = () => {
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
    <div>
      <Head>
        <title>ClueLess | About Us</title>
        <meta name="description" content="ClueLess About Us Page" />
      </Head>
      <Navbar />
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

      {/* top section  */}
      <div className=" bg-skin-main flex justify-center items-center h-[700px]">
        <div className="flex w-4/5 mx-auto justify-between">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="mb-8 text-center lg:text-left">
              <h1 className=" font-raleway font-bold text-6xl text-white tracking-wider leading-normal">
                About
              </h1>
              <h1 className=" font-raleway font-bold text-6xl text-white tracking-wider">
                ClueLess
              </h1>
            </div>
            <p className="text-[#EDECEC] text-lg font-nunito text-center lg:text-left">
              Clueless in a virtual open-source community built with the motive
              of “Learn and Grow”. We, as a community, encourage and guide
              enthusiasts to dive into the world of open-source. We provide the
              best resources available on the internet, write blogs that helps
              other to explore their domain more deeply, organize events, GitHub
              repositories, organize hackathons, and more couniting activities
            </p>
          </div>
          <div className="flex justify-center">
            <img
              className="w-[550px] object-contain hidden lg:block"
              src="/aboutUsGif.gif"
              alt="gif"
            />
          </div>
        </div>
      </div>

      {/* ClueLess Name Art */}
      <p className="absolute right-[-180px] rotate-[270deg] text-[120px] font-extrabold leading-3 hidden lg:block">
        {' '}
        <span className="text-[#1955CA] opacity-75 ">Clue</span>{' '}
        <span className="text-white">Less</span>
      </p>
      {/* our vision */}
      <OurVision />

      {/* Team Members */}
      <div className=" relative">
        <h1 className="font-raleway font-bold text-3xl sm:text-5xl text-center my-10 ">
          Team Members✨
        </h1>

        {/* SideLines */}
        <img
          src="./side-lines-about-us.png"
          className=" absolute left-10 md:block hidden"
          alt="side-lines-about-us"
        />
        <img
          src="./side-lines-about-us.png"
          className=" absolute right-10 md:block hidden top-96"
          alt="side-lines-about-us"
        />

        <div className="flex flex-wrap w-10/12 mx-auto justify-center">
          {profile.map((profiles, i) => {
            return (
              <div className="m-12" key={i}>
                <ProfileCard
                  key={profiles.id}
                  img={profiles.img}
                  username={profiles.name}
                  tag={profiles.tags}
                  about={profiles.about}
                  github={profiles.github}
                  linkedin={profiles.linkedin}
                  twitter={profiles.twitter}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-20">
        <TeachStackLine />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
