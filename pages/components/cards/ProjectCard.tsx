import { Chip } from '@mui/material'
import React from 'react'

type Props = {
  //Interface of the Prop Passed in this Compnent
  img: string;
  title: string;
  stack: string;  
};
const ProjectCard: React.FC<Props> = ({img, title, stack}) => {
  return (
    <div>
        <div className="w-[195px] max-h-[275px] sm:w-[320px] sm:max-h-[440px] shadow-md pb-2 sm:pb-4 rounded">
            <img src={img} alt="" />
            <div className="px-6 space-y-1 sm:space-y-2">
                <h1 className="sm:text-xl mt-2 sm:mt-4">{title}</h1>
                <div className="space-x-2">
                <Chip label={stack} className="h-4 sm:h-5 bg-skin-tag text-black font-Nunito font-semibold text-xs"/>
                <Chip label={stack} className="h-4 sm:h-5 bg-skin-tag text-black font-Nunito font-semibold text-xs "/>
                </div>

                <button className="btn-blue text-xs py-1 sm:py-2 w-full">View project</button>

            </div>
        </div>
    </div>
  )
}

export default ProjectCard