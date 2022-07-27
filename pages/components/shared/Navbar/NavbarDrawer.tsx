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
  img: string;
  name: string;
  email: string;
};

const NavbarDrawer: React.FC<Props> = ({ img, name, email }) => {
  const classes: ClassNameMap<"Drawer"> = Style();
  const [drawer, SetDrawer] = useState<boolean>(false);

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
          <MenuIcon className="w-16 scale-150 cursor-pointer text-skin-main" />
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
            <Link href="/">
              <div className="flex items-center cursor-pointer mx-auto">
                <img src="/ClueLess Logo.png" alt="" className="w-[65px]" />
                <h1 className=" font-raleway text-3xl ml-8">ClueLess</h1>
              </div>
            </Link>
            <Link href="/">
              <button
                onClick={handleClose}
                className="font-semibold text-xl mt-16"
              >
                Home
              </button>
            </Link>
            <div className="bg-gray-300 h-[1px] w-10/12 mx-auto mt-3"></div>
            <a
              href="https://clueless-blogs.hashnode.dev/"
              target="_blank"
              className="text-center"
            >
              <button
                onClick={handleClose}
                className="font-semibold text-xl mt-5"
              >
                Blogs
              </button>{" "}
            </a>
            <div className="bg-gray-300 h-[1px] w-10/12 mx-auto mt-3"></div>
            <a href="https://clueless-resources.super.site/resources" target="_blank" className="text-center">
              <button
                onClick={handleClose}
                className="font-semibold text-xl mt-5"
              >
                Resources
              </button>
              </a>
            <div className="bg-gray-300 h-[1px] w-10/12 mx-auto mt-3"></div>
            <Link href="/challenges-events">
              <button
                onClick={handleClose}
                className="font-semibold text-xl mt-5"
              >
              Events
              </button>
            </Link>
            <div className="bg-gray-300 h-[1px] w-10/12 mx-auto mt-3"></div>
            {/* <button
              onClick={(): void => {
                handleClose();
                signOut();
              }}
              className="font-semibold text-xl mt-5"
            >
              Sign Out
            </button> */}
            <a href="https://discord.gg/zrVMjGW8sB" target="_blank" className="w-full mx-auto text-center">
            <button className="font-semibold text-xl mt-5 mx-auto">
              Join Discord
            </button>
            </a>
          </div>
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
        </Drawer>
      </div>
    </React.Fragment>
  );
};

export default NavbarDrawer;
