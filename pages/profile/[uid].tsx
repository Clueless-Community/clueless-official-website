import React from 'react'
import ProfileSummary from '../components/Profile/ProfileSummary'
import ProjectsCard from '../components/Profile/ProjectsCard'
import Footer from '../components/shared/Footer'
import Navbar from '../components/shared/Navbar/Navbar'
import StyledChip from '../components/shared/StyledChip'
import Head from 'next/head';
import { doc, getDoc, getDocs, query, collection } from 'firebase/firestore'
import { db } from '../../lib/clientApp'
import { IProjectUser, ITechStack, IUser } from '../../interfaces/user'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { CircularProgress } from '@mui/material'

const Profile: React.FC = () => {

    const router = useRouter();
    const { data: session } = useSession();
    const userId = session?.user?.id;

    const [user, setUser] = React.useState<IUser | undefined>();
    const [projects, setProjects] = React.useState<IProjectUser[]>([]);

    const fetchUser = React.useCallback( async () => {
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

    const handleProjectFetch = React.useCallback ( async () => {
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

    React.useEffect(() => {
        if (!router.isReady) return;
        fetchUser();
        handleProjectFetch();
    }, [fetchUser, handleProjectFetch, router.isReady])


    return (
        <>
            {user ? (
                <Head>
                    <title>
                        {user?.name}</title>
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
                    <Navbar />
                    <div>
                        <ProfileSummary
                            profileId={user.uid as string}
                            profileImage={user?.image as string}
                            profileName={user?.name as string}
                            collegeName={user?.college}
                            passOutYear={user?.graduation_year}
                            githubLink={user?.github_link}
                            linkedInLink={user?.linkedIn_link}
                            twitterlink={user?.twitter_link}
                        />
                    </div>
                    <div className='my-20 md:mx-40 mx-10'>
                        <p className=' text-4xl'>About Me</p>
                        <div className='h-1 w-28 bg-black ml-16 opacity-80'></div>
                        {user?.about ? (
                            <p className='mt-5 text-lg'>{user?.about}</p>
                        ) : (
                            <p className='mt-5 text-xl'>No about me given.😢</p>
                        )}
                    </div>
                    <div className='my-20 md:mx-40 mx-10'>
                        <p className=' text-4xl'>Tech Stack</p>
                        <div className='h-1 w-28 bg-black ml-20 opacity-80'></div>
                        {user?.techstack ? (
                            <div className='flex gap-4 flex-wrap mt-5'>
                                {user?.techstack.map((teckStack: ITechStack, i : number) => {
                                    return (
                                        <StyledChip text={teckStack.name} size='md' rounded='md' key={i}/>
                                    )
                                })}
                            </div>
                        ) : (
                            <p className='mt-5 text-xl'>No tech stack given by {user?.name}.😢</p>
                        )}
                    </div>
                    <div className='my-20 md:mx-40 mx-10'>
                        <p className=' text-4xl'>Projects</p>
                        <div className='h-1 w-20 bg-black ml-16 opacity-80'></div>
                        {projects?.length !== 0 ? (
                            <>
                                {projects?.map((project: IProjectUser, i : number) => {
                                    return (
                                        <div className='my-10' key={i}>
                                            <ProjectsCard
                                                projectName={project.project_name}
                                                projectImage={project.project_image}
                                                projectDesc={project.project_desc}
                                                gitHubLink={project.github_link}
                                                publicLink={project.public_link}
                                                techStacks={project.techstacks}
                                            />
                                        </div>
                                    )
                                })}
                            </>
                        ) : (
                            <p className='mt-5 text-xl'>No projects uploaded by {user?.name}.😢</p>
                        )}
                    </div>
                    <Footer />
                </>
            ) : (
                <div className='flex justify-center items-center h-screen'>
                    <CircularProgress />
                </div>
            )}
        </>
    )
}

export default Profile