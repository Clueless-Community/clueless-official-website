/* eslint-disable @next/next/no-img-element */
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";


type Props = {
  //Interface of the Prop Passed in this Compnent
  img: string;
  title: string;
  xp: number;
  time: string;
};

const AdminpanelChallenge: React.FC<Props> = ({img, title, xp, time}) => {
  return (
      <div className="w-[281px] h-[378px] sm:w-[320px] sm:h-[400px] shadow-md pb-2 sm:pb-4 rounded-2xl relative">
        <img src={img} alt="" className="w-[320px] h-[184px]"/>
        <div className="px-6">
          <h1 className="text-lg sm:text-xl mt-2 sm:mt-4">
            {title}
          </h1>
          <div className="absolute bottom-2">
          <div className="flex justify-between my-2">
            <div className="inline-flex item-center text-skin-hoverBlue font-semibold ">
              <StarIcon className="w-[14px] my-auto" />
              <p className="ml-2 text-xs my-auto font-semibold">{xp} XP</p>
            </div>
            <div className="inline-flex item-center text-skin-hoverBlue font-semibold">
              <AccessTimeIcon className="w-[14px] my-auto font-semibold" />
              <p className="ml-2 text-xs my-auto text-black">{time}</p>
            </div>
          </div>
          <div className="flex justify-between space-x-2">
            <button className="btn-red text-xs w-[105px] sm:w-[119px]">Deactivate</button>
            <button className="btn-blue text-xs w-[105px] sm:w-[119px]">Edit</button>
          </div>
          <button className="btn-blue text-xs py-2 w-full mt-2">View Submission</button>
          </div>
        </div>
      </div>

  );
};

export default AdminpanelChallenge;
