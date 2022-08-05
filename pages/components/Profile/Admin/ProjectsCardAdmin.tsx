/* eslint-disable @next/next/no-img-element */
import { Button, Stack } from '@mui/material'
import React from 'react'
import StyledChip from '../../shared/StyledChip'
import LinkIcon from '@mui/icons-material/Link';
import EditProject from './EditProject';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../../lib/clientApp';
import { useSession } from "next-auth/react";


interface Props {
    projectId: string
    projectImage: string,
    projectName: string,
    publicLink?: string,
    gitHubLink?: string,
    projectDesc: string,
    techStacks: { 'name': string }[],
    handleProjectFetch: () => Promise<void>
}


const ProjectsCardAdmin: React.FC<Props> = ({ projectId, projectImage, projectName, projectDesc, publicLink, gitHubLink, techStacks, handleProjectFetch }) => {
    const { data: session } = useSession();
    const uid = session?.user?.id;
    
    const deleteProject = async () => {
        if(uid){
            await deleteDoc(doc(db, `users/${uid}/projects`, projectId));
        }else{
            return null
        }
    }

    return (
        <div className='p-6 border-2 border-dashed border-black border-opacity-60 rounded-lg w-full' key={projectId}>
            <div className='flex w-full justify-between items-start'>
                <div className=' flex'>
                    <img src={projectImage} alt="" className=' w-32 h-32 rounded-lg' />
                    <div className='ml-5'>
                        <div className=' flex justify-between flex-wrap w-full'>
                            <div className=' flex flex-col xl:flex-row xl:items-center '>
                                <a href={publicLink} className='flex items-center flex-wrap'>
                                    <h1 className=' text-2xl mr-2 font-semibold hover:underline underline-offset-2 transition-all'>{projectName}</h1>
                                    <LinkIcon className=' cursor-pointer' />
                                </a>
                                <div className='hidden lg:block'>
                                    <div className='flex gap-2 xl:ml-10'>
                                        {techStacks?.map((teckStack: { 'name': string }, i) => {
                                            return (
                                                <StyledChip text={teckStack.name} size="xs" rounded='2xl' key={i} />
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' hidden lg:block '>
                            <p className='mt-5 font-semibold opacity-80'>{projectDesc}</p>
                            <a href={gitHubLink} target="_blank" rel="noreferrer">
                                <button className='btn-blue mt-5 flex items-center px-4 py-2 shadow-blue-600'>View Repo</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className=' flex items-center'>
                <button className='ml-3 bg-red-500 text-white p-1 hover:bg-red-600 rounded-full w-9 h-9 flex items-center justify-center transition-all' onClick={async() => {await deleteProject(); handleProjectFetch()}}><DeleteIcon /></button>                        
                <EditProject
                    projectId={projectId}
                    projectName={projectName}
                    projectImage={projectImage}
                    projectDesc={projectDesc}
                    gitHubLink={gitHubLink}
                    publicLink={publicLink}
                    techStacks={techStacks}
                    handleProjectFetch={handleProjectFetch}
                />
                </div>
            </div>
            <div className=' block lg:hidden '>
                <Stack direction="row" spacing={2} className="mt-5" alignItems="center" sx={{ 'flexWrap': 'wrap' }}>
                    {techStacks?.map((teckStack: { 'name': string }, i) => {
                        return (
                            <StyledChip text={teckStack.name} size="xs" rounded='2xl' key={i}/>
                        )
                    })}
                </Stack>
                <p className='mt-5 font-semibold opacity-80'>{projectDesc}</p>
                <a href={gitHubLink} target="_blank" rel="noreferrer">
                    <button className='btn-blue mt-5 flex items-center px-4 py-2 shadow-blue-600'>View Repo</button>
                </a>
            </div>
        </div>
    )
}

export default ProjectsCardAdmin