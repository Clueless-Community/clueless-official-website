import React from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

type Props = {
  //Interface of the Prop Passed in this Compnent
  img: string;
  title: string;
  stack: string;
};
const ChallengeCardAdmin: React.FC<Props> = ({ img, title, stack }) => {
  return (
    <div>
      <div className="w-[281px] max-h-[313px] sm:w-[320px] sm:max-h-[440px] shadow-md pb-2 sm:pb-4 rounded">
        <img src={img} alt="" />
        <div className="px-6">
          <h1 className="text-lg sm:text-xl mt-2 sm:mt-4 font-semibold">
            {title}
          </h1>
          <div className="flex item-center text-skin-hoverBlue font-semibold mb-4 mt-2">
            <LocalOfferIcon className="w-[10px] h-[10px] sm:w-[14px] my-auto" />
            <p className="ml-2 text-xs font-semibold">{stack}</p>
          </div>
          <div className="flex justify-between">
            <button className="btn-blue text-xs w-[105px] sm:w-[119px]">
              Edit
            </button>
            <button className="btn-red text-xs w-[105px] sm:w-[119px]">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCardAdmin;
