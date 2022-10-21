import { Alert, Avatar, Box, CircularProgress, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Snackbar, TextareaAutosize, TextField } from '@mui/material'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Dispatch, SetStateAction } from 'react'
import { ITechStack, IUser } from '../../../../interfaces/user'
import { db } from '../../../../lib/clientApp'
import Navbar from '../../../components/shared/Navbar/Navbar'
import TechStackAutoComplete from '../../../components/shared/TechStackAutoComplete'

const EditProfile = () => {

    const [collegeName, setcollegeName] = React.useState<string>("")
    // const [graduationYear, setgraduationYear] = React.useState<number | null>()
    const [bio, setbio] = React.useState<string>("")
    const [linkedInURL, setlinkedInURL] = React.useState<string>("")
    const [gitHubURL, setgitHubURL] = React.useState<string>("")
    const [twitterURL, settwitterURL] = React.useState<string>("")
    // const [portfolioURL, setportfolioURL] = React.useState<string>("")
    const [techStacks, setTechStacks] = React.useState<{ name: string }[]>();
    // const [name, setName] = React.useState<string>('');

    const { data: session } = useSession();
    const userId = session?.user?.id;


    const [user, setUser] = React.useState<IUser | undefined>()
    const router = useRouter()


    const saveUser = async () => {
        const userRef = doc(db, "users", userId as string);
        await updateDoc(userRef, {
            college: collegeName,
            github_link: gitHubURL,
            linkedIn_link: linkedInURL,
            twitter_link: twitterURL,
            about: bio,
            techstack: techStacks
        })
    }

    const fetchUser = React.useCallback(async () => {
        const { uid } = router.query;
        const userRef = doc(db, 'users', uid as string);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
            const data = userSnap.data() as IUser
            setUser(data);
        } else {
            router.push(`/404`);
        }
    }, [router])


    React.useEffect(() => {
        if (!router.isReady) return;
        fetchUser();
    }, [fetchUser, router.isReady]);

    React.useEffect(() => {
        if (user) {
            if (user.uid === userId) {
                setcollegeName(user?.college ? user.college : '');
                setbio(user?.about ? user.about : '');
                setTechStacks(user?.techstack ? user.techstack : []);
                settwitterURL(user?.twitter_link ? user.twitter_link : '');
                setlinkedInURL(user?.linkedIn_link ? user.linkedIn_link : '');
                setgitHubURL(user?.github_link ? user.github_link : '');
            } else {
                router.push(`/profile/${user.uid}`);
            }
        }
    }, [router, user, userId]);

    //Snack Bars Settings

    const [open, setOpen] = React.useState(false);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    return (
        <>
            {user ? (
                <Head>
                    <title>
                        {user?.name} | Edit</title>
                    <meta name="description" content="A virtual Open source and development community" />
                </Head>
            ) : (
                <Head>
                    <title>
                        Loading...</title>
                    <meta name="description" content="A virtual Open source and development community" />
                </Head>
            )}
            {user ? (
                <>
                    {user.uid === userId ? (
                        <>
                            <Navbar />
                            <div className="mx-auto text-xl mt-11 mb-10 w-10/12">
                                <div className="space-y-4 ">
                                    <div className="grid grid-cols-1 lg:grid-cols-5">
                                        <div className="col-span-1">
                                            <Avatar alt={user?.name} src={user?.image} sx={{ width: 150, height: 150 }} className="mt-10 ring-4" />
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
                                                                label="Name"
                                                                disabled
                                                                fullWidth
                                                                value={user?.name}
                                                                
                                                            />
                                                      
                                                    </div>
                                                    <div>
                                                        <TextField
                                                            id="outlined-textarea"
                                                            label="College Name"
                                                            placeholder="Enter College Name"
                                                            fullWidth
                                                            required
                                                            defaultValue={user?.college}
                                                            value={collegeName}
                                                            onChange={e => setcollegeName(e.target.value)}
                                                        />
                                                    </div>
                                                    <div>
                                                        {/* <input
                                                    id="outlined-textarea"
                                                    // label="Graduate Year"
                                                    placeholder="Enter Graduate Year"
                                                    fullWidth
                                                    required
                                                    type='number'
                                                    // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                                    defaultValue={user?.graduation_year}
                                                    // value={graduationYear}
                                                    onChange={(e) => {setgraduationYear(e.target.value)}}
                                                /> */}
                                                    </div>
                                                    <div >
                                                        <TechStackAutoComplete
                                                            projectTechStacks={techStacks as { name: string; }[]}
                                                            setProjectTechStacks={setTechStacks as Dispatch<SetStateAction<{ name: string; }[]>>}
                                                            defaultValue={user?.techstack as ITechStack[]}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-span-1 space-y-4">
                                                    <div>
                                                        <TextField
                                                            id="outlined-textarea"
                                                            label="email"
                                                            placeholder="example@gmail.com"
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
                                                            fullWidth
                                                            value={linkedInURL}
                                                            defaultValue={user?.linkedIn_link}
                                                            onChange={e => setlinkedInURL(e.target.value)}
                                                            color="primary"
                                                        />
                                                    </div>

                                                    <div>
                                                        <TextField
                                                            id="outlined-textarea"
                                                            label="GitHub Link"
                                                            placeholder="Enter your GitHub Profile Link"
                                                            fullWidth
                                                            value={gitHubURL}
                                                            defaultValue={user?.github_link}
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
                                                            fullWidth
                                                            value={twitterURL}
                                                            defaultValue={user?.twitter_link}
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
                                            <div className='flex md:justify-between flex-col md:flex-row ' >
                                                <div className="space-x-4 mt-12 ">
                                                    <button className="btn-blue" onClick={async () => { await saveUser(); setOpen(true); }}>
                                                        Save
                                                    </button>
                                                    {/* <button className="btn-red">
                                                        Discard
                                                    </button> */}
                                                </div>
                                                <div className='space-x-4 md:mt-12 mt-5'>
                                                    <Link href={'/profile/admin/[uid]'} as={`/profile/admin/${userId}`} passHref>
                                                        <button className="btn-blue">
                                                            Back to Profile
                                                        </button>
                                                    </Link>
                                                </div>
                                                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                                        {user.name.split(' ')[0]}, Your Profile is updated!
                                                    </Alert>
                                                </Snackbar>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className='flex justify-center items-center h-screen'>
                            <CircularProgress />
                        </div>
                    )}
                </>
            ) : (
                <div className='flex justify-center items-center h-screen'>
                    <CircularProgress />
                </div>
            )
            }

        </>
    )
}

export default EditProfile