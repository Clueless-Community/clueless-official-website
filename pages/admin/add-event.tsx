// 👇️ ts-nocheck disables type checking for entire file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import Head from "next/head";

import {
    TextField,
} from "@mui/material";

import React, { useState } from "react";
import Navbar from "../components/shared/Navbar/Navbar";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/clientApp";

const addEvent = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [media, setMedia] = useState("");
    const [venuename, setvenuename] = useState("");
    const [speakername, setspeakername] = useState("");
    const [eventname, seteventname] = useState("");
    const [timeperiod, settimeperiod] = useState("");
    const [inputList, setInputList] = useState([{ time: "", description: "", }])
    // console.log(inputList);

    const handleAddClick = () => {
        setInputList([...inputList, { time: "", description: "", }])
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list)
    }

    const handleRemove = (e: { preventDefault: () => void; }, index: number) => {
        // e.preventDefault();
        const list = [...inputList];
        list.splice(index, 1)
        setInputList(list)
        console.log("Removed");
    }


    const addImageToPost = (e: { target: { files: Blob[]; }; }) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        };
    };

    // const onSubmit = (e: { preventDefault: () => void; }) => {
    //     e.preventDefault();
    // };

    const addEvent = async () => {
        
        try{
            await addDoc(collection(db, 'events'), {
                name : venuename
            })     
            console.log("Hello");
        }catch(e){
            console.log(e)
        }
    }


    return (
        <>
            <Head>
                <title>Add Event</title>
            </Head>
            <Navbar />
            <div className="mx-auto text-xl mt-11 mb-10 w-10/12">
                <div className="space-y-4 ">
                    <div className="flex flex-col items-start font-semibold mt-6">
                        Add a New Event
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="space-y-2 col-span-1 md:col-span-2">
                            <div>
                                <TextField
                                    id="outlined-textarea"
                                    label="Event Name"
                                    placeholder="Enter Event Name"
                                    multiline
                                    fullWidth
                                    required
                                    onChange={e => seteventname(e.target.value)}
                                />
                            </div>
                            {/* Upload Image Section */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Add Event Cover Image:
                                </label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">

                                        {selectedFile ? (<img src={selectedFile} alt="" className="w-60 mx-auto my-3" />) : (
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
                                        )}
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
                                                onChange={(e) => {
                                                    setMedia(e.target.files[0]); addImageToPost(e);
                                                }}
                                            />

                                            {/* Showing the Uploaded File name */}

                                            <span className="ml-2">
                                                {media.name} {!media.name && "No Photo Selected"}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG up to 2MB</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <TextField
                                    id="outlined-textarea"
                                    label="Venue name"
                                    placeholder="Enter Venue name"
                                    multiline
                                    fullWidth
                                    onChange={e => setvenuename(e.target.value)}
                                />
                            </div>
                            <div>
                                <TextField
                                    id="outlined-textarea"
                                    label="Speaker name"
                                    placeholder="Speaker name"
                                    multiline
                                    fullWidth
                                    onChange={e => setspeakername(e.target.value)}

                                />
                            </div>
                            <div>
                                <TextField
                                    id="outlined-textarea"
                                    label="Time Period"
                                    placeholder="Enter Time Period"
                                    multiline
                                    fullWidth
                                    onChange={e => settimeperiod(e.target.value)}
                                />
                            </div>
                            <div>
                                <h1 className="mt-6">Agenda</h1>
                            </div>
                            <div>
                                {
                                    inputList.map((item, i) => {
                                        return (
                                            <div className="">
                                                <div className="grid grid-cols-1 md:grid-cols-2 space-y-2 gap-5" key={i}>
                                                    <div className="col-span-1 mt-2">

                                                        <TextField
                                                            id="outlined-textarea"
                                                            name="time"
                                                            label="Agenda Time"
                                                            placeholder="Enter Agenda Time"
                                                            multiline
                                                            fullWidth
                                                            onChange={e => handleInputChange(e, i)}
                                                        />
                                                    </div>
                                                    <div className="col-span-1">
                                                        <TextField
                                                            id="outlined-textarea"
                                                            name="description"
                                                            label="Agenda Description"
                                                            placeholder=" Enter Agenda Description"
                                                            multiline
                                                            fullWidth
                                                            onChange={e => handleInputChange(e, i)}

                                                        />
                                                    </div>
                                                </div>
                                                <span className="space-x-2">

                                                    {inputList.length - 1 == i &&
                                                        <button>
                                                            <AddCircleOutlineIcon className="" onClick={handleAddClick} />

                                                        </button>
                                                    }
                                                    {inputList.length !== 1 &&
                                                        <button>

                                                            <div className="w-full flex justify-end mt-2">
                                                                {i !== 0 ? <button onClick={(e) => handleRemove(e, i)}>
                                                                    <HighlightOffIcon />
                                                                </button> : <button onClick={(e) => handleRemove(e, i)} disabled>
                                                                    <HighlightOffIcon className="text-gray" />
                                                                </button>}
                                                            </div>
                                                        </button>
                                                    }
                                                </span>
                                            </div>
                                        )
                                    })
                                }


                            </div>
                            <div>

                                <button className="py-3 px-2 font-bold  text-green-800  bg-green-200 text-sm rounded-md hover:bg-green-400 hover:shadow-xl mt-6" onClick={addEvent}>
                                    Publish
                                </button>
                            </div>
                        </div>
                        <div className="w-full col-span-1 hidden md:block">
                            {/* Image */}
                            <img src="/addEvent.png" className="ml-auto w-[341px]" />
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default addEvent;
