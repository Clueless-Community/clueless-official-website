import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';

type Props = {
    //Interface of the Prop Passed in this Compnent
    img: string;
    title: string;
    xp: number;
    time: string
  };

const ChallengeCardActive: React.FC<Props> = ({img, title,xp, time }) => {
  return (
    <div>
        <div className="w-[281px] max-h-[358px] sm:w-[320px] sm:max-h-[440px] shadow-md pb-2 sm:pb-4 rounded">
            <img src={img} alt="" />
            <div className="px-6 space-y-1 sm:space-y-2">
                <h1 className="text-lg sm:text-xl mt-2 sm:mt-4">{title}</h1>
                <div className="flex item-center text-green-600 font-semibold">
                    <CircleIcon className="w-[14px] my-auto"/>
                    <p className="ml-2 text-xs my-auto ">Active</p>
                </div>
                <div className="flex item-center text-skin-hoverBlue font-semibold "> 
                    <StarIcon className="w-[14px] my-auto"/>
                    <p className="ml-2 text-xs my-auto">{xp} XP</p>
                </div>
                <div className="flex item-center text-skin-hoverBlue font-semibold">
                    <AccessTimeIcon className="w-[14px] my-auto"/>
                    <p className="ml-2 text-xs my-auto">{time}</p>
                </div>
                <button className="btn-blue text-xs py-2 w-full">Participate</button>

            </div>
        </div>
    </div>
  )
}

export default ChallengeCardActive