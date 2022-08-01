import React from 'react'
import ProfileSummary from '../components/Profile/ProfileSummary'
import ProjectsCard from '../components/Profile/ProjectsCard'
import Footer from '../components/shared/Footer'
import Navbar from '../components/shared/Navbar/Navbar'
import StyledChip from '../components/shared/StyledChip'
import Head from 'next/head';
import { GetServerSideProps, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../lib/clientApp'
import { IProjectUser, ITechStack, IUser } from '../../interfaces/user'

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

interface Props {
    userData: IUser
}

const Profile: React.FC<Props> = ({ userData }) => {
    console.log(userData);

    const userProjects = () => {

    }
    return (
        <>
            <Head>
                <title>{userData.name}</title>
                <meta name="description" content="A virtual Open source and development community" />
                <meta property="og:image" content="https://i.ibb.co/WVBNFXB/Clueless-SS.png" />
            </Head>
            <Navbar />
            <div>
                <ProfileSummary
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
                    <p className='mt-5 text-xl'>No about me given.😢</p>
                )}
            </div>
            <div className='my-20 md:mx-40 mx-10'>
                <p className=' text-4xl'>Tech Stack</p>
                <div className='h-1 w-28 bg-black ml-20 opacity-80'></div>
                {userData.techstack ? (
                    <div className='flex gap-4 flex-wrap mt-5'>
                        {userData.techstack.map((teckStack: ITechStack) => {
                            return (
                                <StyledChip text={teckStack.name} size='md' rounded='md' />
                            )
                        })}
                    </div>
                ) : (
                    <p className='mt-5 text-xl'>No tech stack given by {userData.name}.😢</p>
                )}
            </div>
            <div className='my-20 md:mx-40 mx-10'>
                <p className=' text-4xl'>Projects</p>
                <div className='h-1 w-20 bg-black ml-16 opacity-80'></div>
                {userData.projects ? (
                    <>
                        {userData.projects.map((project: IProjectUser) => {
                            return (
                                <div className='my-10'>
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
                    <p className='mt-5 text-xl'>No projects uploaded by {userData.name}.😢</p>
                )}
            </div>
            <Footer />
        </>
    )
}

export default Profile

export const getServerSideProps: GetServerSideProps<{ [key: string]: any; }, ParsedUrlQuery, PreviewData> = async (context) => {
    const userId = context?.query?.uid;
    try {
        const userRef = doc(db, "users", userId as string);
        const userDocSnap = await getDoc(userRef);
        if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            return {
                props: { userData }
            }
        } else {
            return {
                notFound: true,
            }
        }
    } catch {
        return {
            notFound: true,
        }
    }
}