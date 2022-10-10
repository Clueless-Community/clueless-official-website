/* eslint-disable @next/next/no-img-element */
import { Avatar } from '@mui/material';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

interface Props {
 profileId: string;
 profileImage: string;
 profileName: string;
 collegeName?: string;
 passOutYear?: number;
 githubLink?: string;
 linkedInLink?: string;
 twitterlink?: string;
}

const ProfileSummary: React.FC<Props> = ({
 profileImage,
 profileName,
 collegeName,
 passOutYear,
 githubLink,
 linkedInLink,
 twitterlink,
 profileId,
}) => {
 const { data: session } = useSession();
 const userId = session?.user?.id;

 return (
  <div className='flex flex-col items-center -mt-7 md:-mt-14 lg:pl-24'>
   <Avatar
    src={profileImage}
    alt={profileName}
    className='ring-8 ring-white/[0.850]'
    sx={{ width: 120, height: 120 }}
   />
   <p className='mt-5 text-2xl text-center'>{profileName}</p>
   {collegeName && <p className='mt-2 text-sm opacity-80'>{collegeName}</p>}
   {passOutYear && <p className='mt-1 text-sm'>{passOutYear}</p>}
   <div className='flex gap-10 mt-3'>
    {githubLink && (
     <a
      href={githubLink}
      target='_blank'
      className=' opacity-80'
      rel='noreferrer'
     >
      <GitHubIcon fontSize='large' />
     </a>
    )}
    {linkedInLink && (
     <a
      href={linkedInLink}
      target='_blank'
      className=' opacity-80'
      rel='noreferrer'
     >
      <LinkedInIcon fontSize='large' />
     </a>
    )}
    {githubLink && (
     <a
      href={twitterlink}
      target='_blank'
      className=' opacity-80'
      rel='noreferrer'
     >
      <TwitterIcon fontSize='large' />
     </a>
    )}
   </div>
  </div>
 );
};

export default ProfileSummary;
