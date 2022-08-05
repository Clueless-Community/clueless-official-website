import React from 'react'
import ProfileSummaryAdmin from '../../../components/Profile/Admin/ProfileSummaryAdmin'
import ProjectsCardAdmin from '../../../components/Profile/Admin/ProjectsCardAdmin'
import Footer from '../../../components/shared/Footer'
import Navbar from '../../../components/shared/Navbar/Navbar'
import StyledChip from '../../../components/shared/StyledChip'
import Head from 'next/head'
import AddProject from '../../../components/Profile/Admin/AddProject'
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore'
import { db } from '../../../../lib/clientApp'
import { IProjectUser, ITechStack, IUser } from '../../../../interfaces/user'
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from 'next/router'
import { CircularProgress, Grow } from '@mui/material'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { GetServerSideProps, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { template } from '../../../../helpers/template'

interface Props{
    userData :  IUser
}

const ProfileAdmin: React.FC<Props> = ({userData}) => {
    const [projects, setProjects] = React.useState<IProjectUser[]>([]);
    const [user, setUser] = React.useState<IUser | undefined>()
    const router = useRouter();
    console.log(userData);
    

    const { data: session } = useSession();
    const userId = session?.user?.id;

    const handleProjectFetch = React.useCallback( async () => {
        setProjects([])
        const { uid } = router.query;
        const projectQuery = query(collection(db, `users/${uid}/projects`));
        const querySnapshot = await getDocs(projectQuery);
        querySnapshot.forEach((doc) => {
            setProjects((prev: any) => {
                return [{ project_id: doc.id, ...doc.data() }, ...prev]
            })
        })
    }, [router.query])


    const fetchUser = React.useCallback(async () => {
        const { uid } = router.query;
        const userRef = doc(db, 'users', uid as string);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
            const data = userSnap.data() as IUser;
            setUser(data);
        }else{
            router.push(`/404`);
        }
    }, [router])


    React.useEffect(() => {
        if (!router.isReady) return;
        fetchUser();
        handleProjectFetch();
    }, [fetchUser, handleProjectFetch, router.isReady])

    React.useEffect(() => {
        if (userData) {
            if (userData.uid !== userId) {
                router.push(`/profile/${userData.uid}`);
            }
        }
    }, [router, user, userId]);


    return (
        <>
                <Head>
                    <title>
                        {userData.name} | Admin</title>
                    <meta name="description" content="A virtual Open source and development community" />
                </Head>
                <>
                    {userData.uid === userId ? (
                        <>
                            < Navbar />
                            <div>
                                <ProfileSummaryAdmin
                                    profileImage={userData.image}
                                    profileName={userData.name}
                                    collegeName={userData.college}
                                    passOutYear={userData.graduation_year}
                                    githubLink={userData.github_link}
                                    linkedInLink={userData.linkedIn_link}
                                    twitterlink={userData.twitter_link}
                                />
                            </div>
                            <div className='my-20 md:mx-40 mx-10'>
                                <p className=' text-4xl'>About Me</p>
                                <div className='h-1 w-28 bg-black ml-16 opacity-80'></div>
                                {userData.about ? (
                                    <p className='mt-5 text-lg'>{userData.about}</p>
                                ) : (
                                    <div className=' flex items-center mt-5 '>
                                        <p className='text-xl'>Add about us section.</p>
                                        <Link href={'/profile/admin/[uid]/edit'} as={`/profile/admin/${userId}/edit`} passHref>
                                            <button className='ml-3 bg-blue-500 text-white p-0.5 hover:bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center transition-all'><EditIcon fontSize='small' /></button>
                                        </Link>
                                    </div>
                                )}            </div>
                            <div className='my-20 md:mx-40 mx-10'>
                                <p className=' text-4xl'>Tech Stack</p>
                                <div className='h-1 w-28 bg-black ml-20 opacity-80'></div>
                                {userData.techstack ? (
                                    <div className='flex gap-4 flex-wrap mt-5'>
                                        {user?.techstack?.map((teckStack: ITechStack, i : number) => {
                                            return (
                                                <StyledChip text={teckStack.name} size='md' rounded='md' key={i} />
                                            )
                                        })}
                                    </div>
                                ) : (
                                    <div className=' flex items-center mt-5 '>
                                        <p className='text-xl'>Add tech stacks and get more opportunities.</p>
                                        <Link href={'/profile/admin/[uid]/edit'} as={`/profile/admin/${userId}/edit`} passHref>
                                            <button className='ml-3 bg-blue-500 text-white p-0.5 hover:bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center transition-all'><EditIcon fontSize='small' /></button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <div className='my-20 md:mx-40 mx-10'>
                                <p className=' text-4xl'>Projects</p>
                                <div className='h-1 w-20 bg-black ml-16 opacity-80'></div>
                                {projects ? (
                                    <>
                                        {projects?.map((project: IProjectUser, i : number) => {
                                            return (
                                                <div className='my-10' key={i}>
                                                    <ProjectsCardAdmin
                                                        projectId={project.project_id}
                                                        projectName={project.project_name}
                                                        projectImage={project.project_image}
                                                        projectDesc={project.project_desc}
                                                        gitHubLink={project.github_link}
                                                        publicLink={project.public_link}
                                                        techStacks={project.techstacks}
                                                        handleProjectFetch={handleProjectFetch}
                                                    />
                                                </div>
                                            )
                                        })}
                                    </>
                                ) : (
                                    <p className='mt-5 text-xl'>Add your first project and show the world now! {userData.name}.👇</p>
                                )}
                                <AddProject handleProjectFetch={handleProjectFetch} />
                            </div>
                            <Footer />
                        </>) : (
                        <div className='flex justify-center items-center h-screen'>
                            <CircularProgress />
                        </div>
                    )}
                </>
        </>
    )
}

export default ProfileAdmin

