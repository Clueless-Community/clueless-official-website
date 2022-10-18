/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import NavbarAvatarDropDown from "./NavbarAvatarDropDown";
import NavbarDrawer from "./NavbarDrawer";
import { NextComponentType } from "next";
import { useSession } from "next-auth/react";
import { SvgButton } from "../../../../styles/Mui-styles/HoverFillButton";

const Navbar: NextComponentType = () => {

  const session = useSession();
  const name = session.data?.user.name;
  const email = session.data?.user.email;
  const image = session.data?.user.image;
  const uid = session.data?.user.id;

  return (
    <nav className="flex justify-between sm:px-14 lg:px-36 px-5 py-5 items-center shadow-xl">
      <Link href="/" passHref>
        <div className="flex items-center cursor-pointer">
          <img src="/ClueLess Logo.png" alt="" className="sm:w-[65px] w-[35px]" />
          <h1 className=" font-raleway sm:text-3xl text-xl sm:ml-8 ml-2">ClueLess</h1>
        </div>
      </Link>
      <div className="hidden lg:block">
        <Link href="/" passHref>
          <button className="hover:-translate-y-1 hover:ease-in-out hover:scale-105 hover:duration-150 xl:mx-8 mx-3 text-xl transition-all">
            Home
          </button>
        </Link>

        <a href="https://clueless-resources.super.site/resources" target="_blank" rel="noreferrer">
          <button className="hover:-translate-y-1 hover:ease-in-out hover:scale-105 hover:duration-150 xl:mx-8 mx-3 text-xl transition-all">
            Resources
          </button>
        </a>
        <Link href="/events" passHref>
          <button className="hover:-translate-y-1 hover:ease-in-out hover:scale-105 hover:duration-150 xl:mx-8 mx-3 text-xl transition-all">
            Events
          </button>
        </Link>
      </div>
      {session.status === "authenticated" && (
        <div className="hidden md:block">
          <NavbarAvatarDropDown
            img={image as string}
            name={name as string}
            email={email as string}
            uid={uid as string}
          />
        </div>
      )}
      {session.status === "unauthenticated" && (
        <Link href="/auth/signin" passHref>
          <div className="scale-75 sm:scale-100 hidden lg:block">
            <SvgButton>Log In</SvgButton>
          </div>
        </Link>
      )
      }
      <div className=" flex items-center lg:hidden">
      {session.status === "unauthenticated" && (
        <Link href="/auth/signin" passHref>
          <div className="btn-blue text-xs sm:text-lg ">
            <button>Log In</button>
          </div>
        </Link>
      )
      }
        <NavbarDrawer
          uid={uid as string}
          img={image as string}
          name={name as string}
          email={email as string}
        />
        </div>
    </nav>
  );
};

export default Navbar;
