import { Avatar } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

interface Props {
    profileImage : string,
    profileName : string,
    collegeName : string,
    passOutYear :  number,
    githubLink : string,
    linkedInLink : string,
    twitterlink : string,
}

const ProfileSummary : React.FC<Props> = ({profileImage, profileName, collegeName, passOutYear, githubLink, linkedInLink, twitterlink}) => {
    return (
        <div className=' relative'>
            <img src="/profile-bg.png" alt="" className='absolute -z-50' />
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

export default ProfileSummary