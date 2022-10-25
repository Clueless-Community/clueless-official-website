/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ProfileSummaryAdmin from '../../../components/Profile/Admin/ProfileSummaryAdmin';
import ProjectsCardAdmin from '../../../components/Profile/Admin/ProjectsCardAdmin';
import Footer from '../../../components/shared/Footer';
import Navbar from '../../../components/shared/Navbar/Navbar';
import StyledChip from '../../../components/shared/StyledChip';
import Head from 'next/head';
import AddProject from '../../../components/Profile/Admin/AddProject';
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import { db } from '../../../../lib/clientApp';
import { IProjectUser, ITechStack, IUser } from '../../../../interfaces/user';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useRouter } from 'next/router';
import { CircularProgress, Grow } from '@mui/material';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const ProfileAdmin: React.FC = () => {
 const [projects, setProjects] = React.useState<IProjectUser[]>([]);
 const [user, setUser] = React.useState<IUser | undefined>();
 const router = useRouter();

 const { data: session } = useSession();
 const userId = session?.user?.id;

 const handleProjectFetch = React.useCallback(async () => {
  setProjects([]);
  const { uid } = router.query;
  const projectQuery = query(collection(db, `users/${uid}/projects`));
  const querySnapshot = await getDocs(projectQuery);
  querySnapshot.forEach((doc) => {
   setProjects((prev: any) => {
    return [{ project_id: doc.id, ...doc.data() }, ...prev];
   });
  });
 }, [router.query]);

 const fetchUser = React.useCallback(async () => {
  const { uid } = router.query;
  const userRef = doc(db, 'users', uid as string);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
   const data = userSnap.data() as IUser;
   setUser(data);
  } else {
   router.push(`/404`);
  }
 }, [router]);

 React.useEffect(() => {
  if (!router.isReady) return;
  fetchUser();
  handleProjectFetch();
 }, [fetchUser, handleProjectFetch, router.isReady]);

 React.useEffect(() => {
  if (user) {
   if (user.uid !== userId) {
    router.push(`/profile/${user.uid}`);
   }
  }
 }, [router, user, userId]);

 return (
  <>
   {user ? (
    <Head>
     <title>{user?.name} | Admin</title>
     <meta
      name='description'
      content='A virtual Open source and development community'
     />
    </Head>
   ) : (
    <Head>
     <title>Loading...</title>
     <meta
      name='description'
      content='A virtual Open source and development community'
     />
    </Head>
   )}
   {user ? (
    <>
     {user.uid === userId ? (
      <>
       <Navbar />
       <div className='relative pt-[15%]'>
        <div className='absolute -z-10 top-0'>
         <img src='/profile-bg.png' alt='' />
        </div>
        <div
         className='pb-16 bg-white rounded-t-[1rem] md:rounded-t-[1rem] dark:bg-zinc-900'
         style={{
          boxShadow: '0px -10px 50px rgba(0, 0, 0, 0.25)',
         }}
        >
         <div className='flex flex-col lg:flex-row'>
          <ProfileSummaryAdmin
           profileImage={user?.image}
           profileName={user?.name}
           collegeName={user?.college}
           passOutYear={user?.graduation_year}
           githubLink={user?.github_link}
           linkedInLink={user?.linkedIn_link}
           twitterlink={user?.twitter_link}
          />

          <div className='md:grow pt-16 pl-8 pr-8 md:pl-16 md:pr-16 lg:pl-24 lg:pr-16 flex flex-col gap-10'>
           <div>
            <p className=' text-4xl'>About Me</p>
            {user?.about ? (
             <p className='mt-5 text-lg'>{user?.about}</p>
            ) : (
             <div className=' flex items-center mt-5 '>
              <p className='text-xl'>Add about us section.</p>
              <Link
               href={'/profile/admin/[uid]/edit'}
               as={`/profile/admin/${userId}/edit`}
               passHref
              >
               <button
                title='tech'
                className='ml-3 bg-blue-500 text-white p-0.5 hover:bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center transition-all'
               >
                <EditIcon fontSize='small' />
               </button>
              </Link>
             </div>
            )}{' '}
           </div>
           <div>
            <p className=' text-4xl'>Tech Stack</p>
            {/* <div className='h-1 w-28 bg-black ml-20 opacity-80'></div> */}
            {user?.techstack ? (
             <div className='flex gap-4 flex-wrap mt-5'>
              {user?.techstack?.map((teckStack: ITechStack, i: number) => {
               return (
                <StyledChip
                 text={teckStack.name}
                 size='md'
                 rounded='md'
                 key={i}
                />
               );
              })}
             </div>
            ) : (
             <div className=' flex items-center mt-5 '>
              <p className='text-xl'>
               Add tech stacks and get more opportunities.
              </p>
              <Link
               href={'/profile/admin/[uid]/edit'}
               as={`/profile/admin/${userId}/edit`}
               passHref
              >
               <button
                title='tech'
                className='ml-3 bg-blue-500 text-white p-0.5 hover:bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center transition-all'
               >
                <EditIcon fontSize='small' />
               </button>
              </Link>
             </div>
            )}
           </div>
          </div>
          <div className='flex flex-row lg:flex-col items-center justify-start lg:justify-center gap-5 pt-8 pr-8 pl-8 md:pl-16 md:pr-16 lg:pr-16 lg:pl-0 lg:pt-0'>
           <Link
            href={'/profile/admin/[uid]/edit'}
            as={`/profile/admin/${userId}/edit`}
            passHref
           >
            <button className='bg-blue btn-blue text-white md:px-6 px-2 py-2 shadow-blue-600 rounded-lg md:w-40'>
             <EditIcon fontSize='small' className='block md:hidden' />
             <span className='hidden md:block'>Edit Profile</span>
            </button>
           </Link>

           <Link href={'/profile/[uid]'} as={`/profile/${userId}`} passHref>
            <button className='bg-blue btn-blue text-white md:px-6 px-2 py-2 shadow-blue-600 rounded-lg md:w-40'>
             <RemoveRedEyeIcon fontSize='small' className='block md:hidden' />
             <span className='hidden md:block'>Visitor View</span>
            </button>
           </Link>
          </div>
         </div>
         <div className='my-20 md:mx-40 mx-10'>
          <p className=' text-4xl'>Projects</p>
          <div className='h-1 w-20 bg-black ml-16 opacity-80'></div>
          {projects ? (
           <>
            {projects?.map((project: IProjectUser, i: number) => {
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
             );
            })}
           </>
          ) : (
           <p className='mt-5 text-xl'>
            Add your first project and show the world now! {user?.name}.👇
           </p>
          )}
          <AddProject handleProjectFetch={handleProjectFetch} />
         </div>
        </div>
        <Footer />
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
   )}
  </>
 );
};

export default ProfileAdmin;
