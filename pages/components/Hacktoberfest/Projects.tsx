import React from 'react'
import { ProjectsHacktoberFest } from '../../../database/hacktoberfestProjects'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <div className='mb-10'>
            <h1 className='mb-20 text-center text-[24px] lg:text-3xl xl:text-4xl'>Projects 🚀</h1>
            {/* <div className='md:grid gap-10 xl:grid-cols-2 m-10 md:mx-40 flex flex-col justify-center text-center lg:text-left rounded-3xl py-[28px] px-[20px] sm:px-[91px]'> */}
            {/* <div className='md:grid md:grid-col-2 md:gap-2 md:px-0 md:py-0 md:space-y-0 flex flex-col justify-center items-center space-y-12 px-12 py-2 '> */}
            <div className='lg:grid lg:grid-cols-2 lg:gap-10 lg:justify-items-center lg:space-y-0  lg:px-0 lg:py-0 flex flex-col justify-center items-center space-y-12 px-12 py-2 '>
                {ProjectsHacktoberFest?.map((item, i) => {
                    return <ProjectCard key={i} name={item?.Name} description={item?.Description} imgSources={item?.techstack_Icon} repoUrl={item?.repoUrl} />
                })}
            </div>

        </div>
    )
}

export default Projects