import React from 'react'
import { ProjectsHacktoberFest } from '../../../database/hacktoberfestProjects'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <div>
            <h1 className='text-center text-[24px] lg:text-3xl xl:text-4xl'>Projects 🚀</h1>
            <div>
                {ProjectsHacktoberFest.map(item => {
                    return <ProjectCard name={item.Name} description={item.Description} imgSources={item.techstack_Icon} repoUrl={item.repoUrl} />
                })}
            </div>

        </div>
    )
}

export default Projects