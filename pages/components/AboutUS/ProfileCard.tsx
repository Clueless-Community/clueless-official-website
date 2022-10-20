/* eslint-disable @next/next/no-img-element */
import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from "next-themes";

type Props = {
    key: string,
    img: string,
    username: string,
    tag: string,
    about: string,
    github: string,
    linkedin: string,
    twitter: string
}



const ProfileCard: React.FC<Props> = ({ key, img, username, tag, about, github, linkedin, twitter }) => {


    const { theme, setTheme } = useTheme();

    return (
        <div className={`group flex flex-col h-96 w-72 items-center justify-center py-7 px-5  hover:scale-105 duration-200  rounded-xl border-black border-opacity-30 ${theme === 'dark' ? 'bg-[#1f1f1f] hover:bg-[#47474785]' : 'bg-transperant border-2 border-dashed hover:border-solid hover:bg-[#f2f2f2ad]'}`} key={key}>
            <img className="group-hover:h-20 group-hover:w-20 w-24 h-24 my-3 rounded-full object-cover" src={img} alt="" />
            <h1 className="font-raleway font-semibold mt-2 text-center text-lg group-hover:text-base">{username}</h1>
            <h2 className="font-raleway text-[#7E7E7E] text-sm group-hover:text-xs mt-1 mb-2">{tag}</h2>
            <div className="hidden group-hover:block">
                <p className="h-20 font-nunito font-semibold text-sm mt-5 mb-4 text-center">{about}</p>
            </div>
            <div className="hidden group-hover:block">
                <div className="group-hover:mt-8 w-4/5 flex justify-center space-x-4 group-hover:justify-between">
                    <a href={github} target="_blank" rel="noreferrer" className="hover:scale-105"><GitHubIcon /></a>
                    <a href={linkedin} target="_blank" rel="noreferrer" className="hover:scale-105"><LinkedInIcon /></a>
                    <a href={twitter} target="_blank" rel="noreferrer" className="hover:scale-105"><TwitterIcon /></a>
                </div>
            </div>


        </div>
    )

}

export default ProfileCard;