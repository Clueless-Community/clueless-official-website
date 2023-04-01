/* eslint-disable @next/next/no-img-element */
import { Avatar } from '@mui/material';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

interface Props {
  profileImage: string;
  profileName: string;
  collegeName?: string;
  passOutYear?: number;
  githubLink?: string;
  linkedInLink?: string;
  twitterlink?: string;
}

const ProfileSummaryAdmin: React.FC<Props> = ({
  profileImage,
  profileName,
  collegeName,
  passOutYear,
  githubLink,
  linkedInLink,
  twitterlink,
}) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  return (
    <div className="flex flex-col items-center -mt-7 md:-mt-14 lg:pl-24">
      <Avatar
        src={profileImage}
        alt={profileName}
        className="ring-8 ring-white/[0.850]"
        sx={{ width: 120, height: 120 }}
      />
      <p className="mt-5 text-2xl text-center">{profileName}</p>
      {collegeName && (
        <p className="mt-2 text-sm opacity-80 text-center">{collegeName}</p>
      )}
      {passOutYear && <p className="mt-1 text-sm">{passOutYear}</p>}
      <div className="flex gap-10 mt-3">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            className=" opacity-80 "
            rel="noreferrer"
          >
            <GitHubIcon
              fontSize="large"
              className="hover:hover:text-[#1955ca] transition-transform hover:scale-90"
            />
          </a>
        )}
        {linkedInLink && (
          <a
            href={linkedInLink}
            target="_blank"
            className=" opacity-80 "
            rel="noreferrer"
          >
            <LinkedInIcon
              fontSize="large"
              className="hover:hover:text-[#1955ca] transition-transform hover:scale-90"
            />
          </a>
        )}
        {githubLink && (
          <a
            href={twitterlink}
            target="_blank"
            className=" opacity-80 "
            rel="noreferrer"
          >
            <TwitterIcon
              fontSize="large"
              className="hover:hover:text-[#1955ca] transition-transform hover:scale-90"
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileSummaryAdmin;
