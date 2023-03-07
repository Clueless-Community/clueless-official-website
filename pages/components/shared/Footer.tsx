/* eslint-disable @next/next/no-img-element */
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <><div className="bg-[#1B1B1B] relative">
      <div className="text-[#FFFFFF]">
      <div className="grid lg:grid-cols-5 sm:grid-cols-3 gap-8 grid-cols-1 md:px-28 sm:px-12 px-6 mt-auto bg-[#1B1B1B] pt-12 justify-items-start child:w-full shadow-inner dark:bg-zinc-900 ">
        <div className="flex mb-auto flex-wrap justify-center ">
          <div className="flex  items-center cursor-pointer">
            <img src="/ClueLess Logo.png" alt="" className="w-[65px] h-[60px]  top-[68px] left-[81px]  absolute " />
          </div>
          <div className="mt-2">
            <h1 className=" font-raleway text-3xl m-[20px] w-[164.31px] h-[46.28px]  top-[62px] left-[166px] absolute">ClueLess</h1>
           
          </div>
        </div>
        <div className="flex flex-col mx-auto my-5 mt-12 sm:my-0 sm:text-left text-center">
         
          <Link href="/about-us">
            <a className="font-['dm_sans'] absolute text-[#7EE787]  my-3 hover:text-skin-main transition-all">About Us</a>
          </Link>
          <Link href="#">
            <a className="font-['dm_sans'] absolute my-3 hover:text-skin-main transition-all bottom-[98px] ">Our goal</a>
          </Link>
        </div>
        <div className="flex flex-col mx-auto my-5 sm:my-0 sm:text-left text-center ">
          
          <Link href="/privacy-policy">
            <a className="my-3 hover:text-skin-main transition-all font-['dm_sans'] absolute text-[#7EE787]">Privacy Policy</a>
          </Link>
          <Link href="/terms-condition">
            <a className="my-3 hover:text-skin-main transition-all font-['dm_sans'] absolute top-[76px]">Terms & condition</a>
          </Link>
        </div>
        <div className="hidden sm:block lg:hidden"></div>
        <div className="flex flex-col mx-auto  my-5 sm:my-0 sm:text-left text-center">
          
          <Link href="/events">
            <a
              className="my-3 hover:text-skin-main transition-all font-['dm_sans'] absolute text-[#7EE787]"
              href="https://www.clueless.tech/events"
              target="_blank"
              rel="noreferrer"
            >Events</a>
          </Link>
          <a
            className="my-3 hover:text-skin-main transition-all font-['dm_sans'] absolute top-[76px] "
            href="https://clueless-resources.super.site/"
            target="_blank"
            rel="noreferrer"
          >
            Resources
          </a>

          <a
            href="https://clueless-blogs.hashnode.dev/"
            target="_blank"
            className="my-3 hover:text-skin-main transition-all font-['dm_sans'] absolute top-[108px]"
            rel="noopener"
          >
            Blogs
          </a>
          <a
            href="https://clueless-blogs.hashnode.dev/"
            target="_blank"
            className="my-3 hover:text-skin-main transition-all font-['dm_sans'] absolute top-[138px] "
            rel="noopener"
          >
            Projects
          </a>
        </div>
        <div className="flex flex-col mx-auto  my-5 sm:my-0 sm:text-left text-center">
        
          <Link href="/contact-us">
            <a className="my-3 hover:text-skin-main transition-all font-['dm_sans'] absolute text-[#7EE787]">Contact Us</a>
          </Link>
          <Link href="#">
            <a className="my-3 hover:text-skin-main transition-all font-['dm_sans']  absolute top-[76px]">Report a Issue</a>
          </Link>
          <div className="text-skin-main flex gap-10 my-3 justify-center md:justify-start  absolute top-[108px] text-[#FFFFFF]">
            <a href="https://twitter.com/by_clueless" target="_blank" rel="noreferrer">
              <TwitterIcon className="text-3xl cursor-pointer hover:text-skin-hoverBlue hover:scale-110 transition-all" />
            </a>
            <a href="https://github.com/Clueless-Community text-[#FFFFFF]" target="_blank" rel="noreferrer">
              <GitHubIcon className="text-3xl cursor-pointer hover:text-skin-hoverBlue hover:scale-110 transition-all" />
            </a>
            <a href="https://www.linkedin.com/company/clueless-tech" target="_blank" rel="noreferrer text-[#FFFFFF]">
              <LinkedInIcon className="text-3xl cursor-pointer hover:text-skin-hoverBlue hover:scale-110 transition-all" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="sm:px-40 flex justify-between text-sm py-10   flex-col items-center sm:flex-row shadow-xl dark:bg-zinc-900 bg-[#1B1B1B] pt-[108px] ">
       <p>Copyright 2022 by ClueLess</p>
        <p className="mt-5 sm:mt-0 pr-[46px]">Powered by Clueless</p>
        </div></div>
      </div>
     
    
    </>
  );
};

export default Footer;
