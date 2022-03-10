import { NextPage } from "next";
import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(
  name: any,
  personName: string | any[],
  theme: { typography: { fontWeightRegular: any; fontWeightMedium: any } }
) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const editProfile: NextPage = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event: { target: { value: any } }) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div>
      <Navbar />
      <form action="" className="w-11/12">
        <div className="grid grid-col-1 md:grid-cols-4 lg:grid-cols-5 gap-0 md:gap-6 lg:gap-10 ml-[6vw]">
          <div className="col-span-2 md:col-span-5 lg:col-span-1 mt-10 m-auto lg:row-span-3">
          <h1 className="sm:hidden text-3xl font-semibold mb-12 text-center">Edit Profile</h1>
            <Avatar
              alt="D"
              src="/TeamMembers/Debajyoti Saha.jpg"
              className="w-[169px] h-[169px] mx-auto"
            />
            <p className="font-semibold text-center mt-3 text-xl">
              Debajyoti Saha
            </p>
          </div>
          <div className="col-span-2 mt-10">
            <h1 className="hidden sm:block text-3xl font-semibold mb-10">Edit Profile</h1>
            <h3 className="text-lg font-medium mb-5">Personal Details</h3>
            <div className="my-3">
              <div className="my-3">
                <TextField
                  id="outlined-basic"
                  label="Enter your College Name"
                  variant="outlined"
                  className="w-full"
                />
              </div>
              <div className="my-3">
                <TextField
                  id="outlined-basic"
                  label="Enter your Bio"
                  variant="outlined"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <div className="col-span-2 md:mt-[150px]">
            <div className="my-3">
              <TextField
                id="outlined-basic"
                label="Enter your Email"
                variant="outlined"
                className="w-full"
                disabled
              />
            </div>
            <div className="my-3">
              <FormControl sx={{}} className="w-full">
                <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Tech-Stack" />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="col-span-2 mt-10 md:mt-0">
            <h3 className="text-lg font-medium mb-5">Social Links</h3>
            <div className="my-3">
              <TextField
                id="outlined-basic"
                label="Enter your LinkedIn Profile Link"
                variant="outlined"
                className="w-full"
              />
            </div>
            <div className="my-3">
              <TextField
                id="outlined-basic"
                label="Enter your GitHUB Profile Link"
                variant="outlined"
                className="w-full"
              />
            </div>
            <div className="my-3">
              <TextField
                id="outlined-basic"
                label="Enter your Blog Link"
                variant="outlined"
                className="w-full"
              />
            </div>
          </div>
          <div className="col-span-2 md:mt-[35px]">
            <div className="my-3">
              <TextField
                id="outlined-basic"
                label="Enter your Twitter Profile Link"
                variant="outlined"
                className="w-full"
              />
            </div>
            <div className="my-3">
              <TextField
                id="outlined-basic"
                label="Enter your Portfolio Link"
                variant="outlined"
                className="w-full"
              />
            </div>
          </div>
          <div className="col-span-2 mt-8 md:mt-0 mb-10 space-x-4">
            <button className="btn-blue">Save</button>
            <button className="btn-red">Discard</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default editProfile;
