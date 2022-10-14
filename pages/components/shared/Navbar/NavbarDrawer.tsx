/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Avatar, Drawer, Button } from "@mui/material";
import {
  ClassNameMap,
  DefaultTheme,
  makeStyles,
  WithStylesOptions,
} from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Style = makeStyles<WithStylesOptions<DefaultTheme>>({
  //Materia UI Styles for Menu
  Drawer: {
    "& .MuiDrawer-paper": {
      // This is to only style the Drawer Paper Section
      borderRadius: "10px 0px 0px 10px",
      width: "80%",
    },
  },
});

type Props = {
  //Interface of the Prop Passed in this Compnent
  uid: string;
  img: string;
  name: string;
  email: string;
};

const NavbarDrawer: React.FC<Props> = ({ img, name, email, uid }) => {
  const classes: ClassNameMap<"Drawer"> = Style();
  const [drawer, SetDrawer] = useState<boolean>(false);
  const session = useSession();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <div className="lg:hidden relative">
        <Button
          onClick={(): void => {
            SetDrawer(true);
          }}
        >
          <MenuIcon className="sm:w-16 scale-150 cursor-pointer text-skin-main" />
        </Button>
        <Drawer
          anchor="right"
          open={drawer}
          onClose={(): void => {
            SetDrawer(false);
          }}
          className={classes.Drawer}
        >
          <div className=" flex flex-col my-10">
            <Link href="/" passHref>
              <div className="flex items-center cursor-pointer mx-auto">
                <img src="/ClueLess Logo.png" alt="" className="w-[65px]" />
                <h1 className=" font-raleway text-3xl ml-8">ClueLess</h1>
              </div>
            </Link>
            <Link href="/" passHref>
              <button
                onClick={handleClose}
                className="font-semibold text-xl mt-16"
              >
                Home
              </button>
            </Link>
            <div className="bg-gray-300 h-[1px] w-10/12 mx-auto mt-3"></div>
            {/* <a
              href="https://clueless-blogs.hashnode.dev/"
              target="_blank"
              className="text-center" rel="noreferrer"
            >
              <button
                onClick={handleClose}
                className="font-semibold text-xl mt-5"
              >
                Blogs
              </button>{" "}
            </a> */}
            {/* <div className="bg-gray-300 h-[1px] w-10/12 mx-auto mt-3"></div> */}
            <a href="https://clueless-resources.super.site/resources" target="_blank" className="text-center" rel="noreferrer">
              <button
                onClick={handleClose}
                className="font-semibold text-xl mt-5"
              >
                Resources
              </button>
            </a>
            <div className="bg-gray-300 h-[1px] w-10/12 mx-auto mt-3"></div>
            <Link href="/events" passHref>
              <button
                onClick={handleClose}
                className="font-semibold text-xl mt-5"
              >
                Events
              </button>
            </Link>
            {session.status === "unauthenticated" && (
              <>
                <div className="bg-gray-300 h-[1px] w-10/12 mx-auto mt-3"></div>
                <Link href="/auth/signin" passHref>
                  <button
                    onClick={handleClose}
                    className="font-semibold text-xl mt-5"
                  >
                    Login
                  </button>
                </Link></>
            )}
          </div>
          {session.status === "authenticated" && (
            <>
              <div className="bg-gray-300 h-[1px] w-10/12 mx-auto mt-3"></div>
              <button
                onClick={(): void => {
                  handleClose();
                  signOut();
                }}
                className="font-semibold text-xl mt-5"
              >
                Sign Out
              </button>
              {/* <div className="bg-gray-300 h-[1px] w-10/12 mx-auto mt-3"></div>
            <a href="https://discord.gg/zrVMjGW8sB" target="_blank" className="w-full mx-auto text-center" rel="noreferrer">
              <button className="font-semibold text-xl mt-5 mx-auto">
                Join Discord
              </button>
            </a> */}
              {/* <div className="absolute bottom-5 left-5 flex items-center justify-center">
            <Avatar
              className=" cursor-pointer ring-2 ring-white mx-auto "
              src={img}
              alt={name}
              sx={{ width: "60px", height: "60px" }}
            />
            <div>
              <p className="ml-5 text-lg font-semibold">{name}</p>
              <p className="ml-5 text-gray-300 text-sm">{email}</p>
            </div>
          </div> */}
              <Link href={'/profile/admin/[uid]'} as={`/profile/admin/${uid}`} passHref>
                <div className='absolute bottom-5 left-5 sm:left-10 flex items-center'>
                  <Avatar className=' cursor-pointer ring-2 ring-white' src={img} alt={name} sx={{ width: 40, height: 40 }} />
                  <div>
                    <p className='ml-5 text-lg font-semibold'>{name}</p>
                    <p className='ml-5 text-gray-700 text-xs'>{email}</p>
                  </div>
                </div>
              </Link>
            </>
          )}
        </Drawer>
      </div>
    </React.Fragment>
  );
};

export default NavbarDrawer;
