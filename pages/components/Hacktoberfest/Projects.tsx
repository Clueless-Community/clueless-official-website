import React from 'react'
import { ProjectsHacktoberFest } from '../../../database/hacktoberfestProjects'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <div>
            <h1 className='text-center text-[24px] lg:text-3xl xl:text-4xl'>Projects 🚀</h1>
            <div className='md:grid gap-10 xl:grid-cols-2 m-10 md:mx-40 flex flex-col justify-center text-center lg:text-left rounded-3xl py-[28px] px-[20px] sm:px-[91px]'>
                {ProjectsHacktoberFest?.map((item, i) => {
                    return <ProjectCard key={i} name={item?.Name} description={item?.Description} imgSources={item?.techstack_Icon} repoUrl={item?.repoUrl} />
                })}
            </div>

        </div>
    )
}

export default Projects