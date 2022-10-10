/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import Link from "next/link";

interface ProjectProps {
  name: string;
  description: string;
  imgSources: string[];
  repoUrl: string;
}


const ProjectCard: React.FC<ProjectProps> = ({ name, description, imgSources, repoUrl }) => {
    return (
        <div className='md:w-[475px] bg-gradient-to-r from-black via-black to-neutral-400 rounded-2xl p-[57px]'>
            <h1 className='text-white text-[24px] lg:text-3xl'>{name}</h1>
            <div className='space-y-2'>
                <p className='text-white text-sm mt-3'>{description}</p>
                <div className='space-x-3 flex justify-center md:justify-center lg:justify-start'>
                    {imgSources?.map((image, i) => {
                        return <img key={i} src={image} className='rounded-full w-5 h-5' />
                    })}
                </div>
            </div>
            <Link href={`${repoUrl}`} passHref>
                <button className="btn-blue bg-white text-black hover:bg-gray-100 mt-10 flex items-center mx-auto lg:mx-0" target="_blank">
                    <ReadMoreIcon className="mr-2" />Explore
                </button>
            </Link>

const ProjectCard: React.FC<ProjectProps> = ({
  name,
  description,
  imgSources,
  repoUrl,
}) => {
  return (
    <div className="md:w-[475px] xl:w-[350px] bg-gradient-to-r from-black via-black to-neutral-400 rounded-2xl p-[57px]">
      <h1 className="text-white text-[24px] lg:text-3xl">{name}</h1>
      <div className="space-y-2">
        <p className="text-white text-sm mt-3">{description}</p>
        <div className="space-x-3 flex justify-center md:justify-center lg:justify-start">
          {imgSources?.map((image, i) => {
            return <img key={i} src={image} className="rounded-full w-5 h-5" />;
          })}

        </div>
      </div>
      <Link href={`${repoUrl}`} passHref>
        <button className="btn-blue bg-white text-black hover:bg-gray-100 mt-10 flex items-center mx-auto lg:mx-0">
          <ReadMoreIcon className="mr-2" />
          Explore
        </button>
      </Link>
    </div>
  );
};

export default ProjectCard;
