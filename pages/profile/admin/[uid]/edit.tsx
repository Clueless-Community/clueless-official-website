import { Avatar, Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextareaAutosize, TextField } from '@mui/material'
import { doc, getDoc } from 'firebase/firestore'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { Dispatch, SetStateAction } from 'react'
import { db } from '../../../../lib/clientApp'
import Navbar from '../../../components/shared/Navbar/Navbar'
import TechStackAutoComplete from '../../../components/shared/TechStackAutoComplete'

const editProfile = () => {
    const [collegeName, setcollegeName] = React.useState<string>("")
    const [graduationYear, setgraduationYear] = React.useState<string>()
    const [bio, setbio] = React.useState<string>("")
    const [linkedInURL, setlinkedInURL] = React.useState<string>("")
    const [gitHubURL, setgitHubURL] = React.useState<string>("")
    const [twitterURL, settwitterURL] = React.useState<string>("")
    const [portfolioURL, setportfolioURL] = React.useState<string>("")
    const [projectTechStacks, setProjectTechStacks] = React.useState<{ name: string }[]>();
    const handleChange = (event: SelectChangeEvent) => {
        setgraduationYear(event.target.value as string);
    };

    const [user, setUser] = React.useState<any>()
    const router = useRouter();


    const fetchUser = async () => {
        const { uid } = router.query;
        const userRef = doc(db, 'users', uid as string);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
            setUser(userSnap.data());
        }
    }

    React.useEffect(() => {
        if (!router.isReady) return;
        fetchUser();
    }, [router.isReady])

    return (
        <>
            <Head>
                <title>{user?.name} | Edit</title>
            </Head>
            <Navbar />
            <form className="mx-auto text-xl mt-11 mb-10 w-10/12">
                <div className="space-y-4 ">
                    <div className="grid grid-cols-1 lg:grid-cols-5">
                        <div className="col-span-1">
                            <Avatar alt={user?.name} src={user?.image} className="w-[150px] h-[150px] xl:w-[180px] xl:h-[180px] mt-10 ring-4" />
                        </div>
                        <div className="space-y-4 col-span-1 lg:col-span-4">
                            <div className="flex flex-col items-start font-semibold my-6 text-4xl">
                                Edit Profile
                            </div>
                            <h2 className="text-2xl my-3">Personal Details</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                <div className="col-span-1 space-y-4">

                                    <div>
                                        <TextField
                                            id="outlined-textarea"
                                            label="College Name"
                                            placeholder="Enter College Name"
                                            multiline
                                            fullWidth
                                            required
                                            defaultValue={user?.college}
                                            value={collegeName}
                                            onChange={e => setcollegeName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            id="outlined-textarea"
                                            label="Graduate Year"
                                            placeholder="Enter Graduate Year"
                                            multiline
                                            fullWidth
                                            required
                                            defaultValue={user?.graduation_year}
                                            value={graduationYear}
                                            onChange={e => setgraduationYear(e.target.value)}
                                        />
                                    </div>
                                    <div >
                                        <TechStackAutoComplete projectTechStacks={projectTechStacks as { name: string; }[]} setProjectTechStacks={setProjectTechStacks as Dispatch<SetStateAction<{ name: string; }[]>>} />
                                    </div>
                                </div>
                                <div className="col-span-1 space-y-4">
                                    <div>
                                        <TextField
                                            id="outlined-textarea"
                                            // label="debu@gmail.com"
                                            placeholder="example@gmail.com"
                                            multiline
                                            fullWidth
                                            disabled
                                            value={user?.email}
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            id="Bio"
                                            label="Enter your Bio"
                                            placeholder=""
                                            multiline
                                            fullWidth
                                            rows={4}
                                            value={bio}
                                            defaultValue={user?.about}
                                            onChange={e => setbio(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>

                                <h2 className="text-2xl mt-12 mb-6">Social Links</h2>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                <div className="col-span-1 space-y-4">

                                    <div>
                                        <TextField
                                            id="outlined-textarea"
                                            label="LinkedIn Link"
                                            placeholder="Enter your LinkedIn Profile Link"
                                            multiline
                                            fullWidth
                                            value={linkedInURL}
                                            onChange={e => setlinkedInURL(e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <TextField
                                            id="outlined-textarea"
                                            label="GitHub Link"
                                            placeholder="Enter your GitHub Profile Link"
                                            multiline
                                            fullWidth
                                            value={gitHubURL}
                                            onChange={e => setgitHubURL(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-span-1 space-y-4">
                                    <div>
                                        <TextField
                                            id="outlined-textarea"
                                            label="Twitter Link"
                                            placeholder="Enter your Twitter Profile Link"
                                            multiline
                                            fullWidth
                                            value={twitterURL}
                                            onChange={e => settwitterURL(e.target.value)}
                                        />
                                    </div>
                                    {/* <div>
                                        <TextField
                                            id="outlined-textarea"
                                            label="Portfolio Url"
                                            placeholder="Enter your Portfolio Url"
                                            multiline
                                            fullWidth

                                            onChange={e => setportfolioURL(e.target.value)}
                                        />
                                    </div> */}
                                </div>
                            </div>







                            <div >
                                <div className="space-x-4 mt-12">
                                    <button className="btn-blue">
                                        Save
                                    </button>
                                    <button className="btn-red">
                                        Discard
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </form>
        </>
    )
}

export default editProfile