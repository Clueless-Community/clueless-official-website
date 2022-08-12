/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField, TextFieldProps,
} from "@mui/material";

import React, { useState } from "react";
import Navbar from "../components/shared/Navbar/Navbar";

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db, storage } from "../../lib/clientApp";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useAdminLogIn } from "../../context/AdminLogInContext";
import AdminLogIn from "../api/admin/logIn";
import AdminLogInScreen from "../components/Admin/AdminLogInScreen";
import { MdRemoveCircleOutline } from 'react-icons/md'

const AddEvent: React.FC = () => {

    const [eventname, seteventname] = useState<string>("");
    const [selectedFileBannerImage, setSelectedFileBannerImage] = useState<string>("");
    const [selectedFileIconImage, setSelectedFileIconImage] = useState<string>("");
    const [mediaBannerImage, setMediaBannerImage] = useState<File | undefined>();
    const [mediaIconImage, setMediaIconImage] = useState<File | undefined>();
    const [BannerDownloadURL, setBannerDownloadURL] = useState<string>("");
    const [IconDownloadURL, setIconDownloadURL] = useState<string>("");
    const [venuename, setvenuename] = useState<string>("");
    const [timeperiod, settimeperiod] = useState<string>("");
    const [inputListAgenda, setInputListAgenda] = useState([{ time: "", description: "", }])
    const [inputListSpeakers, setInputListSpeakers] = useState([{ name: "", image: "", linkedinUrl: "", gitHubURL: "", twitterURL: "" }])
    const [attraction, setattraction] = useState("")
    const [date, setDate] = React.useState<Date | null>(
        new Date(),
    );
    const [eventMode, seteventMode] = useState<string | undefined>("")



    const { isAdmin } = useAdminLogIn()


    const handleAddClickAgenda = () => {
        setInputListAgenda([...inputListAgenda, { time: "", description: "", }])
    }

    const handleAddClickSpeakers = () => {
        setInputListSpeakers([...inputListSpeakers, { name: "", image: "", linkedinUrl: "", gitHubURL: "", twitterURL: "" }])
    }
    const handleInputChangeAgenda = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        const { name, value } = e.target;
        const list: any = [...inputListAgenda];
        list[index][name] = value;
        setInputListAgenda(list)
    }
    const handleInputChangeSpeakers = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        const { name, value } = e.target;
        const list: any = [...inputListSpeakers];
        list[index][name] = value;
        setInputListSpeakers(list)
    }

    const handleRemoveAgenda = (e: { preventDefault: () => void; }, index: number) => {
        const list = [...inputListAgenda];
        list.splice(index, 1)
        setInputListAgenda(list)
    }

    const handleRemoveSpeakers = (e: { preventDefault: () => void; }, index: number) => {
        const list = [...inputListSpeakers];
        list.splice(index, 1)
        setInputListSpeakers(list)
    }


    const addImageToPostBanner = (e: any) => {
        const reader = new FileReader();
        if (e.target.files![0]) {
            reader.readAsDataURL(e.target.files![0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFileBannerImage(readerEvent?.target?.result as string);
        };

    };

    const addImageToPostIcon = (e: any) => {
        const reader = new FileReader();
        if (e.target.files![0]) {
            reader.readAsDataURL(e.target.files![0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFileIconImage(readerEvent?.target?.result as string);
        };
    };

    const handleBannerImageUpload = async () => {
        const date = new Date();
        const bannerImageRef = ref(storage, `event/${date.getTime()}_bannerImage.jpg`);

        const uploadTask = mediaBannerImage && uploadBytesResumable(bannerImageRef, mediaBannerImage);
        uploadTask && uploadTask.on('state_changed',
            (snapshot: { bytesTransferred: number; totalBytes: number; state: any; }) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error: { code: any; }) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        break;
                    case 'storage/canceled':
                        break;

                    case 'storage/unknown':
                        break;
                }
            },
            async () => {
                await getDownloadURL(uploadTask.snapshot.ref).then((downloadURLOnUpload) => {
                    setBannerDownloadURL(downloadURLOnUpload);
                });
            }
        );
    }

    const handleIconImageUpload = async () => {
        const date = new Date();
        const IconImageRef = ref(storage, `event/${date.getTime()}_IconImage.jpg`);
        const uploadTask = mediaIconImage && uploadBytesResumable(IconImageRef, mediaIconImage);
        uploadTask && uploadTask.on('state_changed',
            (snapshot: { bytesTransferred: number; totalBytes: number; state: any; }) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error: { code: any; }) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        break;
                    case 'storage/canceled':
                        break;

                    case 'storage/unknown':
                        break;
                }
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURLOnUpload) => {
                    console.log('File uploaded');
                    setIconDownloadURL(downloadURLOnUpload);
                });
            }
        );
    }

    const handleEventMode = (event: SelectChangeEvent) => {
        seteventMode(event.target.value as string);
    };

    const handleResetForm = () => {
        seteventname("")
        setSelectedFileBannerImage("")
        setSelectedFileIconImage("")
        setMediaBannerImage(undefined)
        setMediaIconImage(undefined)
        setBannerDownloadURL("")
        setIconDownloadURL("")
        setBannerDownloadURL("")
        setvenuename("")
        settimeperiod("")
        setInputListAgenda([{ time: "", description: "", }])
        setInputListSpeakers([{ name: "", image: "", linkedinUrl: "", gitHubURL: "", twitterURL: "" }])
        setDate(new Date)
        setattraction("")
    };

    // For adding Data in Firebase for Event 
    const addEvent = async () => {
        await handleBannerImageUpload();
        await handleIconImageUpload();
        const eventIdtemp = eventname.toLowerCase().replace(' ', '-');
        const dateId = (new Date).getTime()
        const eventId = `${eventIdtemp}-${dateId}`
        try {
            await setDoc(doc(db, 'events', eventId), {
                event_name: eventname,
                event_banner_image: selectedFileBannerImage,
                event_icon_image: selectedFileIconImage,
                venue_name: venuename,
                event_mode: eventMode,
                speakers_info: inputListSpeakers,
                date: date,
                time_period: timeperiod,
                agenda: inputListAgenda,
                present: true,
                attraction: attraction,
                event_id: eventId,
                created_time: serverTimestamp()
            })

            handleResetForm()
        } catch (e) {
           console.log(e)
        }
    }

    const validatePublish = () => {
        if (selectedFileBannerImage.length === 0 || date === null || selectedFileIconImage.length === 0 || mediaBannerImage! === undefined || mediaIconImage! === undefined || venuename.length === 0 || eventname.length === 0 || timeperiod.length === 0 || Object.values(inputListAgenda).every(value => "") || Object.values(inputListSpeakers).every(value => "")) return true
        else return false
    }




    return (
        <>{isAdmin ? (
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
                                        value={eventname}
                                        multiline
                                        fullWidth
                                        onChange={e => seteventname(e.target.value)}
                                    />
                                </div>
                                {/* Upload Banner Image Section */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Add Event Cover Image:
                                    </label>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">

                                            {selectedFileBannerImage ? (<img src={selectedFileBannerImage} alt="" className="w-60 mx-auto my-3" />) : (
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
                                                    htmlFor="file-uploadbanner"
                                                    className="relative cursor-pointer bg-white rounded-md font-medium text-skin-darkBlue hover:text-skin-darkBlue  focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-bg-skin-lightBlue"
                                                >
                                                    <span className="hover:underline transition-all">
                                                        Upload a photo
                                                    </span>
                                                </label>
                                                <input
                                                    id="file-uploadbanner"
                                                    name="file-uploadbanner"
                                                    type="file"
                                                    className="sr-only"
                                                    accept="image/*"
                                                    onChange={(e) => {
                                                        setMediaBannerImage(e?.target?.files![0] as File); addImageToPostBanner(e);
                                                    }}
                                                />

                                                {/* Showing the Uploaded File name */}

                                                <span className="ml-2">
                                                    {mediaBannerImage?.name!} {mediaBannerImage?.name && "No Photo Selected"}
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG up to 2MB</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Upload Icon Image Section */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Add Event Icon Image:
                                    </label>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                            {selectedFileIconImage ? (<img src={selectedFileIconImage} alt="" className="w-60 mx-auto my-3" />) : (
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
                                                    className="sr-only"
                                                    accept="image/*"
                                                    onChange={(e) => {
                                                        setMediaIconImage(e.target.files![0]); addImageToPostIcon(e);
                                                    }}
                                                />

                                                {/* Showing the Uploaded File name */}

                                                <span className="ml-2">
                                                    {mediaIconImage?.name} {!mediaIconImage?.name && "No Photo Selected"}
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
                                        value={venuename}
                                        multiline
                                        fullWidth
                                        onChange={e => setvenuename(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <FormControl fullWidth className='mt-6'>
                                        <InputLabel id="demo-simple-select-label">Event Mode</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={eventMode}
                                            label="Age"
                                            onChange={handleEventMode}
                                        >
                                            <MenuItem value="offline">Offline</MenuItem>
                                            <MenuItem value="online">Online</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Add Speakers:
                                    </label>
                                    <div className="space-y-4">
                                        {
                                            inputListSpeakers.map((item, i) => {
                                                return (
                                                    <div className="" key={i}>
                                                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2" key={i}>
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                                                                <div className="w-full col-span-1">

                                                                    <TextField
                                                                        id="outlined-textarea"
                                                                        name="name"
                                                                        label="Speaker name"
                                                                        placeholder="Speaker name"
                                                                        value={inputListSpeakers[i].name}
                                                                        multiline
                                                                        fullWidth
                                                                        onChange={e => handleInputChangeSpeakers(e, i)}
                                                                    />
                                                                </div>
                                                                <div className="w-full col-span-1">

                                                                    <TextField
                                                                        id="outlined-textarea"
                                                                        name="image"
                                                                        label="Image URL"
                                                                        placeholder="Image URL"
                                                                        value={inputListSpeakers[i].image}
                                                                        multiline
                                                                        fullWidth
                                                                        onChange={e => handleInputChangeSpeakers(e, i)}
                                                                    />
                                                                </div>
                                                                <div className="w-full col-span-1">
                                                                    <TextField
                                                                        id="outlined-textarea"
                                                                        name="linkedinUrl"
                                                                        label="Speaker LinkedIn Profile URL"
                                                                        placeholder="Speaker LinkedIn Profile URL"
                                                                        value={inputListSpeakers[i].linkedinUrl}
                                                                        multiline
                                                                        fullWidth
                                                                        onChange={e => handleInputChangeSpeakers(e, i)}
                                                                    />
                                                                </div>
                                                                <div className="w-full col-span-1">
                                                                    <TextField
                                                                        id="outlined-textarea"
                                                                        name="gitHubURL"
                                                                        label="Speaker GitHub Profile URL"
                                                                        placeholder="Speaker GitHub Profile URL"
                                                                        value={inputListSpeakers[i].gitHubURL}
                                                                        multiline
                                                                        fullWidth
                                                                        onChange={e => handleInputChangeSpeakers(e, i)}
                                                                    />
                                                                </div>
                                                                <div className="w-full col-span-1">
                                                                    <TextField
                                                                        id="outlined-textarea"
                                                                        name="twitterURL"
                                                                        label="Speaker Twitter Profile URL"
                                                                        placeholder="Speaker Twitter Profile URL"
                                                                        value={inputListSpeakers[i].twitterURL}
                                                                        multiline
                                                                        fullWidth
                                                                        onChange={e => handleInputChangeSpeakers(e, i)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span className="space-x-2 flex justify-end">

                                                            {inputListSpeakers.length - 1 == i &&
                                                                <button>
                                                                    <AddCircleOutlineIcon className="h-[27px] w-[27px]" onClick={handleAddClickSpeakers} />
                                                                </button>
                                                            }
                                                            {inputListSpeakers.length !== 1 &&
                                                                <button>

                                                                    <div className="w-full flex justify-end">
                                                                        {i !== 0 ? <button onClick={(e) => handleRemoveSpeakers(e, i)}>
                                                                            <HighlightOffIcon className="h-[27px] w-[27px]" />
                                                                        </button> : <button onClick={(e) => handleRemoveSpeakers(e, i)} disabled>
                                                                            <HighlightOffIcon className="text-[#979696] h-[27px] w-[27px]" />
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
                                </div>
                                <div>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DesktopDatePicker
                                            label="Date desktop"
                                            inputFormat="MM/dd/yyyy"
                                            value={date}
                                            onChange={(newValue: Date | null) => {
                                                setDate(newValue);
                                            }}
                                            renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => <TextField {...params}
                                                fullWidth
                                            />}
                                            className="mt-2"
                                        />
                                    </LocalizationProvider>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 mt-6">
                                        Add Time :
                                    </label>
                                    <TextField
                                        id="outlined-textarea"
                                        label="Time Slot"
                                        placeholder="Enter Time Slot"
                                        value={timeperiod}
                                        multiline
                                        fullWidth
                                        onChange={e => settimeperiod(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 mt-6">
                                        Perks
                                    </label>
                                    <TextField
                                        id="outlined-textarea"
                                        label="Perks"
                                        placeholder="Enter Perks"
                                        value={attraction}
                                        multiline
                                        fullWidth
                                        onChange={e => setattraction(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <h1 className="mt-6">Agenda</h1>
                                </div>
                                <div className="space-y-2">
                                    {
                                        inputListAgenda.map((item, i) => {
                                            return (
                                                <div className="" key={i}>
                                                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2" key={i}>
                                                        <div className="w-full">

                                                            <TextField
                                                                id="outlined-textarea"
                                                                name="time"
                                                                label="Agenda Time"
                                                                placeholder="Enter Agenda Time"
                                                                value={inputListAgenda[i].time}
                                                                multiline
                                                                fullWidth
                                                                onChange={e => handleInputChangeAgenda(e, i)}
                                                            />
                                                        </div>
                                                        <div className="w-full">
                                                            <TextField
                                                                id="outlined-textarea"
                                                                name="description"
                                                                label="Agenda Description"
                                                                value={inputListAgenda[i].description}
                                                                placeholder=" Enter Agenda Description"
                                                                multiline
                                                                fullWidth
                                                                onChange={e => handleInputChangeAgenda(e, i)}

                                                            />
                                                        </div>
                                                        <span className="space-x-2 flex justify-end">

                                                            {inputListAgenda.length - 1 == i &&
                                                                <button>
                                                                    <AddCircleOutlineIcon className="h-[27px] w-[27px]" onClick={handleAddClickAgenda} />

                                                                </button>
                                                            }
                                                            {inputListAgenda.length !== 1 &&
                                                                <button>

                                                                    <div className="w-full flex justify-end">
                                                                        {i !== 0 ? <button onClick={(e) => handleRemoveAgenda(e, i)}>
                                                                            <HighlightOffIcon className="h-[27px] w-[27px]" />
                                                                        </button> : <button onClick={(e) => handleRemoveAgenda(e, i)} disabled>
                                                                            <HighlightOffIcon className="text-[#979696] h-[27px] w-[27px]" />
                                                                        </button>}
                                                                    </div>
                                                                </button>
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }


                                </div>
                                <div>

                                    {validatePublish() ? <button className="py-3 px-2 font-bold  text-black  bg-gray-200 text-sm rounded-md mt-6 cursor-not-allowed" disabled>
                                        Publish
                                    </button> :
                                        <button className="py-3 px-2 font-bold  text-green-800  bg-green-200 text-sm rounded-md hover:bg-green-400 hover:shadow-xl mt-6" onClick={addEvent}>
                                            Publish
                                        </button>
                                    }

                                </div>
                            </div>
                            <div className="w-full col-span-1 hidden md:block">
                                {/* Image */}
                                <img src="/addEvent.png" className="ml-auto w-[341px]" alt="event-png" />
                            </div>

                        </div>

                    </div>
                </div>
            </>
        ) : (
            <>
                <Head>
                    <title>Admin Login 🔒</title>
                </Head>
                <AdminLogInScreen />
            </>
        )}
        </>
    );
};

export default AddEvent;
