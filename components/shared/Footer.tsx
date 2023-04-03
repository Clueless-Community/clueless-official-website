/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';

const Footer: React.FC = () => {
  const ClueLogo = (color: string) => {
    return (
      <div style={{ margin: '2px' }}>
        <svg
          width="48"
          viewBox="0 0 65 60"
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.8241 54.2932C37.8241 73.529 60.7067 25.0978 45.0366 0C30.6352 22.7929 65 75.0657 65 55.8298C65 36.594 -16.3085 19.4636 2.95127 19.4636C22.211 19.4636 37.8241 35.0573 37.8241 54.2932Z"
            fill={color}
          />
        </svg>
      </div>
    );
  };

  return (
    <>
      <div className="grid lg:grid-cols-5 sm:grid-cols-3 gap-8 grid-cols-1 xl:px-24 md:px-10 px-5 mt-auto text-white bg-[#1B1B1B] pt-12 justify-items-start child:w-full shadow-inner dark:bg-zinc-900">
        <div className="flex mb-auto flex-wrap justify-center mx-auto">
          <div className="flex items-center cursor-pointer">
            {/* <img src="/ClueLess Logo.png" alt="" className="w-[70px]" /> */}
            {ClueLogo('white')}
          </div>
          <div className="mt-2">
            <h1 className="font-raleway text-3xl ml-3">ClueLess</h1>
            {/* <p className="font-raleway ml-8 mt-1">Learn. Grow.</p> */}
          </div>
        </div>
        <div className="flex flex-col jus mx-auto my-5 mt-12 sm:my-0 sm:text-left text-center">
          <h3 className="font-nunito font-semibold text-xl mb-8 text-[#7EE787]">
            Know Us
          </h3>
          <Link legacyBehavior href="/about-us">
            <a className="my-3 hover:text-skin-main transition-all">About Us</a>
          </Link>
        </div>
        <div className="flex flex-col mx-auto my-5 sm:my-0 sm:text-left text-center">
          <h3 className=" font-nunito font-semibold text-xl mb-8 text-[#7EE787]">
            Legal
          </h3>
          <Link legacyBehavior href="/privacy-policy">
            <a className="my-3 hover:text-skin-main transition-all">
              Privacy Policy
            </a>
          </Link>
          <Link legacyBehavior href="/terms-condition">
            <a className="my-3 hover:text-skin-main transition-all">
              Terms & condition
            </a>
          </Link>
        </div>
        <div className="hidden sm:block lg:hidden"></div>
        <div className="flex flex-col mx-auto  my-5 sm:my-0 sm:text-left text-center">
          <h3 className="font-nunito font-semibold text-xl mb-8 text-[#7EE787]">
            Quick links
          </h3>
          <a
            className="my-3 hover:text-skin-main transition-all"
            href="/#events"
          >
            Events
          </a>
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
          <h3 className=" font-nunito font-semibold text-xl mb-8 sm:mt-12 lg:mt-0 text-[#7EE787]">
            Contact & Help
          </h3>
          <Link legacyBehavior href="/contact-us">
            <a className="my-3 hover:text-skin-main transition-all">
              Contact Us
            </a>
          </Link>
          <Link legacyBehavior href="/faq">
            <a className="my-3 hover:text-skin-main transition-all">FAQ</a>
          </Link>
          <div className="text-skin-main flex gap-10 my-3 justify-center md:justify-start">
            <a
              href="https://twitter.com/by_clueless"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon className="text-3xl cursor-pointer hover:text-skin-hoverBlue hover:scale-110 transition-all" />
            </a>
            <a
              href="https://github.com/Clueless-Community"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="text-3xl cursor-pointer hover:text-skin-hoverBlue hover:scale-110 transition-all" />
            </a>
            <a
              href="https://www.linkedin.com/company/clueless-tech"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="text-3xl cursor-pointer hover:text-skin-hoverBlue hover:scale-110 transition-all" />
            </a>
          </div>
        </div>
      </div>
      <div className="sm:px-40 flex justify-between text-sm py-10 bg-[#1B1B1B] text-white flex-col items-center sm:flex-row shadow-xl dark:bg-zinc-900">
        <p>Copyright &copy; by ClueLess 2022</p>
        <p className="mt-5 sm:mt-0">Powered by Clueless</p>
      </div>
    </>
  );
};

export default Footer;
