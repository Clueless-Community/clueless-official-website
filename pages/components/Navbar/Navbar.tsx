import Link from "next/link";
import React from "react";
import NavbarAvatarDropDown from "./NavbarAvatarDropDown";
import NavbarDrawer from "./NavbarDrawer";
import { NextComponentType } from "next";

const Navbar: NextComponentType = () => {
  return (
    <nav className="flex justify-between sm:px-28 px-5 py-5 items-center shadow-xl">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <img src="/ClueLess Logo.png" alt="" className="w-[65px]" />
          <h1 className=" font-raleway text-3xl ml-8">ClueLess</h1>
        </div>
      </Link>
      <div className="hidden lg:block">
        <Link href="/">
          <button className="hover:font-semibold hover:underline cursor-pointer xl:mx-8 mx-5 text-xl transition-all">
            Home
          </button>
        </Link>

        <button className="hover:font-semibold hover:underline cursor-pointer xl:mx-8 mx-5 text-xl transition-all">
          <a href="https://blog.clueless.tech" target="_blank">
            Blogs
          </a>
        </button>

        <Link href="/resources">
          <button className="hover:font-semibold hover:underline cursor-pointer xl:mx-8 mx-5 text-xl transition-all">
            Resources
          </button>
        </Link>
        <Link href="/weekly-challenges">
          <button className="hover:font-semibold hover:underline cursor-pointer xl:mx-8 mx-5 text-xl transition-all">
            Challenges
          </button>
        </Link>
      </div>
      <NavbarAvatarDropDown 
      img="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwd2l0aCUyMGdsYXNzZXN8ZW58MHx8MHx8&w=1000&q=80"
      name="Rajdeep Sengupta"
      email="rajdipgupta019@gmail.com"/>
      <NavbarDrawer
        img="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwd2l0aCUyMGdsYXNzZXN8ZW58MHx8MHx8&w=1000&q=80"
        name="Rajdeep Sengupta"
        email="rajdipgupta019@gmail.com"
      />
    </nav>
  );
};

export default Navbar;
