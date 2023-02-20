import { Button, Grid } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const LackingSkills = () => {
  return (
    <main style={{ backgroundColor: '#1b1b1b', color: 'white' }}>
      <Grid container spacing={4} padding={5}>
        <Grid item md={10}>
          <Stack className="md:w-2/5">
            <h1 className="text-5xl text-[#72cf7b] pb-1">Lacking skills?</h1>
            <h1 className="text-5xl pb-10 space-x-1 ">We got you covered.</h1>
            <h4 className="pb-10 text-md">
              built with the vision to encourage open-source enthusiasts built
              with the vision to encourage open-source enthusiasts
            </h4>
            <Button
              variant="contained"
              className="md:w-52 bg-[#72cf7b] hover:bg-[#72cf7b]"
            >
              Explore resource hub
            </Button>
          </Stack>
        </Grid>
        <Grid item md={2}>
          svg here
        </Grid>
      </Grid>
      <div className="h-[56vh] relative">
        <h1 className="text-4xl text-[#72cf7b] absolute bottom-[36rem] left-[63rem]">
          App Dev
        </h1>
        <svg
          width="326"
          height="240"
          viewBox="0 0 366 321"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-[20rem] left-[48rem]"
        >
          <path
            d="M6 240.268C10.9259 222.807 65.5993 189.732 182.161 300.206C224.526 340.358 307.24 301.734 296.613 209.541C283.804 98.4291 348.632 20.0531 361 5"
            stroke="#7EE787"
            stroke-width="10"
            stroke-linecap="round"
            stroke-dasharray="20 20"
          />
        </svg>
        <h1 className="text-4xl text-[#72cf7b] absolute bottom-[21rem] left-[47rem]">
          Web3
        </h1>
        <svg
          width="211"
          height="107"
          viewBox="0 0 271 133"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-[14.5rem] left-[36rem]"
        >
          <path
            d="M6 127C10.6697 112.143 1.17592 106.343 40.5 71.2171C79.8241 36.0909 120.749 56.1253 165 52.3553C254.5 44.7303 254.275 17.8085 266 5"
            stroke="#E5E5E5"
            stroke-width="10"
            stroke-linecap="round"
            stroke-dasharray="20 20"
          />
        </svg>
        <h1 className="text-4xl text-[#72cf7b] absolute bottom-[11.5rem] left-[32rem]">
          Web Dev
        </h1>
        <svg
          width="424"
          height="169"
          viewBox="0 0 484 189"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-[2rem] left-[8rem]"
        >
          <path
            d="M6 104.589C10.4353 87.1377 36.3536 101.863 67.7369 55.967C132.798 -39.1803 179.813 3.23676 273.368 147.014C355.88 273.818 429.61 33.8838 479 33.8838"
            stroke="#7EE787"
            stroke-width="10"
            stroke-linecap="round"
            stroke-dasharray="20 20"
          />
        </svg>
        <h1 className="text-4xl text-[#72cf7b] absolute bottom-10 left-10 ">
          DevOps
        </h1>
      </div>
    </main>
  );
};

export default LackingSkills;
