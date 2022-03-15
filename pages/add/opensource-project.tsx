import { TextField } from "@mui/material";
import { NextPage } from "next";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Form/Sidebar";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Head from "next/head";

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

const addOpenSourceProject: NextPage = () => {
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
      <Head>
        <title>ClueLess | Add Opensource Project</title>
      </Head>
      <Navbar />
      <Sidebar
        img={"/OpenSourceProject.png"}
        title={"Open-source is ❤️"}
      />
      <form
        action=""
        className="ml-[0px] lg:ml-[400px] lg:w-[calc(100%-400px)] px-10"
      >
        <div className="grid grid-cols-2 gap-0 md:gap-6 lg:gap-10">
          <div className="col-span-2 xl:col-span-1 mt-10">
            <h1 className="xl:hidden text-3xl font-semibold mb-10 mt-5 md:mb-10 text-center sm:text-left">✨ Add OpenSource Projects ✨</h1>
            <div className="my-3">
              <TextField
                id="outlined-basic"
                label="Enter your Project Name"
                variant="outlined"
                className="w-full"
              />
            </div>
            <div className="my-3">
              <TextField
                id="outlined-basic"
                label="Enter short description"
                variant="outlined"
                className="w-full"
                multiline={true}
              />
            </div>
            <div className="my-3">
              <FormControl sx={{}} className="w-full">
                <InputLabel id="demo-multiple-chip-label">
                  Tech-stack
                </InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={
                    <OutlinedInput
                      id="select-multiple-chip"
                      label="Tech-stack"
                    />
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
            <div className="my-3">
              <TextField
                id="outlined-basic"
                label="Enter Admin Emails"
                variant="outlined"
                className="w-full"
              />
            </div>
            <div className="my-3">
              <TextField
                id="outlined-basic"
                label="Enter your GitHub Repo URL"
                variant="outlined"
                className="w-full"
              />
            </div>
            <div className="my-3">
              <TextField
                id="outlined-basic"
                label="Enter your Deployed website URL"
                variant="outlined"
                className="w-full"
              />
            </div>
          </div>
          <div className="col-span-1 mt-10  items-center justify-center hidden xl:flex">
            <h1 className="text-3xl font-semibold text-center">✨ Add OpenSource Projects ✨</h1>
          </div>
        </div>
        {/* Image Uploading Element */}
        <div className="mt-3">
          <label className="block text-sm font-medium text-gray-700">
            Add Product Image
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-skin-darkBlue hover:text-skin-darkBlue  focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-bg-skin-lightBlue"
                >
                  <span className="hover:underline transition-all">
                    Upload a photo
                  </span>
                </label>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only "
                  accept="image/*"
                //   onChange={(e) => {setMedia(e.target.files[0]); addImageToPost(e);}}
                />

                {/* Showing the Uploaded File name */}

                {/* <span className="ml-2">
                          {media.name} {!media.name && "No Photo Selected"}
                        </span> */}
              </div>
              <p className="text-xs text-gray-500">PNG, JPG up to 2MB</p>
            </div>
          </div>
        </div>
        <div className="my-10 space-x-4">
          <button className="btn-blue">Save</button>
          <button className="btn-red">Discard</button>
        </div>
      </form>
    </div>
  );
};

export default addOpenSourceProject;
