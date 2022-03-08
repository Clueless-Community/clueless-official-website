import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";

const AdminpanelChallenge: React.FC = () => {
  return (
    <div>
      <div className="w-[281px] max-h-[358px] sm:w-[320px] sm:max-h-[440px] shadow-md pb-2 sm:pb-4 rounded-sm">
        <img src="/Dummy.png" alt="" />
        <div className="px-6 space-y-2">
          <h1 className="text-lg sm:text-xl mt-2 sm:mt-4">
            GitHub Challenge for Students
          </h1>
          <div className="flex justify-between">
            <div className="inline-flex item-center text-skin-hoverBlue font-semibold ">
              <StarIcon className="w-[14px] my-auto" />
              <p className="ml-2 text-xs my-auto font-semibold">500 XP</p>
            </div>
            <div className="inline-flex item-center text-skin-hoverBlue font-semibold">
              <AccessTimeIcon className="w-[14px] my-auto font-semibold" />
              <p className="ml-2 text-xs my-auto text-black">25 Mar - 27 Mar</p>
            </div>
          </div>
          <div className="flex justify-between">
            <button className="btn-red text-xs w-[105px] sm:w-[119px]">Deactivate</button>
            <button className="btn-blue text-xs w-[105px] sm:w-[119px]">Edit</button>
          </div>
          <button className="btn-blue text-xs py-2 w-full">View Submission</button>
        </div>
      </div>
    </div>
  );
};

export default AdminpanelChallenge;
