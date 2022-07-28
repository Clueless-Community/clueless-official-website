import { Button, Stack } from '@mui/material'
import React from 'react'
import StyledChip from '../shared/StyledChip'
import LinkIcon from '@mui/icons-material/Link';

interface Props {
    projectImage: string,
    projectName: string,
    publicLink?: string,
    gitHubLink?: string,
    projectDesc: string,
    techStacks: string[],
}

const ProjectsCard: React.FC<Props> = ({ projectImage, projectName, projectDesc, publicLink, gitHubLink, techStacks }) => {
    return (
        <div className='p-6 border-2 border-dashed border-black border-opacity-60 rounded-lg'>
            <div className='flex'>
                <img src={projectImage} alt="" className=' w-32 h-32 rounded-lg' />
                <div className='ml-5'>
                    <div className=' flex flex-col xl:flex-row xl:items-center  '>
                        <a href={publicLink} className='flex items-center flex-wrap'>
                            <h1 className=' text-2xl mr-2 font-semibold hover:underline underline-offset-2 transition-all'>{projectName}</h1>
                            <LinkIcon className=' cursor-pointer' />
                        </a>
                        <div className='hidden lg:block'>
                            <div className='flex gap-2 xl:ml-10'>
                                {techStacks?.map((teckStack: string) => {
                                    return (
                                        <StyledChip text={teckStack} size="xs" rounded='2xl' />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className=' hidden lg:block '>
                        <p className='mt-5 font-semibold opacity-80'>{projectDesc}</p>
                        <a href={gitHubLink} target="_blank">
                            <button className='btn-blue mt-5 flex items-center px-4 py-2 shadow-blue-600'>View Repo</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className=' block lg:hidden '>
                <Stack direction="row" spacing={2} className="mt-5" alignItems="center" sx={{ 'flexWrap': 'wrap' }}>
                            {techStacks?.map((teckStack: string) => {
                                return (
                                    <StyledChip text={teckStack} size="xs" rounded='2xl' />
                                )
                            })}
                </Stack>
                <p className='mt-5 font-semibold opacity-80'>{projectDesc}</p>
                <a href={gitHubLink} target="_blank">
                    <button className='btn-blue mt-5 flex items-center px-4 py-2 shadow-blue-600'>View Repo</button>
                </a>
            </div>
        </div>
    )
}

export default ProjectsCard