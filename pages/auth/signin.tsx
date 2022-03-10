import React from "react";
import TerminalIcon from "@mui/icons-material/Terminal";
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
    <div className="h-screen flex flex-col justify-center" >
    <div className="flex md:w-10/12 lg:w-8/12 mx-auto scale-110">
      <div className="hidden md:inline-block bg-skin-main text-white px-8 py-10 w-1/2 rounded-l-xl">
        <h1 className="text-center text-4xl font-semibold mb-10">
          Welcome to Clueless <br /> Community
        </h1>
        <div className="mt-6 space-y-8">
          <div className="inline-flex w-full justify-center">
            <TerminalIcon className="w-[52px] h-[62px] my-auto" />
            <div className="ml-6 max-w-[258px]">
              <h2 className="font-semibold">First Title</h2>
              <p className="text-xs">
                This is just a dummy text and I don’t know why the fuck you are
                reading
              </p>
            </div>
          </div>
          <div className="inline-flex w-full justify-center">
            <TerminalIcon className="w-[52px] h-[62px] my-auto" />
            <div className="ml-6 max-w-[258px]">
              <h2 className="font-semibold">First Title</h2>
              <p className="text-xs">
                This is just a dummy text and I don’t know why the fuck you are
                reading{" "}
              </p>
            </div>
          </div>
          <div className="inline-flex w-full justify-center">
            <TerminalIcon className="w-[52px] h-[62px] my-auto" />
            <div className="ml-6 max-w-[258px]">
              <h2 className="font-semibold">First Title</h2>
              <p className="text-xs">
                This is just a dummy text and I don’t know why the fuck you are
                reading
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="inline-block w-full md:w-1/2 px-8 py-10 md:bg-[#F2F2F2] rounded-r-xl">
        <h1 className="hidden md:block font-semibold text-2xl mb-20 ml-6 max-w-[258px]">Sign In</h1>
        <img src="/ClueLess Logo.png" alt="" className="block md:hidden mx-auto w-[90px] mb-6"/>
        <h1 className="block md:hidden text-center font-semibold text-2xl w-[300px] mb-10">Welcome to Clueless Community </h1>
        <div className="space-y-6">
          <button className="px-4 py-2 w-full text-lg flex items-center justify-center font-semibold bg-[#0276E1] hover:bg-[#0085FF] text-white max-w-[301px] rounded mx-auto cursor-pointer" onClick={(): void => { signIn(providers.google.id, { callbackUrl: "/checkuser" }) }}>
            <div className="flex justify-center space-x-2">
              <GoogleIcon />
              <p>Google</p>
            </div>
          </button>
          <button className="px-4 py-2 w-full font-semibold text-lg flex items-center justify-center bg-[#373636] hover:bg-[#262626] text-white max-w-[301px] rounded mx-auto cursor-pointer" onClick={(): void => { signIn(providers.github.id, { callbackUrl: "/checkuser" }) }}>
            <div className="flex justify-center space-x-2">
              <GitHubIcon />
              <p>GitHub</p>
            </div>
          </button>
          <button className="px-4 py-2 w-full font-semibold text-lg flex items-center justify-center bg-[#3F9CF0] hover:bg-[#2E9CFF] text-white max-w-[301px] rounded mx-auto cursor-pointer" onClick={(): void => { signIn(providers.twitter.id, { callbackUrl: "/checkuser" }) }}>
            <div className="flex justify-center space-x-2">
              <TwitterIcon />
              <p>Twitter</p>
            </div>
          </button>
        </div>
        <Link href="/">
        <p className=" text-center text-skin-main font-semibold hover:underline cursor-pointer mt-10"><p className="flex items-center justify-center"><KeyboardArrowLeftIcon/>Go back Home</p></p>
        </Link>
      </div>
    </div>
    </div>
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
