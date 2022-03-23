import { TextField } from "@mui/material";
import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { Avatar } from "@mui/material";
import { useSession } from "next-auth/react";


const addProject: NextPage = () => {

    const { data: session } = useSession<boolean>()

    return (
        <div>
            <Head>
                <title>ClueLess | Sign Up</title>
            </Head>

            <div
                className="ml-[0px] lg:ml-[400px] lg:w-[calc(100%-400px)] px-10 pt-28"
            >
                <Avatar src={session?.user?.image} alt={session?.user?.name} sx={{ height: 150, width: 150 }} />
                <div className="pr-28 mt-10">
                    <TextField
                        id="outlined-basic"
                        label="Enter your Name"
                        variant="outlined"
                        className="w-full"

                    />
                </div>
                <div className="pr-28 mt-5">
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        className="w-full"
                        aria-labelledby="Email"
                        value={session?.user?.email}
                        disabled

                    />
                </div>
                <div className="absolute bottom-10 w-8/12 right-32">
                </div>
            </div>
        </div>
    );
};

export default addProject;
