/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

interface ProjectProps {
  name: string;
  description: string;
  imgSources: string[];
  repoUrl: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ name, description, imgSources, repoUrl }) => {
  return (
    // <div className="md:w-[475px] bg-gradient-to-r from-black via-black to-neutral-400 rounded-2xl p-[57px]">
    <div className="md:w-[475px] tracking-tight bg-black shadow-lg rounded-2xl p-[57px] space-y-12 md:h-[500px] h-auto hover:cursor-pointer hover:shadow-2xl transition hover:ease-in-out">
      <h1 className="text-white text-[24px] lg:text-3xl">{name}</h1>
      <div className="space-y-12">
        <p className="text-white text-md md:text-lg md:font-light	">{description}</p>
        <div className="space-x-3 flex justify-start md:justify-center lg:justify-center">
          {imgSources?.map((image, i) => {
            return <img key={i} src={image} className="rounded-full w-10 h-10 object-contain" />;
          })}
        </div>
      </div>
      <Link href={`${repoUrl}`} passHref>
        <a target="_blank" className="flex justify-center items-center mt-10 px-12 py-2 md:py-4 bg-gray-200 text-black font-bold text-xl md:text-2xl hover:bg-gray-100 hover:scale-105 hover:ease-in-out transition hover:duration-300 rounded-2xl">
          <button className="flex justify-center items-center">
            {/* <img src="/icons/explore.png" className="w-9 h-9 object-contain mr-2" /> */}
            <ReadMoreIcon className="mr-2" />

            Explore
          </button>
        </a>
      </Link>
    </div>
  );
};

export default ProjectCard;
