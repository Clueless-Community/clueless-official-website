
import Head from "next/head";
import Link from "next/link";

import Footer from "../components/Footer";

import Navbar from "../components/Navbar/Navbar";

import { TextField } from "@mui/material";

import React from "react";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="ml-22 flex mt-7 mb-14 mx-10">
        <div className="mt-4">

          <div className="flex flex-col items-start space-y-4  text-xl ml-32">
            <div className="text-4xl font-semibold ">Contact Us</div>
            <div className="text-sm text-semibold text-slate-500">
              Have any questions?We'd love to hear from you
            </div >
            <div className="space-y-4 ">
            <TextField
              id="outlined-textarea"
              label="Your Email"
              placeholder="Enter Your Email"
              fullWidth
              multiline
            />
            <TextField
              id="outlined-textarea"
              label="Subject"
              placeholder="Enter Subject"
              multiline
              fullWidth
            />
            <TextField
              id="outlined-textarea"
              label="Write here"
              placeholder="How can we help you?"
              multiline
              rows={7}
              fullWidth
            />
            </div>
            <div className="text-sm mt-9">
            <button
              type="submit"
              className="btn-blue"
              
            >
              Submit
            </button>
            </div>
          </div>
          
        </div>
        <div className="flex justify-end flex-grow ">
          <img src="/man.png" alt="" className="object-scale-down scale-125 h-100 w-96 mr-32" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
