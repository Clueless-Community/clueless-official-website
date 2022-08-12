/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

import {
    CircularProgress,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField, TextFieldProps,
} from "@mui/material";
// import {get} from 'lodash'
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/shared/Navbar/Navbar";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { addDoc, collection, doc, getDoc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../../../lib/clientApp";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useAdminLogIn } from "../../../../context/AdminLogInContext";
import AdminLogIn from "../../../api/admin/logIn";
import AdminLogInScreen from "../../../components/Admin/AdminLogInScreen";
import { useRouter } from "next/router";
import { MdOutlineFileDownloadDone, MdRemoveCircleOutline } from 'react-icons/md'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { BsFillExclamationTriangleFill } from 'react-icons/bs'
import { RemoveCircleOutline } from "@mui/icons-material";


interface agenda {
    time: string
    description: string,
}

interface instructorOrspeaker {
    name: string,
    image: string,
    linkedinUrl: string,
    gitHubURL: string,
    twitterURL: string,
}

interface dataProps {
    eventposter: string,
    heading: string,
    venue: string,
    Time: string,
    instructorOrspeaker: instructorOrspeaker[],
    attractions: string,
    agenda: Array<agenda>
    eventId: string,
    date: string,
}

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
    const [inputListWinners, setInputListWinners] = useState([{ name: "", imageURL: "" }])
    const [attraction, setattraction] = useState("")
    const [date, setDate] = React.useState<Date | null>(
        new Date(),
    );
    const [eventData, seteventData] = React.useState<any>([])
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleOpen2 = () => setOpen2(true);
    const handleOpen3 = () => setOpen3(true);
    const handleClose = () => setOpen(false);
    const handleClose2 = () => setOpen2(false);
    const handleClose3 = () => setOpen3(false);
    const [deleteIndex, setDeleteIndex] = useState<number>(0)
    const [deleteIndexAgenda, setDeleteIndexAgenda] = useState<number>(0);
    const [presentForm, setPresentForm] = useState<string>("Event Not done yet");
    const [present, setPresent] = useState<boolean>(true);

    // console.log(date);

    const { isAdmin } = useAdminLogIn()
    const router = useRouter()

    const getEventData = React.useCallback(async () => {
        const eventId = router.query.event_id;
        const eventRef = doc(db, 'events', `${eventId}`)
        const eventSnap = await getDoc(eventRef);
        if (eventSnap.exists()) {
            const data = eventSnap.data();
            seteventData(data);
        } else {
            router.push('/404');
        }

    }, [router])

    useEffect(() => {
        seteventname(eventData?.event_name ? eventData?.event_name : "")
        setInputListSpeakers(eventData?.speakers_info);
        setInputListAgenda(eventData?.agenda)
        setSelectedFileBannerImage(eventData?.event_banner_image)
        setSelectedFileIconImage(eventData?.event_icon_image)
        setvenuename(eventData?.venue_name)
        settimeperiod(eventData?.time_period)
        setattraction(eventData?.attraction)
        setPresent(eventData?.present)
        const ut = eventData?.date
        setDate(new Date(ut?.seconds * 1000))
        // console.log(ut?.seconds)
        setInputListWinners(eventData?.winners),
            setPresent(eventData?.present),
            present ? setPresentForm("Event Not done yet") : setPresentForm("Event Done")
    }, [eventData])

    // console.log(inputListSpeakers);

    React.useEffect(() => {
        if (!router.isReady) return;
        getEventData();
    }, [getEventData, router.isReady])

    // console.log(eventData)


    //Agenda functions
    const handleAddClickAgenda = () => {
        setInputListAgenda([...inputListAgenda, { time: "", description: "", }])
    }

    const handleInputChangeAgenda = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        const { name, value } = e.target;
        const list: any = [...inputListAgenda];
        list[index][name] = value;
        setInputListAgenda(list)
    }
    const handleRemoveAgenda = (e: { preventDefault: () => void; }, index: number) => {
        // console.log("function hit", index)
        const list = [...inputListAgenda];
        list.splice(index, 1)
        setInputListAgenda(list)
        // console.log(inputListAgenda)
        handleClose2()
    }

    //winner functions


    const handleClickAddWinners = () => {
        setInputListWinners([...inputListWinners, { name: "", imageURL: "" }])
    }

    const handleRemoveWinners = (e: { preventDefault: () => void; }, index: number) => {
        const list = [...inputListWinners];
        list.splice(index, 1)
        setInputListWinners(list)
    }

    const handleAddWinners = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        const { name, value } = e.target;
        const list: any = [...inputListWinners]
        list[index][name] = value;
        setInputListWinners(list)
        console.log(inputListWinners)
    }

    // const addWineers = ()=>{

    // }


    //speaker functions

    const handleAddClickSpeakers = () => {
        setInputListSpeakers([...inputListSpeakers, { name: "", image: "", linkedinUrl: "", gitHubURL: "", twitterURL: "" }])
    }

    const handleInputChangeSpeakers = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        const { name, value } = e.target;
        const list: any = [...inputListSpeakers];
        list[index][name] = value;
        setInputListSpeakers(list)
    }

    const handleRemoveSpeakers = (e: { preventDefault: () => void; }, index: number) => {
        const list = [...inputListSpeakers];
        list.splice(index, 1);
        // await updateDoc(eventRef, {
        //     speakers_info: list
        // })
        setInputListSpeakers(list)
        handleClose();
    }


    //Image Add Functions
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
                // console.log('Upload is ' + progress + '% done');
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
                    console.log('File uploaded');
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

    // const handleResetForm = () => {
    //     seteventname("")
    //     setSelectedFileBannerImage("")
    //     setSelectedFileIconImage("")
    //     setMediaBannerImage(undefined)
    //     setMediaIconImage(undefined)
    //     setBannerDownloadURL("")
    //     setIconDownloadURL("")
    //     setBannerDownloadURL("")
    //     setvenuename("")
    //     settimeperiod("")
    //     setInputListAgenda([{ time: "", description: "", }])
    //     setInputListSpeakers([{ name: "", image: "", linkedinUrl: "", gitHubURL: "", twitterURL: "" }])
    //     setDate(new Date)
    //     setattraction("")
    // };

    // For adding Data in Firebase for Event 
    const addEvent = async () => {
        await handleBannerImageUpload();
        console.log(BannerDownloadURL);
        await handleIconImageUpload();
        console.log(IconDownloadURL);
        const eventIdtemp = eventname.toLowerCase().replace(' ', '-');
        const dateId = (new Date).getTime()
        const eventId = router.query.event_id;
        const eventRef = doc(db, 'events', `${eventId}`)
        try {
            await updateDoc(eventRef, {
                event_name: eventname,
                event_banner_image: selectedFileBannerImage,
                event_icon_image: selectedFileIconImage,
                venue_name: venuename,
                speakers_info: inputListSpeakers,
                date: date,
                time_period: timeperiod,
                agenda: inputListAgenda,
                present: present,
                attraction: attraction,
                event_id: eventId,
                created_time: serverTimestamp(),
                winners: inputListWinners
            })
            console.log("Data Added");
        } catch (e) {
            console.log(e)
        }
    }

    const validatePublish = () => {
        if (eventname === "" || selectedFileBannerImage === "" || selectedFileIconImage === "" || venuename === "" || inputListSpeakers.length === 0 || !inputListSpeakers.every(item => item.name && item.image && item.linkedinUrl && item.twitterURL || item.gitHubURL) || !inputListAgenda.every(item => item.description && item.time) || !inputListWinners.every(item => item.name && item.imageURL) || date === null || timeperiod === "" || attraction === "") {
            return false
        } else {
            return true
        }
    }

    const handlePublish = () => {
        console.log("Function hit")
        addEvent();
        handleClose3()
        alert("Event Editted Successfully");
    }


    // console.log(present)

    return (
        <>{isAdmin ? (
            <>
                {eventData?.length !== 0 ? <div><Head>
                    <title>{eventData?.event_name} | Edit </title>
                </Head>
                    <Navbar />
                    <div className="mx-auto text-xl mt-11 mb-10 w-10/12">
                        <div className="space-y-4 ">
                            <div className="flex flex-col items-start font-semibold mt-6">
                                Edit Event
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
                                    <div className="">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Add Event Cover Image:
                                        </label>
                                        <div className="mt-1 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md relative w-full">
                                            <div className="space-y-1 text-center">

                                                {selectedFileBannerImage ? (<img src={selectedFileBannerImage} alt="" className="w-full h-full object-cover mx-auto my-3" />) : (
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
                                                <div className=" text-sm text-gray-600">
                                                    <label
                                                        htmlFor="file-uploadbanner"
                                                        className="relative cursor-pointer bg-white rounded-md font-medium text-skin-darkBlue hover:text-skin-darkBlue  focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-bg-skin-lightBlue"
                                                    >
                                                        <span className="hover:underline transition-all text-center w-full">
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
                                                <div className="text-sm text-gray-600">
                                                    <label
                                                        htmlFor="file-upload"
                                                        className="relative w-full text-center cursor-pointer bg-white rounded-md font-medium text-skin-darkBlue hover:text-skin-darkBlue  focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-bg-skin-lightBlue"
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


                                                </div>
                                                <p className="text-xs text-gray-500">PNG, JPG up to 2MB</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <TextField
                                            id="outlined-textarea"
                                            label="Venue name"
                                            value={venuename}
                                            multiline
                                            fullWidth
                                            onChange={e => setvenuename(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Speakers:
                                        </label>
                                        <div className="space-y-4">
                                            {
                                                inputListSpeakers?.map((item: instructorOrspeaker, i: number) => {
                                                    return (
                                                        <div className="" key={i}>
                                                            <button className="w-full flex items-center justify-end py-2"> <MdRemoveCircleOutline className="text-3xl" onClick={() => { setDeleteIndex(i); handleOpen() }} /> </button>
                                                            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2" key={i}>
                                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                                                                    <div className="w-full col-span-1">

                                                                        <TextField
                                                                            id="outlined-textarea"
                                                                            name="name"
                                                                            label="Speaker name"
                                                                            placeholder="Speaker name"
                                                                            value={item.name}
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
                                                                            value={item.image}
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
                                                                            value={item.linkedinUrl}
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
                                                                            value={item.gitHubURL}
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
                                                                            value={item.twitterURL}
                                                                            multiline
                                                                            fullWidth
                                                                            onChange={e => handleInputChangeSpeakers(e, i)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr className="my-8 border-[0.5px] border-opacity-30 border-zinc-500" />
                                                        </div>
                                                    )
                                                })
                                            }
                                            <span className="space-x-2 flex justify-end">


                                                <button className="w-full pb-4">

                                                    <div className="w-full flex justify-end">
                                                        <button onClick={() => handleAddClickSpeakers()} className="">
                                                            <AddCircleOutlineIcon className="text-3xl" />
                                                        </button>
                                                    </div>
                                                </button>

                                            </span>


                                        </div>
                                    </div>
                                    <div>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DesktopDatePicker
                                                label="Event Date"
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
                                            Edit Time :
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
                                            inputListAgenda?.map((item: agenda, i: number) => {
                                                return (
                                                    <div className="" key={i}>
                                                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2" key={i}>
                                                            <div className="w-full">

                                                                <TextField
                                                                    id="outlined-textarea"
                                                                    name="time"
                                                                    label="Agenda Time"
                                                                    placeholder="Enter Agenda Time"
                                                                    value={item?.time}
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
                                                                    value={item?.description}
                                                                    placeholder=" Enter Agenda Description"
                                                                    multiline
                                                                    fullWidth
                                                                    onChange={e => handleInputChangeAgenda(e, i)}

                                                                />
                                                            </div>
                                                            <span className="space-x-2 flex justify-end">
                                                                {
                                                                    inputListAgenda.length > 0 && <button onClick={(e) => { setDeleteIndexAgenda(i), handleOpen2() }}>
                                                                        <HighlightOffIcon className="h-[27px] w-[27px]" /></button>
                                                                }

                                                                {/* {inputListAgenda.length - 1 == i &&
                                                                <button>
                                                                    <AddCircleOutlineIcon className="h-[27px] w-[27px]" onClick={handleAddClickAgenda} />
                                                                </button>
                                                            } */}
                                                                {/* {inputListAgenda.length !== 1 &&
                                                                <button>

                                                                    <div className="w-full flex justify-end">
                                                                        {i !== 0 ? 
                                                                        </button> : <button onClick={(e) => handleRemoveAgenda(e, i)} disabled>
                                                                            <HighlightOffIcon className="text-[#979696] h-[27px] w-[27px]" />
                                                                        </button>}
                                                                    </div>
                                                                </button>
                                                            } */}
                                                            </span>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        <button className="w-full flex justify-end">
                                            <AddCircleOutlineIcon className="h-[27px] w-[27px]" onClick={handleAddClickAgenda} />
                                        </button>

                                        <FormControl fullWidth className='mt-6'>
                                            <InputLabel id="demo-simple-select-label">Event Type</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={presentForm}
                                                label="Event Type"
                                                onChange={(e) => { setPresentForm(e.target.value); presentForm === "Event Not done yet" ? setPresent(false) : setPresent(true) }}
                                            >
                                                <MenuItem value="Event Done">Event Done</MenuItem>
                                                <MenuItem value="Event Not done yet">Event Not done yet</MenuItem>
                                            </Select>
                                        </FormControl>

                                        {!present && <div><div>
                                            <h1 className="mt-6">Winners</h1>
                                        </div>
                                            {inputListWinners?.map((item, index) => {
                                                return (
                                                    <div key={index}>

                                                        <div className="col-span-1 mr-1 mt-2 flex gap-4  items-start">
                                                            <TextField
                                                                id="outlined-textarea"
                                                                name="name"
                                                                label={`Winner ${index + 1} Name`}
                                                                placeholder={`Enter Name of Winner ${index + 1}`}
                                                                value={item.name}
                                                                multiline
                                                                fullWidth
                                                                onChange={e => handleAddWinners(e, index)}
                                                            />
                                                            <TextField
                                                                id="outlined-textarea"
                                                                name="imageURL"
                                                                label={`Winner ${index + 1} Image`}
                                                                placeholder={`Enter imageURL of Winner ${index + 1}`}
                                                                value={item.imageURL}
                                                                multiline
                                                                fullWidth
                                                                onChange={e => handleAddWinners(e, index)}
                                                            />
                                                            <div>
                                                                {inputListWinners.length > 0 && <button onClick={(e) => handleRemoveWinners(e, index)}>
                                                                    <MdRemoveCircleOutline className="text-2xl" />
                                                                </button>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                            <button className="w-full flex justify-end">
                                                <AddCircleOutlineIcon onClick={handleClickAddWinners} />
                                            </button>
                                        </div>}

                                    </div>
                                    <div>
                                        {!validatePublish() ? <button className=" btn-blue bg-zinc-400 hover:bg-zinc-400 cursor-not-allowed" disabled>
                                            Publish
                                        </button> :
                                            <button className="bg-green-600 hover:bg-green-700 btn-blue  hover:shadow-xl" onClick={handleOpen3}>
                                                Publish
                                            </button>}



                                    </div>
                                </div>
                                <div className="w-full col-span-1 hidden md:block">
                                    {/* Image */}
                                    <img src="/addEvent.png" className="ml-auto w-[341px]" alt="event-png" />
                                </div>
                            </div>
                        </div>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <div className='p-6'>
                                <div id="alert-dialog-title">
                                    <img src='/icons/delete.svg' className='text-red-500 text-5xl mx-auto' />
                                </div>
                                <DialogContent className='p-10'>
                                    <div id="alert-dialog-description" className='w-full p-0'>
                                        <h1 className='text-xl font-nunito'>
                                            Do you want to Delete the Speaker?
                                        </h1>
                                    </div>
                                </DialogContent>
                                <div className="space-x-12 w-full flex justify-center">

                                    <button onClick={(e) => { handleRemoveSpeakers(e, deleteIndex); }} className="btn-blue" autoFocus>
                                        Yes
                                    </button>
                                    <button
                                        onClick={() => {
                                            handleClose();
                                        }} className="bg-zinc-200 btn-blue text-black hover:bg-zinc-200"
                                    >
                                        No
                                    </button>
                                </div>
                            </div>

                        </Dialog>
                        <Dialog
                            open={open2}
                            onClose={handleClose2}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <div className='p-6'>
                                <div id="alert-dialog-title">
                                    <img src='/icons/delete.svg' className='text-red-500 text-5xl mx-auto' />
                                </div>
                                <DialogContent className='p-10'>
                                    <div id="alert-dialog-description" className='w-full p-0'>
                                        <h1 className='text-xl font-nunito'>
                                            Do you want to Delete the Agenda?
                                        </h1>
                                    </div>
                                </DialogContent>
                                <div className="space-x-12 w-full flex justify-center">
                                    <button onClick={(e) => { handleRemoveAgenda(e, deleteIndexAgenda) }} className="btn-blue" autoFocus>
                                        Yes
                                    </button>
                                    <button
                                        onClick={() => {
                                            handleClose2();
                                        }} className="bg-zinc-200 btn-blue hover:bg-zinc-200 text-black"
                                    >
                                        No
                                    </button>
                                </div>
                            </div>

                        </Dialog>
                        <Dialog
                            open={open3}
                            onClose={handleClose3}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <div className='p-6'>
                                <div id="alert-dialog-title">
                                    <MdOutlineFileDownloadDone className='text-sky-500 text-5xl mx-auto' />
                                </div>
                                <DialogContent className='p-10'>
                                    <div id="alert-dialog-description" className='w-full p-0'>
                                        <h1 className='text-xl font-nunito'>
                                            Do you want to Publish the Event?
                                        </h1>
                                    </div>
                                </DialogContent>
                                <DialogActions className="space-x-7 w-full">
                                    <button
                                        onClick={() => {
                                            handleClose3();
                                        }} className="bg-zinc-200 hover:bg-zinc-200 text-black btn-blue"
                                    >
                                        Cancel
                                    </button>
                                    <button onClick={handlePublish} className="btn-blue" autoFocus>
                                        Yes
                                    </button>
                                </DialogActions>
                            </div>

                        </Dialog>
                        <button className="btn-blue fixed z-100 right-8 bottom-8 " onClick={() => router.push(`/events/${eventData?.event_id}`)}>View Event</button>
                    </div></div> : <> <Head>
                        <title>Loading ...</title>
                    </Head>
                    <CircularProgress /></>}

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
