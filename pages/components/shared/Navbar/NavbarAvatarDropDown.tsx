import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, IconButton } from "@mui/material";
import { ClassNameMap } from '@mui/styles';
import { MenuStyle } from '../../../../styles/Mui-styles/MenuStyle.Mui.';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

type Props = {
  //Interface of the Prop Passed in this Compnent
  img: string;
  name: string;
  email: string;
  uid: string
};


const NavbarAvatarDropDown: React.FC<Props> = ({ img, name, email, uid }) => {

  const classes: ClassNameMap<"menu"> = MenuStyle(); //Using the Mneu style in Class constant 

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={(event): void => { handleClick(event) }}
      >
        <Avatar
          src={img}
          alt={name}
          sx={{ width: "52px", height: "52px" }}
          className=" cursor-pointer border-2 border-[#7EE787] hidden lg:flex"
        />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        className={classes.menu}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Link href={'/profile/admin/[uid]'} as={`/profile/admin/${uid}`} passHref>
          <MenuItem onClick={handleClose} className=" font-nunito">Profile</MenuItem>
        </Link>
        {/* <MenuItem onClick={handleClose} className=" font-nunito">Your Projects</MenuItem> */}
        <MenuItem onClick={(): void => { handleClose(); signOut(); }} className=" font-nunito">Sign Out</MenuItem>
      </Menu>
    </div>
  )
}

export default NavbarAvatarDropDown