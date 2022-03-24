import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';





const ContactUs = () => {

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = React.useState(false);
  
  const handleSnack = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


    function handleSubmit() {
      fetch("https://formsubmit.co/ajax/official.cluelesscommunity@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email,
          subject,
          message
        })
      })
        .then(response => response.json())
        .then(data  => {console.log(data); handleSnack()})
        .catch(error => console.log(error));
    }

    const handleReset = () => {
      setEmail("");
      setSubject("");
      setMessage("");
    }

    const [email, setEmail] = useState<string | undefined>();
    const [subject, setSubject] = useState<string | undefined>();
    const [message, setMessage] = useState<string | undefined>();


    return (
      <div>
        <Head>
          <title>ClueLess | Contact Us</title>
        </Head>
        <Navbar />
        <div className="flex justify-between items-center my-20 flex-col lg:flex-row lg:px-28 w-11/12 mx-auto lg:w-full">
          <div className="">
            <div className="mt-4">

              <div className="flex flex-col items-start space-y-4 text-xl" >
                <div className="text-4xl font-semibold ">Contact Us</div>
                <div className="text-sm text-semibold text-slate-500">
                  Have any questions? We'd love to hear from you
                </div >
                <div className="space-y-4 ">
                  <TextField
                    id="outlined-textarea"
                    label="Your Email"
                    placeholder="Enter Your Email"
                    fullWidth
                    multiline
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => { setEmail(e.target.value) }}
                  />
                  <TextField
                    id="outlined-textarea"
                    label="Subject"
                    placeholder="Enter Subject"
                    multiline
                    fullWidth
                    type="text"
                    name="Subject"
                    required
                    value={subject}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => { setSubject(e.target.value) }}
                  />
                  <TextField
                    id="outlined-textarea"
                    label="Write here"
                    placeholder="How can we help you?"
                    multiline
                    rows={7}
                    fullWidth
                    type="text"
                    name="Feedback"
                    required
                    value={message}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => { setMessage(e.target.value) }}
                  />
                </div>
                <div className="text-sm mt-9">
                  <button
                    className="btn-blue"
                    onClick={(): void => { handleReset(); handleSubmit(); }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <img src="/OpenSourceProject.png" alt="" className="mt-20" />
          </div>
        </div>
        <Footer />
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Your message sent Successfully!
          </Alert>
        </Snackbar>
      </div >
    );
  };

  export default ContactUs;
