/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
type cardProps = {
  name: string;
  photo_url: string;
  designation: string;
  linkedin_url: string;
  github_url: string;
  twitter_url: string;
};
const Card: React.FC<cardProps> = ({
  name,
  photo_url,
  designation,
  linkedin_url,
  github_url,
  twitter_url,
}) => {
  return (
    <div className="rounded-full h-48 w-48 bg-green-400 relative">
      <img
        src={photo_url}
        className="h-48 w-48 object-cover p-1 rounded-full"
        alt=""
      />
      <div className="absolute top-40 left-6 rounded-full">
        <div className="flex flex-col justify-center text-center bg-gray-800 w-36">
          <h1>{name}</h1>
          <h1 className="text-[12px] text-gray-400">{designation}</h1>
        </div>
        <div className="flex bg-green-400 justify-center gap-x-3 py-1">
          <Link
            href={github_url}
            className="text-black text-lg"
            target="_blank"
          >
            <AiFillGithub />
          </Link>
          <Link
            href={linkedin_url}
            className="text-black text-lg"
            target="_blank"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href={twitter_url}
            className="text-black text-lg"
            target="_blank"
          >
            <AiOutlineTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
