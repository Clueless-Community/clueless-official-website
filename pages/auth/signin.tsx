import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { getProviders, signIn } from "next-auth/react"
import { GetServerSideProps } from 'next';
import Head from "next/head";
import Link from "next/link";

const signin: React.FC = ({ providers }: any) => {
  return (
    <React.Fragment>
      <Head>
        <title>🔒ClueLess | LogIn</title>
      </Head>
      <>
      <img src="/sidelines-signin.png" alt="sidelines-signin" className=" absolute left-0 top-0 hidden lg:block scale-75" />
      <img src="/sidelines-signin.png" alt="sidelines-signin" className=" absolute right-0 bottom-0 rotate-180 scale-75 hidden lg:block" />
        <div className="min-h-screen flex justify-center items-center flex-col" >
          <div className="mb-10">
            <h1 className="text-4xl text-center">Welcome to <span className=" text-skin-main">Clueless <br /> Community</span></h1>
            <h1 className="text-xl text-center mt-5 font-bold">Log In</h1>
          </div>
          <div className="flex items-center">
            <div className=" hidden md:block">
              <img src="/signin-page-laptop.png" alt="signin-page-laptop" />
            </div>
            <div>
              <img src="/ClueLess Logo.png" alt="" className="block md:hidden mx-auto w-[90px] mb-6" />
              <h1 className="block md:hidden text-center font-semibold text-2xl w-[300px] mb-10">Welcome to Clueless Community </h1>
              <div className="space-y-6">
                <button className="px-24 py-3 w-full text-lg flex items-center justify-center font-semibold bg-[#0276E1] hover:bg-[#0085FF] text-white max-w-[301px] rounded mx-auto cursor-pointer" onClick={(): void => { signIn(providers.google.id, { callbackUrl: "/" }) }}>
                  <div className="flex justify-center space-x-2">
                    <GoogleIcon />
                    <p>Google</p>
                  </div>
                </button>
                <button className="px-4 py-3 w-full font-semibold text-lg flex items-center justify-center bg-[#373636] hover:bg-[#262626] text-white max-w-[301px] rounded mx-auto cursor-pointer" onClick={(): void => { signIn(providers.github.id, { callbackUrl: "/" }) }}>
                  <div className="flex justify-center space-x-2">
                    <GitHubIcon />
                    <p>GitHub</p>
                  </div>
                </button>
                <button className="px-4 py-3 w-full font-semibold text-lg flex items-center justify-center bg-[#3F9CF0] hover:bg-[#2E9CFF] text-white max-w-[301px] rounded mx-auto cursor-pointer" onClick={(): void => { signIn(providers.twitter.id, { callbackUrl: "/" }) }}>
                  <div className="flex justify-center space-x-2">
                    <TwitterIcon />
                    <p>Twitter</p>
                  </div>
                </button>
              </div>
              <Link href="/">
                <p className=" text-center text-skin-main font-semibold hover:underline cursor-pointer mt-10"><p className="flex items-center justify-center"><KeyboardArrowLeftIcon />Go back Home</p></p>
              </Link>
            </div>
          </div>
          <div className="scale-50">
          </div>
          <p className="text text-center text-red-500 mt-5">** Signup to become a member and get access to this amazing community</p>
        </div>
      </>
    </React.Fragment>
  );
};

export default signin;

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders()
  return {
    props: {
      providers
    }
  }
}
