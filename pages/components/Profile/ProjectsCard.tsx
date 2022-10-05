/* eslint-disable @next/next/no-img-element */
import React from 'react'
import StyledChip from '../shared/StyledChip'
import LinkIcon from '@mui/icons-material/Link';

interface Props {
    projectImage: string,
    projectName: string,
    publicLink?: string,
    gitHubLink?: string,
    projectDesc: string,
    techStacks: { 'name': string }[],
    customTitleButtons?: React.ReactNode[],
}

const ProjectsCard: React.FC<Props> = ({ projectImage, projectName, projectDesc, publicLink, gitHubLink, techStacks, customTitleButtons }) => {
    return (
        <div className='border-opacity-60 rounded-xl shadow-lg'>
            <div
                className='w-full h-[14rem] rounded-t-xl'
                style={{
                    background: `url('${projectImage}')`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }} />
            <div className="p-5 h-[21rem] flex flex-col">
                <a href={publicLink} target="_blank" rel="noreferrer" className='flex flex-row items-center flex-wrap w-[100%]'>
                    <h1 title={projectName} className='flex-auto text-2xl mr-2 font-semibold hover:underline underline-offset-2 transition-all line-clamp-1'>
                        {projectName}
                    </h1>
                    {customTitleButtons?.length
                        ? customTitleButtons
                        : <LinkIcon className=' cursor-pointer' />
                    }
                </a>
                <div className='flex gap-2 flex-row my-2 flex-wrap'>
                    {techStacks?.map((teckStack: { 'name': string }, i) => {
                        if(i >= 3) return <></>
                        return (
                            <StyledChip text={teckStack.name} size="xs" rounded='2xl'  key={i}/>
                        )
                    })}
                </div>
                <p title={projectDesc} className='my-2 font-semibold opacity-80 flex-auto w-[100%] text-ellipsis overflow-hidden line-clamp-3'>
                    {projectDesc}
                </p>
                <a
                    href={gitHubLink}
                    target="_blank"
                    rel="noreferrer"
                    className='btn-blue my-2 px-4 py-2 flex items-center shadow-blue-600 w-full text-center'
                >
                    <div className="w-full text-center">
                        View Repo
                    </div>
                </a>
            </div>
        </div>
    )
}

export default ProjectsCard