import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";

type Props = {
  //Interface of the Prop Passed in this Compnent
  img: string;
  title: string;
  xp: number;
  time: string;
};

const ChallengeCardActive: React.FC<Props> = ({ img, title, xp, time }) => {
  return (
    <div>
      <div className="w-[281px] h-[410px] sm:w-[370px] sm:h-[420px] shadow-md pb-2 sm:pb-4 rounded-2xl relative">
        <img src={img} alt="" className="w-[370px] h-[184px] rounded-t-xl" />

        <h1 className="text-lg sm:text-xl mt-2 sm:mt-4 px-6">{title}</h1>
        <div className="px-6 absolute bottom-4">
          <div className="flex item-center text-green-600 font-semibold mt-1">
            <CircleIcon className="w-[14px] my-auto" />
            <p className="ml-2 text-xs my-auto ">Active</p>
          </div>
          <div className="flex item-center text-skin-hoverBlue font-semibold mt-1 ">
            <StarIcon className="w-[14px] my-auto" />
            <p className="ml-2 text-xs my-auto">{xp} XP</p>
          </div>
          <div className="flex item-center text-skin-hoverBlue font-semibold mt-1">
            <AccessTimeIcon className="w-[14px] my-auto" />
            <p className="ml-2 text-xs my-auto">{time}</p>
          </div>
          <button className="btn-blue py-2 w-full mt-4">
            Participate
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCardActive;
