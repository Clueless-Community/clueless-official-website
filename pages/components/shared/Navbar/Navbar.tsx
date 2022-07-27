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

  console.log(session);


  return (
    <nav className="flex justify-between sm:px-36 px-5 py-5 items-center shadow-xl">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <img src="/ClueLess Logo.png" alt="" className="sm:w-[65px] w-[35px]" />
          <h1 className=" font-raleway sm:text-3xl text-xl sm:ml-8 ml-2">ClueLess</h1>
        </div>
      </Link>
      <div className="hidden lg:block">
        <Link href="/">
          <button className="hover:font-semibold hover:underline cursor-pointer xl:mx-8 mx-3 text-xl transition-all">
            Home
          </button>
        </Link>

        <button className="hover:font-semibold hover:underline cursor-pointer xl:mx-8 mx-3 text-xl transition-all">
          <a href="https://clueless-blogs.hashnode.dev" target="_blank">
            Blogs
          </a>
        </button>

        <a href="https://clueless-resources.super.site/resources" target="_blank">
          <button className="hover:font-semibold hover:underline cursor-pointer xl:mx-8 mx-3 text-xl transition-all">
            Resources
          </button>
        </a>
        <Link href="/challenges-events">
          <button className="hover:font-semibold hover:underline cursor-pointer xl:mx-8 mx-3 text-xl transition-all">
            Events
          </button>
        </Link>
      </div>
      {session.status === "authenticated" && (
        <>
          <NavbarAvatarDropDown
            img={image as string}
            name={name as string}
            email={email as string}
          />
        </>
      )}{
        session.status === "unauthenticated" && (
          <Link href="/auth/signin">
            <div className="scale-75 sm:scale-100">
              <SvgButton>Log In</SvgButton>
            </div>
          </Link>
        )
      }
      <NavbarDrawer
        img={image as string}
        name={name as string}
        email={email as string}
      />
    </nav>
  );
};

export default Navbar;
