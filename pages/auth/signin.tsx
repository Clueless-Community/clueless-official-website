/* eslint-disable @next/next/no-img-element */
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { getProviders, signIn } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/shared/Navbar/Navbar';
import ModeSelect from '../components/shared/Navbar/ModeSelect';

const signin: React.FC = ({ providers }: any) => {
  return (
    <React.Fragment>
      <Head>
        <title>🔒ClueLess | LogIn</title>
      </Head>
      <>
        <Navbar />
        <div className="min-h-screen  flex flex-col lg:flex-row justify-center items-center bg-gray-100 dark:bg-zinc-900 space-y-12 lg:space-y-0">
          {/* Sign In Text and image */}
          <div className="relative lg:mb-44">
            <div className="absolute top-0 lg:-right-64 -right-4 w-44 h-44 bg-blue-300 dark:bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50" />
          </div>
          <div className=" flex flex-col justify-start items-center space-y-6 lg:mb-16">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-left w-full">
              Sign In to
            </h1>
            <h1 className="text-skin-main text-4xl lg:text-5xl xl:text-6xl font-bold text-left w-full">
              Clueless Community
            </h1>
          </div>
          <div className="flex">
            <img
              src="/loginRocket.PNG"
              alt="loginRocket"
              className="w-[400px] h-[300px] object-contain cursor-pointer"
            />
          </div>

          <div>
            <div className="flex flex-col items-center">
              <div className="space-y-6">
                <button
                  className="shadow-lg px-24 py-3 w-full text-lg flex items-center justify-center font-semibold bg-[#0276E1] hover:bg-[#0085FF] text-white max-w-[301px] rounded mx-auto hover:duration-150 hover:ease-in-out hover:scale-105 transition hover:-translate-y-2 hover:cursor-pointer"
                  onClick={(): void => {
                    signIn(providers.google.id, { callbackUrl: '/usercheck' });
                  }}
                >
                  <div className="flex justify-center space-x-2">
                    <GoogleIcon />
                    <p>Google</p>
                  </div>
                </button>
                <button
                  className="shadow-lg px-4 py-3 w-full font-semibold text-lg flex items-center justify-center bg-[#373636] hover:bg-[#262626] text-white max-w-[301px] rounded mx-auto hover:duration-150 hover:ease-in-out hover:scale-105 transition hover:-translate-y-2 hover:cursor-pointer"
                  onClick={(): void => {
                    signIn(providers.github.id, { callbackUrl: '/usercheck' });
                  }}
                >
                  <div className="flex justify-center space-x-2">
                    <GitHubIcon />
                    <p>GitHub</p>
                  </div>
                </button>
                {/* <button className="px-4 py-3 w-full font-semibold text-lg flex items-center justify-center bg-[#3F9CF0] hover:bg-[#2E9CFF] text-white max-w-[301px] rounded mx-auto cursor-pointer" onClick={(): void => { signIn(providers.twitter.id, { callbackUrl: "/usercheck" }) }}>
                  <div className="flex justify-center space-x-2">
                    <TwitterIcon />
                    <p>Twitter</p>
                  </div>
                </button> */}
              </div>
              <Link href="/" passHref>
                <p className=" text-center text-skin-main font-semibold hover:scale-105 hover:-translate-y-1 transition hover:ease-in-out cursor-pointer mt-10">
                  <p className="flex items-center justify-center">
                    <KeyboardArrowLeftIcon />
                    Go back Home
                  </p>
                </p>
              </Link>
            </div>
          </div>
          <div className="scale-50"></div>
        </div>
      </>
    </React.Fragment>
  );
};

export default signin;

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
};
