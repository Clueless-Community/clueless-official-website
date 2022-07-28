import { Avatar } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EditIcon from '@mui/icons-material/Edit';

interface Props {
    profileImage : string,
    profileName : string,
    collegeName : string,
    passOutYear :  number,
    githubLink : string,
    linkedInLink : string,
    twitterlink : string,
}

const ProfileSummaryAdmin : React.FC<Props> = ({profileImage, profileName, collegeName, passOutYear, githubLink, linkedInLink, twitterlink}) => {
    return (
        <div className='relative'>
            <img src="/profile-bg.png" alt="" className='absolute -z-50' />
            <button className=' md:bg-white btn-blue md:text-black flex items-center md:px-6 px-4 py-2 shadow-blue-600 rounded-lg absolute right-10 top-20 md:top-5 hover:bg-gray-100 transition-all'><span className='md:mr-2'><EditIcon fontSize='small'/></span><span className='hidden md:block'>Edit Profile</span></button>
            <div className=' flex flex-col items-center pt-44'>
                <Avatar
                    src={profileImage}
                    alt={profileName}
                    className=' ring-4'
                    sx={{ width: 120, height: 120 }}
                />
                <p className='mt-5 text-2xl'>{profileName}</p>
                <p className='mt-2 text-sm opacity-80'>{collegeName}</p>
                <p className='mt-1 text-sm'>{passOutYear}</p>
                <div className='flex gap-10 mt-3'>
                    <a href={githubLink} target="_blank" className=' opacity-80'><GitHubIcon fontSize='large' /></a>
                    <a href={linkedInLink} target="_blank" className=' opacity-80'><LinkedInIcon fontSize='large' /></a>
                    <a href={twitterlink} target="_blank" className=' opacity-80'><TwitterIcon fontSize='large' /></a>
                </div>
            </div> 
        </div>
    )
}

export default ProfileSummaryAdmin