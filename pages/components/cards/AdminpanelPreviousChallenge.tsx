import React from "react";

type Props = {
  //Interface of the Prop Passed in this Compnent
  img: string;
  title: string;
  description: string;
};
const AdminpanelPreviousChallenge: React.FC<Props> = ({
  img,
  title,
  description,
}) => {
  return (
    <div>
      <div className="w-[281px] h-[378px] sm:w-[320px] sm:h-[400px] shadow-md pb-2 sm:pb-4 rounded-2xl relative">
        <img src={img} alt="" className="w-[320px] h-[184px]"/>
        <div className="px-6 space-y-2">
          <h1 className="text-lg sm:text-xl mt-2 sm:mt-4">{title}</h1>
          <div className="absolute bottom-2 pr-6">
          <p className="text-xs my-2">
            {description.substring(0, 100)}
            {/* 100 => length till we will truncate */}
          </p>
          <div className="flex justify-between space-x-2">
            <button className="btn-red text-xs w-[105px] sm:w-[119px]">
              Delete
            </button>
            <button className="btn-blue text-xs w-[105px] sm:w-[119px]">
              Edit
            </button>
          </div>
          <button className="btn-blue text-xs py-2 w-full mt-2">
            View Submission
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AdminpanelPreviousChallenge;
