import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

type Props = {
    // props interface for this components
    key: string,
    img: string,
    username: string,
    tag: string,
    about: string,
    github: string,
    linkedin: string,
    twitter: string
}


const ProfileCard: React.FC<Props> = ({key, img, username, tag, about, github, linkedin, twitter}) =>{
    return(
        <div className="flex flex-col h-72 w-60 items-center py-7 px-5 rounded-lg shadow-primary" key={key}>
            <img className="h-16 w-16 my-3 rounded-full" src={img} alt="" />
            <h1 className="font-raleway font-semibold text-sm mt-2 text-center">{username}</h1>
            <h2 className="font-raleway text-[#7E7E7E] text-xs mt-1 mb-2">{tag}</h2>
            <p className=" font-nunito font-semibold text-[10px] text-center">{about}</p>
            <div className="mt-5 w-4/5 flex justify-between">
                <a href={github} target="_blank"><GitHubIcon/></a>
                <a href={linkedin} target="_blank"><LinkedInIcon/></a>
                <a href={twitter} target="_blank"><TwitterIcon/></a>
            </div>
        </div>
    )

}

export default ProfileCard;