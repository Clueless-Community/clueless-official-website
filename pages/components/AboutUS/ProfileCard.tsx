/* eslint-disable @next/next/no-img-element */
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

type Props = {
  key: string;
  img: string;
  username: string;
  tag: string;
  about: string;
  github: string;
  linkedin: string;
  twitter: string;
};

const ProfileCard: React.FC<Props> = ({
  key,
  img,
  username,
  tag,
  about,
  github,
  linkedin,
  twitter,
}) => {
  return (
    <div
      className="flex flex-col h-96 w-72 items-center py-7 px-5 border-2 border-dashed rounded-xl border-black dark:border-white border-opacity-30 hover:scale-110 ease-in-out duration-300"
      key={key}
    >
      <img className="h-20 w-20 my-3 rounded-full" src={img} alt="" />
      <h1 className="font-raleway font-semibold mt-2 text-center">
        {username}
      </h1>
      <h2 className="font-raleway text-[#7E7E7E] text-xs mt-1 mb-2">{tag}</h2>
      <p className="h-20 font-nunito font-semibold text-sm mt-5 mb-4 text-center">
        {about}
      </p>
      <div className="mt-8 w-4/5 flex justify-between">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#1955CA]"
        >
          <GitHubIcon />
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#1955CA]"
        >
          <LinkedInIcon />
        </a>
        <a
          href={twitter}
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#1955CA]"
        >
          <TwitterIcon />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
