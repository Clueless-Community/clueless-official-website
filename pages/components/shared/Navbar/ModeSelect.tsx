import { IconButton, Menu, MenuItem } from "@mui/material";
import { ClassNameMap } from "@mui/styles";
import React from "react";
import { ModeMenuStyle } from "../../../../styles/Mui-styles/MenuStyle.Mui.";
import { useTheme } from "next-themes";
import Document from "../../../_document";

const renderSelectedIcon = (theme?: string) => {
  return theme === "dark" ? (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
        className="fill-sky-400/20"
      ></path>
      <path
        d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
        className="fill-sky-500"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
        className="fill-sky-500"
      ></path>
    </svg>
  ) : (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 mr-2"
    >
      <path
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        className="
          stroke-sky-500
        dark:stroke-slate-500"
      ></path>
      <path
        d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
        className="stroke-sky-500 dark:stroke-slate-500"
      ></path>
    </svg>
  );
};

const ModeSelect = () => {
  const classes: ClassNameMap<"menu"> = ModeMenuStyle(); //Using the Mneu style in Class constant
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-row items-center justify-center">
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(event): void => {
          handleClick(event);
        }}
      >
        {renderSelectedIcon(theme)}
      </IconButton>
      <div className="asd">
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          className={`${classes.menu} `}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <MenuItem
            onClick={(): void => {
              setTheme("light");
              document.getElementById('logo_dark').setAttribute( 'src', '/Open-source Home.png' );
              handleClose();
            }}
            className="font-nunito"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 mr-2"
            >
              <path
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                className={`${theme === "light" ? "stroke-sky-500" : "stroke-slate-400"} dark:stroke-slate-500`}
              ></path>
              <path
                d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                className={`${theme === "light" ? "stroke-sky-500" : "stroke-slate-400"} dark:stroke-slate-500`}
              ></path>
            </svg>
            <span className={`${theme === "light" ? "text-sky-600" : ""}`}>Light</span>
          </MenuItem>
          <MenuItem
            onClick={(): void => {
              setTheme("dark");
              document.getElementById('logo_dark').setAttribute( 'src', '/logo-dark.png' );
              handleClose();
              
            }}
            className="font-nunito"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 mr-2">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                className="fill-transparent"
              ></path>
              <path
                d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                className="fill-slate-400 dark:stroke-sky-500"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                className="fill-slate-400 dark:stroke-sky-500"
              ></path>
            </svg>
            <span className="dark:text-sky-600">Dark</span>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default ModeSelect;
