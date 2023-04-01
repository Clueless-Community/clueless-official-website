/* eslint-disable @next/next/no-img-element */
// 👇️ ts-nocheck disables type checking for entire file
// @ts-nocheck

import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import Navbar from '../components/shared/Navbar/Navbar';
import { useAdminLogIn } from '../../context/AdminLogInContext';
import Head from 'next/head';
import AdminLogInScreen from '../components/Admin/AdminLogInScreen';

const EditEvents = () => {
  const [selectedFileBannerImage, setSelectedFileBannerImage] = useState('');
  const [selectedFileIconImage, setSelectedFileIconImage] = useState('');
  const [mediaBannerImage, setMediaBannerImage] = useState('');
  const [mediaIconImage, setMediaIconImage] = useState('');
  const [venuename, setvenuename] = useState('');
  const [speakername, setspeakername] = useState('');
  const [eventname, seteventname] = useState('');
  const [timeperiod, settimeperiod] = useState('');
  const [inputListAgenda, setInputListAgenda] = useState([
    { time: '', description: '' },
  ]);
  const [inputListSpeakers, setInputListSpeakers] = useState([
    { profileURL: '' },
  ]);
  const [winner1, setwinner1] = React.useState('');
  const [winner2, setwinner2] = React.useState('');
  const [winner3, setwinner3] = React.useState('');

  const { isAdmin } = useAdminLogIn();

  const handleAddClickAgenda = () => {
    setInputListAgenda([...inputListAgenda, { time: '', description: '' }]);
  };

  const handleAddClickSpeakers = () => {
    setInputListSpeakers([...inputListSpeakers, { profileURL: '' }]);
  };
  const handleInputChangeAgenda = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const list = [...inputListAgenda];
    list[index][name] = value;
    setInputListAgenda(list);
  };
  const handleInputChangeSpeakers = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const list = [...inputListSpeakers];
    list[index][name] = value;
    setInputListSpeakers(list);
  };

  const handleRemoveAgenda = (
    e: { preventDefault: () => void },
    index: number
  ) => {
    // e.preventDefault();
    const list = [...inputListAgenda];
    list.splice(index, 1);
    setInputListAgenda(list);
    console.log('Removed');
  };

  const handleRemoveSpeakers = (
    e: { preventDefault: () => void },
    index: number
  ) => {
    // e.preventDefault();
    const list = [...inputListSpeakers];
    list.splice(index, 1);
    setInputListSpeakers(list);
  };

  const addImageToPostBanner = (e: { target: { files: Blob[] } }) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFileBannerImage(readerEvent.target.result);
    };
    console.log('Baneer');
  };

  const addImageToPostIcon = (e: { target: { files: Blob[] } }) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFileIconImage(readerEvent.target.result);
    };
    console.log('Icon');
  };

  const [eventType, seteventType] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    seteventType(event.target.value as string);
  };

  return (
    <>
      {isAdmin ? (
        <>
          <Head>
            <title>Edit Event</title>
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
                      multiline
                      value={eventname}
                      fullWidth
                      required
                      onChange={(e) => seteventname(e.target.value)}
                    />
                  </div>
                  {/* Upload Banner Image Section */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Add Event Cover Image:
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        {selectedFileBannerImage ? (
                          <img
                            src={selectedFileBannerImage}
                            alt=""
                            className="w-60 mx-auto my-3"
                          />
                        ) : (
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
                            value={mediaBannerImage}
                            className="sr-only"
                            accept="image/*"
                            onChange={(e) => {
                              setMediaBannerImage(e.target.files[0]);
                              addImageToPostBanner(e);
                            }}
                          />

                          {/* Showing the Uploaded File name */}

                          <span className="ml-2">
                            {mediaBannerImage.name}{' '}
                            {!mediaBannerImage.name && 'No Photo Selected'}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG up to 2MB
                        </p>
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
                        {selectedFileIconImage ? (
                          <img
                            src={selectedFileIconImage}
                            alt=""
                            className="w-60 mx-auto my-3"
                          />
                        ) : (
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
                            value={mediaIconImage}
                            className="sr-only"
                            accept="image/*"
                            onChange={(e) => {
                              setMediaIconImage(e.target.files[0]);
                              addImageToPostIcon(e);
                            }}
                          />

                          {/* Showing the Uploaded File name */}

                          <span className="ml-2">
                            {mediaIconImage.name}{' '}
                            {!mediaIconImage.name && 'No Photo Selected'}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG up to 2MB
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <TextField
                      id="outlined-textarea"
                      label="Venue name"
                      placeholder="Enter Venue name"
                      multiline
                      value={venuename}
                      fullWidth
                      onChange={(e) => setvenuename(e.target.value)}
                    />
                  </div>
                  <div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Edit Speakers:
                      </label>
                      <div className="space-y-2">
                        {inputListSpeakers.map((item, i) => {
                          return (
                            <div className="" key={i}>
                              <div
                                className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2"
                                key={i}
                              >
                                <div className="w-full">
                                  <TextField
                                    id="outlined-textarea"
                                    name="Profile URL"
                                    label="Speaker Profile URL"
                                    placeholder="Speaker Profile URL"
                                    value={inputListSpeakers[i].profileURL}
                                    multiline
                                    fullWidth
                                    onChange={(e) =>
                                      handleInputChangeSpeakers(e, i)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div>
                    <TextField
                      id="outlined-textarea"
                      label="Time Period"
                      placeholder="Enter Time Period"
                      multiline
                      fullWidth
                      onChange={(e) => settimeperiod(e.target.value)}
                    />
                  </div>
                  <div>
                    <h1 className="mt-6">Agenda</h1>
                  </div>
                  <div>
                    {inputListAgenda.map((item, i) => {
                      return (
                        <div
                          className="grid grid-cols-1 md:grid-cols-2 space-y-2"
                          key={i}
                        >
                          <div className="col-span-1 mr-1 mt-2">
                            <TextField
                              id="outlined-textarea"
                              name="time"
                              label="Agenda Time"
                              placeholder="Enter Agenda Time"
                              value={inputListAgenda[i].time}
                              multiline
                              fullWidth
                              onChange={(e) => handleInputChangeAgenda(e, i)}
                            />
                          </div>
                          <div className="col-span-1 ml-1">
                            <TextField
                              id="outlined-textarea"
                              name="description"
                              label="Agenda Description"
                              placeholder=" Enter Agenda Description"
                              value={inputListAgenda[i].description}
                              multiline
                              fullWidth
                              onChange={(e) => handleInputChangeAgenda(e, i)}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    <FormControl fullWidth className="mt-6">
                      <InputLabel id="demo-simple-select-label">
                        Event Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={eventType}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Event Done</MenuItem>
                        <MenuItem value={20}>Event not done yet</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div>
                    <h1 className="mt-6">Winners</h1>
                  </div>
                  <div className="col-span-1 mr-1 mt-2">
                    <TextField
                      id="outlined-textarea"
                      name="time"
                      label="Winner 1"
                      placeholder="Enter profileURL of Winner 1"
                      value={winner1}
                      multiline
                      fullWidth
                      onChange={(e) => setwinner1(e.target.value)}
                    />
                  </div>
                  <div className="col-span-1 mr-1 mt-2">
                    <TextField
                      id="outlined-textarea"
                      name="time"
                      label="Winner 2"
                      value={winner2}
                      placeholder="Enter profileURL of Winner 2"
                      multiline
                      fullWidth
                      onChange={(e) => setwinner2(e.target.value)}
                    />
                  </div>
                  <div className="col-span-1 mr-1 mt-2">
                    <TextField
                      id="outlined-textarea"
                      name="time"
                      label="Winner 3"
                      value={winner3}
                      placeholder="Enter profileURL of Winner 3"
                      multiline
                      fullWidth
                      onChange={(e) => setwinner3(e.target.value)}
                    />
                  </div>
                  <div>
                    <button className="py-3 px-2 font-bold  text-green-800  bg-green-200 text-sm rounded-md hover:bg-green-400 hover:shadow-xl mt-6">
                      Publish
                    </button>
                  </div>
                </div>
                <div className="w-full col-span-1 hidden md:block h-full">
                  {/* Image */}
                  <img
                    src="/edit-events.png"
                    className="ml-auto w-[341px]"
                    alt="event-edit"
                  />
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

export default EditEvents;
