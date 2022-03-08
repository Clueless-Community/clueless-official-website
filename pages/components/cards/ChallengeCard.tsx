import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';

const ChallengeCard = () => {
  return (
    <div>
        <div className="w-[195px] max-h-[275px] sm:w-[320px] sm:max-h-[440px] shadow-md pb-2 sm:pb-4 rounded-sm">
            <img src="/Dummy.png" alt="" />
            <div className="px-6 space-y-1 sm:space-y-2">
                <h1 className="sm:text-xl mt-2 sm:mt-4">GitHub Challenge for Students</h1>
                <div className="flex item-center text-green-600 font-semibold">
                    <CircleIcon className="w-[10px] h-[10px] sm:w-[14px] my-auto"/>
                    <p className="ml-2 text-xs ">Active</p>
                </div>
                <div className="flex item-center text-skin-hoverBlue font-semibold "> 
                    <StarIcon className="w-[10px] h-[10px] sm:w-[14px] my-auto"/>
                    <p className="ml-2 text-xs">500 XP</p>
                </div>
                <div className="flex item-center text-skin-hoverBlue font-semibold">
                    <AccessTimeIcon className="w-[10px] h-[10px] sm:w-[14px] my-auto"/>
                    <p className="ml-2 text-xs">25 Mar - 27 Mar</p>
                </div>
                <button className="btn-blue text-xs py-1 sm:py-2 w-full">Participate</button>

            </div>
        </div>
    </div>
  )
}

export default ChallengeCard