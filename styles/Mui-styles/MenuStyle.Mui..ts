import { DefaultTheme, makeStyles, WithStylesOptions } from "@mui/styles";

export const MenuStyle = makeStyles<WithStylesOptions<DefaultTheme>>({
  //Materia UI Styles for Menu
  menu: {
    "& .MuiPaper-root": {
      color: "#0d0d0d",
      width: "150px",
    },
    "& .MuiMenuItem-root:hover": {
      background: "#1955CA",
      color: "white",
      marginRight: "auto",
      marginLeft: "auto",
      borderRadius: "4px",
    },
    "& .MuiMenuItem-root": {
      width: "90%",
      marginRight: "auto",
      marginLeft: "auto",
    },
  },
});

export const ModeMenuStyle = makeStyles<WithStylesOptions<DefaultTheme>>({
  //Materia UI Styles for Mode Select Menu
  menu: {
    "& .MuiPaper-root": {
      color: "#0d0d0d",
      width: "150px",
    },
    "& .MuiMenuItem-root:hover": {
      background: "rgba(71,85,105,.1)",
      marginRight: "auto",
      marginLeft: "auto",
      borderRadius: "4px",
    },
    "& .MuiMenuItem-root": {
      width: "90%",
      marginRight: "auto",
      marginLeft: "auto",
    }
  }
});
export const ModeMenuStyleDark = makeStyles<WithStylesOptions<DefaultTheme>>({
  //Materia UI Styles for Mode Select Menu
  menudark: {
    "& .MuiPaper-root": {
      color: "#0d0d0d",
      width: "150px",
      background: "rgb(18,18,18)",
    },
    "& .MuiMenuItem-root:hover": {
      background: "rgb(24,24,27)",
      marginRight: "auto",
      marginLeft: "auto",
      borderRadius: "4px",
    },
    "& .MuiMenuItem-root": {
      background:"rgb(18,18,18)",
      width: "90%",
      marginRight: "auto",
      marginLeft: "auto",
    }
  }
});