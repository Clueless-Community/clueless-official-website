import React from 'react'
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Link from 'next/link';

interface ProjectProps {
    name: string,
    description: string,
    imgSources: string[],
    repoUrl: string
}

const ProjectCard: React.FC<ProjectProps> = ({ name, description, imgSources, repoUrl }) => {
    return (
        <div className='w-[575px] bg-gradient-to-r from-black via-black to-neutral-400 rounded-2xl p-[57px]'>
            <h1 className='text-white text-[24px] lg:text-3xl xl:text-4xl'>{name}</h1>
            <p className='text-white text-[14px] text-3xl'>{description}</p>
            <div className='space-x-3 flex'>
                {imgSources.map(images => {
                    return <img src={images} className='rounded-full w-5 h-5' />
                })}
            </div>
            <Link href={repoUrl} passHref>
                <button className="btn-blue bg-white text-black hover:bg-gray-100 mt-10 flex items-center mx-auto lg:mx-0">
                    <ReadMoreIcon className="mr-2" />Explore
                </button>
            </Link>
        </div>
    )
}

export default ProjectCard