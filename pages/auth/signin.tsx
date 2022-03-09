import React from "react";
import TerminalIcon from "@mui/icons-material/Terminal";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

const signin = () => {
  return (
    <div className="h-screen flex flex-col justify-center" >
    <div className="flex md:w-10/12 lg:w-8/12 mx-auto">
      <div className="hidden md:inline-block bg-skin-main text-white px-8 py-10 w-1/2">
        <h1 className="text-center text-4xl font-semibold mb-10">
          Welcome to Clueless Community
        </h1>
        <div className="mt-6 space-y-6">
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
      <div className="inline-block w-full md:w-1/2 px-8 py-10 md:bg-[#F2F2F2]">
        <h1 className="hidden md:block font-semibold text-lg mb-20 ml-6 max-w-[258px]">Sign Up</h1>
        <img src="/ClueLess Logo.png" alt="" className="block md:hidden mx-auto w-[90px] mb-6"/>
        <h1 className="block md:hidden text-center font-semibold text-2xl w-[300px] mb-10">Welcome to Clueless Community </h1>
        <div className="space-y-3">
          <div className="px-4 py-2 font-semibold bg-[#0276E1] text-white max-w-[301px] rounded mx-auto cursor-pointer">
            <div className="flex justify-center space-x-2">
              <GoogleIcon />
              <p>Google</p>
            </div>
          </div>
          <div className="px-4 py-2 font-semibold bg-[#373636] text-white max-w-[301px] rounded mx-auto cursor-pointer">
            <div className="flex justify-center space-x-2">
              <GitHubIcon />
              <p>GitHub</p>
            </div>
          </div>
          <div className="px-4 py-2 font-semibold bg-[#3F9CF0] text-white max-w-[301px] rounded mx-auto cursor-pointer">
            <div className="flex justify-center space-x-2">
              <TwitterIcon />
              <p>Twitter</p>
            </div>
          </div>
        </div>
        <p className="text-xs text-center mt-10">Already a member?  <a href="#" className="font-semibold">Sign In</a></p>
      </div>
    </div>
    </div>
  );
};

export default signin;
