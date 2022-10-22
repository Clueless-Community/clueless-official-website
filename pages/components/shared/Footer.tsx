/* eslint-disable @next/next/no-img-element */
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
      <div className="grid lg:grid-cols-5 sm:grid-cols-3 gap-8 grid-cols-1 md:px-28 sm:px-12 px-6 mt-auto bg-[#EFEFEF] pt-12 justify-items-start child:w-full shadow-inner">
        <div className="flex mb-auto flex-wrap justify-center">
          <div className="flex  items-center cursor-pointer">
            <img src="/ClueLess Logo.png" alt="" className="w-[70px]" />
          </div>
          <div className="mt-2">
            <h1 className=" font-raleway text-3xl ml-8">ClueLess</h1>
            <p className=" font-raleway ml-8 mt-1">Learn. Grow.</p>
          </div>
        </div>
        <div className="flex flex-col mx-auto my-5 mt-12 sm:my-0 sm:text-left text-center">
          <h3 className=" font-nunito font-semibold text-xl mb-8">Know Us</h3>
          <Link href="/about-us">
            <a className="my-3 hover:text-skin-main transition-all">About Us</a>
          </Link>
        </div>
        <div className="flex flex-col mx-auto my-5 sm:my-0 sm:text-left text-center">
          <h3 className=" font-nunito font-semibold text-xl mb-8">Legal</h3>
          <Link href="/privacy-policy">
            <a className="my-3 hover:text-skin-main transition-all">Privacy Policy</a>
          </Link>
          <Link href="/terms-condition">
            <a className="my-3 hover:text-skin-main transition-all">Terms & condition</a>
          </Link>
        </div>
        <div className="hidden sm:block lg:hidden"></div>
        <div className="flex flex-col mx-auto  my-5 sm:my-0 sm:text-left text-center">
          <h3 className="font-nunito font-semibold text-xl mb-8">Quick links</h3>
          <Link href="/events">
            <a
              className="my-3 hover:text-skin-main transition-all"
              href="https://www.clueless.tech/events"
              target="_blank"
              rel="noreferrer"
            >Events</a>
          </Link>
          <a
            className="my-3 hover:text-skin-main transition-all"
            href="https://clueless-resources.super.site/"
            target="_blank"
            rel="noreferrer"
          >
            Resources
          </a>

          <a
            href="https://clueless-blogs.hashnode.dev/"
            target="_blank"
            className="my-3 hover:text-skin-main transition-all"
            rel="noreferrer"
          >
            Blogs
          </a>
        </div>
        <div className="flex flex-col mx-auto  my-5 sm:my-0 sm:text-left text-center">
          <h3 className=" font-nunito font-semibold text-xl mb-8 sm:mt-12 lg:mt-0">Contact & Help</h3>
          <Link href="/contact-us">
            <a className="my-3 hover:text-skin-main transition-all">Contact Us</a>
          </Link>
          <Link href="/faq">
            <a className="my-3 hover:text-skin-main transition-all">FAQ</a>
          </Link>
          <div className="text-skin-main flex gap-10 my-3 justify-center md:justify-start">
            <a href="https://twitter.com/by_clueless" target="_blank" rel="noreferrer">
              <TwitterIcon className="text-3xl cursor-pointer hover:text-skin-hoverBlue hover:scale-110 transition-all" />
            </a>
            <a href="https://github.com/Clueless-Community" target="_blank" rel="noreferrer">
              <GitHubIcon className="text-3xl cursor-pointer hover:text-skin-hoverBlue hover:scale-110 transition-all" />
            </a>
            <a href="https://www.linkedin.com/company/clueless-tech" target="_blank" rel="noreferrer">
              <LinkedInIcon className="text-3xl cursor-pointer hover:text-skin-hoverBlue hover:scale-110 transition-all" />
            </a>
          </div>
        </div>
      </div>
      <div className="sm:px-40 flex justify-between text-sm py-10  bg-[#EFEFEF] flex-col items-center sm:flex-row shadow-xl">
        <p>Copyright &copy; by ClueLess 2022</p>
        <p className="mt-5 sm:mt-0">Powered by Clueless</p>
      </div>
    </>
  );
};

export default Footer;
