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
import { Grow } from '@mui/material'

const teckStacks = [
    { 'name': 'TypeScript' },
    { 'name': 'React' },
    { 'name': 'C' },
    { 'name': 'C++' },
    { 'name': 'Azure' },
    { 'name': 'AWS' },
    { 'name': " Google Cloud" }
]


const Projects = [
    {
        'projectName': 'Project Name',
        'projectImage': 'https://img.freepik.com/premium-vector/light-blue-project-management-concept_23-2147782704.jpg?w : 2000',
        'projectDesc': 'Booklee is a Web App, to sell and donate your second hand books at a minimal price or free of cost to help a needy learner, learn and grow more. This made it to the Finals of Microsoft Imagine Cup 2022. Booklee is a Web App, to sell and donate your second hand books at a minimal price or free of cost to help a needy learner, learn and grow more. This made it to the Finals of Microsoft Imagine Cup 2022.',
        'gitHubLink': 'None',
        'publicLink': 'None',
        'techStacks': teckStacks
    },
    {
        'projectName': 'Project Name 2',
        'projectImage': 'https://img.freepik.com/premium-vector/light-blue-project-management-concept_23-2147782704.jpg?w : 2000',
        'projectDesc': 'Booklee is a Web App, to sell and donate your second hand books at a minimal price or free of cost to help a needy learner, learn and grow more. This made it to the Finals of Microsoft Imagine Cup 2022. Booklee is a Web App, to sell and donate your second hand books at a minimal price or free of cost to help a needy learner, learn and grow more. This made it to the Finals of Microsoft Imagine Cup 2022.',
        'gitHubLink': 'None',
        'publicLink': 'None',
        'techStacks': teckStacks
    },
]


const ProfileAdmin: React.FC = () => {
    const [projects, setProjects] = React.useState<IProjectUser[]>([]);
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

    const handleProjectFetch = async () => {
        setProjects([])
        const { uid } = router.query;
        const projectQuery = query(collection(db, `users/${uid}/projects`));
        const querySnapshot = await getDocs(projectQuery);
        querySnapshot.forEach((doc) => {
            setProjects((prev: any) => {
                return [{ project_id: doc.id, ...doc.data() }, ...prev]
            })
        })
    }

    React.useEffect(() => {
        if (!router.isReady) return;
        fetchUser();
        handleProjectFetch();
    }, [router.isReady])

    console.log(projects);
    return (
        <>
            <Head>
                <title>{user?.name} | Admin</title>
                <meta name="description" content="A virtual Open source and development community" />
                <meta property="og:image" content="https://i.ibb.co/WVBNFXB/Clueless-SS.png" />
            </Head>
            <Navbar />
            <div>
                <ProfileSummaryAdmin
                    profileImage={user?.image}
                    profileName={user?.name}
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
                    <div className=' flex items-center mt-5 '>
                        <p className='text-xl'>Add about us section.</p>
                        <button className='ml-3 bg-blue-500 text-white p-0.5 hover:bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center transition-all'><EditIcon fontSize='small' /></button>
                    </div>
                )}            </div>
            <div className='my-20 md:mx-40 mx-10'>
                <p className=' text-4xl'>Tech Stack</p>
                <div className='h-1 w-28 bg-black ml-20 opacity-80'></div>
                {user?.techstack ? (
                    <div className='flex gap-4 flex-wrap mt-5'>
                        {user?.techstack.map((teckStack: ITechStack) => {
                            return (
                                <StyledChip text={teckStack.name} size='md' rounded='md' />
                            )
                        })}
                    </div>
                ) : (
                    <div className=' flex items-center mt-5 '>
                        <p className='text-xl'>Add tech stacks and get more opportunities.</p>
                        <button className='ml-3 bg-blue-500 text-white p-0.5 hover:bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center transition-all'><EditIcon fontSize='small' /></button>
                    </div>
                )}
            </div>
            <div className='my-20 md:mx-40 mx-10'>
                <p className=' text-4xl'>Projects</p>
                <div className='h-1 w-20 bg-black ml-16 opacity-80'></div>
                {projects ? (
                    <>
                        {projects.map((project: IProjectUser) => {
                            return (
                                <div className='my-10'>
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
                    <p className='mt-5 text-xl'>Add your first project and show the world now! {user?.name}.👇</p>
                )}
                <AddProject handleProjectFetch={handleProjectFetch} />
            </div>
            <Footer />
        </>
    )
}

export default ProfileAdmin
