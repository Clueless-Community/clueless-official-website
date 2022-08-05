/* eslint-disable @next/next/no-img-element */
import { Avatar } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

interface Props {
    profileId : string,
    profileImage: string,
    profileName: string,
    collegeName?: string,
    passOutYear?: number,
    githubLink?: string,
    linkedInLink?: string,
    twitterlink?: string,
}

const ProfileSummary: React.FC<Props> = ({ profileImage, profileName, collegeName, passOutYear, githubLink, linkedInLink, twitterlink, profileId }) => {

    const { data: session } = useSession();
    const userId = session?.user?.id;

    return (
        <div className=' relative'>
            <img src="/profile-bg.png" alt="" className='absolute -z-50' />
            {userId === profileId ? (
            <div className=' flex flex-row-reverse pt-5 mr-5'>
                <Link href={'/profile/admin/[uid]'} as={`/profile/admin/${userId}`} passHref>
                    <button className=' md:bg-white mr-5 btn-blue md:text-black flex items-center md:px-6 px-4 py-2 shadow-blue-600 rounded-lg  right-10 top-20 md:top-5 hover:bg-gray-100 transition-all'><span className='md:mr-2'><RemoveRedEyeIcon fontSize='small' /></span><span className='hidden md:block'>Admin View</span></button>
                </Link>
            </div>
            ) : (
                null
            )}
            <div className=' flex flex-col items-center pt-36'>
                <Avatar
                    src={profileImage}
                    alt={profileName}
                    className=' ring-4'
                    sx={{ width: 120, height: 120 }}
                />
                <p className='mt-5 text-2xl'>{profileName}</p>
                {collegeName && (<p className='mt-2 text-sm opacity-80'>{collegeName}</p>)}
                {passOutYear && (<p className='mt-1 text-sm'>{passOutYear}</p>)}
                <div className='flex gap-10 mt-3'>
                    {githubLink && (<a href={githubLink} target="_blank" className=' opacity-80' rel="noreferrer"><GitHubIcon fontSize='large' /></a>)}
                    {linkedInLink && (<a href={linkedInLink} target="_blank" className=' opacity-80' rel="noreferrer"><LinkedInIcon fontSize='large' /></a>)}
                    {githubLink && (<a href={twitterlink} target="_blank" className=' opacity-80' rel="noreferrer"><TwitterIcon fontSize='large' /></a>)}
                </div>
            </div>
        </div>
    )
}

export default ProfileSummary