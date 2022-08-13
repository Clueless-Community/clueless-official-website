import React from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Tooltip } from '@mui/material';
import Link from 'next/link';

const TeamMembersHome = () => {

    return (
        <div className='sm:mb-44 mt-20'>
            <h2 className='xl:px-28 lg:px-20 w-11/12 text-center  text-4xl font-semibold'>✨Amazing Team Behind this!</h2>
            <div className=' mx-auto justify-center flex-wrap hidden lg:flex'>
                <Link href="/about-us" passHref>
                    <AvatarGroup max={12} className="2xl:scale-[370%] xl:scale-[300%] lg:scale-[230%] mt-32">
                        <Tooltip title="Rajdeep Sengupta" arrow>
                            <Avatar alt="Remy Sharp" sx={{ maxWidth: 150, maxHeight: 150 }} className="ring-1 border-[#1955CA] hover:scale-110 transition-all cursor-pointer hover:z-50 relative" src="/TeamMembers/Rajdeep.png" />
                        </Tooltip>
                        <Tooltip title="Debajyoti Saha" arrow>
                            <Avatar alt="Remy Sharp" sx={{ maxWidth: 150, maxHeight: 150 }} className="ring-1 border-[#1955CA] hover:scale-110 transition-all cursor-pointer hover:z-50 relative" src="/TeamMembers/Debajyoti Saha.jpg" />
                        </Tooltip>
                        <Tooltip title="Roshan Kumar" arrow>
                            <Avatar alt="Remy Sharp" sx={{ maxWidth: 150, maxHeight: 150 }} className="ring-1 border-[#1955CA] hover:scale-110 transition-all cursor-pointer hover:z-50 relative" src="/TeamMembers/Roshan.jpeg" />
                        </Tooltip>
                        <Tooltip title="Sayan Chowdhury" arrow>
                            <Avatar alt="Remy Sharp" sx={{ maxWidth: 150, maxHeight: 150 }} className="ring-1 border-[#1955CA] hover:scale-110 transition-all cursor-pointer hover:z-50 relative" src="/TeamMembers/Sayan Chowdhury.jpg" />
                        </Tooltip>
                        <Tooltip title="Nikhil Raj" arrow>
                            <Avatar alt="Remy Sharp" sx={{ maxWidth: 150, maxHeight: 150 }} className="ring-1 border-[#1955CA] hover:scale-110 transition-all cursor-pointer hover:z-50 relative" src="/TeamMembers/Nikhil Raj.jpg" />
                        </Tooltip>
                        <Tooltip title="Anubhab Halder" arrow>
                            <Avatar alt="Remy Sharp" sx={{ maxWidth: 150, maxHeight: 150 }} className="ring-1 border-[#1955CA] hover:scale-110 transition-all cursor-pointer hover:z-50 relative" src="/TeamMembers/Anubhab.jpg" />
                        </Tooltip>
                        <Tooltip title="Subho Ghosh" arrow>
                            <Avatar alt="Remy Sharp" sx={{ maxWidth: 150, maxHeight: 150 }} className="ring-1 border-[#1955CA] hover:scale-110 transition-all cursor-pointer hover:z-50 relative" src="/TeamMembers/Subho Ghosh.jpg" />
                        </Tooltip>
                        <Tooltip title="Kingshuk Sarkar" arrow>
                            <Avatar alt="Remy Sharp" sx={{ maxWidth: 150, maxHeight: 150 }} className="ring-1 border-[#1955CA] hover:scale-110 transition-all cursor-pointer hover:z-50 relative" src="/TeamMembers/Kingshuk Sarkar.jpeg" />
                        </Tooltip>
                        <Tooltip title="Kusumita Ghose" arrow>
                            <Avatar alt="Remy Sharp" sx={{ maxWidth: 150, maxHeight: 150 }} className="ring-1 border-[#1955CA] hover:scale-110 transition-all cursor-pointer hover:z-50 relative" src="/TeamMembers/Kusumita Ghose.jpg" />
                        </Tooltip>
                        <Tooltip title="Jyothi Swaroop Makena" arrow>
                            <Avatar alt="Remy Sharp" sx={{ maxWidth: 150, maxHeight: 150 }} className="ring-1 border-[#1955CA] hover:scale-110 transition-all cursor-pointer hover:z-50 relative" src="/TeamMembers/Jyothi Swaroop.jpg" />
                        </Tooltip>
                        <Tooltip title="Rohit Ranjan Singh" arrow>
                            <Avatar alt="Remy Sharp" sx={{ maxWidth: 150, maxHeight: 150 }} className="ring-1 border-[#1955CA] hover:scale-110 transition-all cursor-pointer hover:z-50 relative" src="/TeamMembers/Rohit.jpg" />
                        </Tooltip>
                    </AvatarGroup>
                </Link>
            </div>
            <div className=' mx-auto justify-center flex-wrap flex-col items-center py-12 flex lg:hidden'>
                <AvatarGroup max={12} className="sm:scale-[250%] scale-150 sm:py-16 py-6">
                    <Avatar alt="Remy Sharp" sx={{ maxWidth: 150, maxHeight: 150 }} className="ring-1 border-[#1955CA] hover:scale-110 transition-all cursor-pointer hover:z-50 relative" src="/TeamMembers/Rajdeep.png" />
                    <Avatar alt="Remy Sharp" sx={{ maxWidth: 150, maxHeight: 150 }} className="ring-1 border-[#1955CA] hover:scale-110 transition-all cursor-pointer hover:z-50 relative" src="/TeamMembers/Debajyoti Saha.jpg" />
                    <Avatar alt="Remy Sharp" sx={{ maxWidth: 150, maxHeight: 150 }} className="ring-1 border-[#1955CA] hover:scale-110 transition-all cursor-pointer hover:z-50 relative" src="/TeamMembers/Roshan.jpeg" />
                    <Avatar alt="Remy Sharp" sx={{ maxWidth: 150, maxHeight: 150 }} className="ring-1 border-[#1955CA] hover:scale-110 transition-all cursor-pointer hover:z-50 relative" src="/TeamMembers/Sayan Chowdhury.jpg" />
                    <Avatar alt="Remy Sharp" sx={{ maxWidth: 150, maxHeight: 150 }} className="ring-1 border-[#1955CA] hover:scale-110 transition-all cursor-pointer hover:z-50 relative" src="/TeamMembers/Nikhil Raj.jpg" />
                    <Avatar alt="Remy Sharp" sx={{ maxWidth: 150, maxHeight: 150 }} className="ring-1 border-[#1955CA] hover:scale-110 transition-all cursor-pointer hover:z-50 relative" src="/TeamMembers/Anubhab.jpg" />
                </AvatarGroup>
                <AvatarGroup max={12} className="sm:scale-[250%] scale-150">
                    <Avatar alt="Remy Sharp" sx={{ maxWidth: 150, maxHeight: 150 }} className="ring-1 border-[#1955CA] hover:scale-110 transition-all cursor-pointer hover:z-50 relative" src="/TeamMembers/Subho Ghosh.jpg" />
                    <Avatar alt="Remy Sharp" sx={{ maxWidth: 150, maxHeight: 150 }} className="ring-1 border-[#1955CA] hover:scale-110 transition-all cursor-pointer hover:z-50 relative" src="/TeamMembers/Kingshuk Sarkar.jpeg" />
                    <Avatar alt="Remy Sharp" sx={{ maxWidth: 150, maxHeight: 150 }} className="ring-1 border-[#1955CA] hover:scale-110 transition-all cursor-pointer hover:z-50 relative" src="/TeamMembers/Kusumita Ghose.jpg" />
                    <Avatar alt="Remy Sharp" sx={{ maxWidth: 150, maxHeight: 150 }} className="ring-1 border-[#1955CA] hover:scale-110 transition-all cursor-pointer hover:z-50 relative" src="/TeamMembers/Jyothi Swaroop.jpg" />
                    <Avatar alt="Remy Sharp" sx={{ maxWidth: 150, maxHeight: 150 }} className="ring-1 border-[#1955CA] hover:scale-110 transition-all cursor-pointer hover:z-50 relative" src="/TeamMembers/Rohit.jpg" />
                </AvatarGroup>
            </div>
            <div className='flex justify-center'>
                <Link href="/about-us" passHref>
                    <button className='btn-blue mx-auto lg:hidden'>Know More about Us</button>
                </Link>
            </div>
        </div>
    )
}

export default TeamMembersHome