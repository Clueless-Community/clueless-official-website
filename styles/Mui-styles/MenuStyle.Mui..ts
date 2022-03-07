import { ClassNameMap, DefaultTheme, makeStyles, WithStylesOptions } from '@mui/styles';

export const MenuStyle = makeStyles<WithStylesOptions<DefaultTheme>>({ //Materia UI Styles for Menu
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
      }
    },
  })