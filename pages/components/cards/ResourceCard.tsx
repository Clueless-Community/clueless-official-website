import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import PaidIcon from "@mui/icons-material/Paid";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

type Props = {
  //Interface of the Prop Passed in this Compnent
  img: string;
  title: string;
  category: string;
  price: string;
  specificStack: string;
  givenBY?: string;
  givenByProfile? : string
};

const ResourceCard: React.FC<Props> = ({category, price, title, specificStack, img, givenBY, givenByProfile}) => {
  return (
    <div className="w-[260px] h-[370px] p-4 flex justify-between rounded-2xl shadow-md bg-gray-50">
      <div className="relative">
        <p className="text-xs text-skin-main font-bold">{category}</p>
        <img src={img} alt="" className="h-28 mx-auto mt-3" />
        <h1 className="text-xl mt-2">{title}</h1>
        <div className="absolute bottom-0 w-full">
        <div className="flex mb-2 space-x-2">
          <div className="flex item-center text-skin-hoverBlue font-semibold ">
            <CircleIcon className="w-[14px] my-auto" />
            <p className="ml-2 my-auto font-semibold text-sm ">{specificStack}</p>
          </div>
          <div className="flex item-center text-skin-hoverBlue font-semibold">
            <PaidIcon className="w-[14px] my-auto font-semibold ml-4" />
            <p className="ml-2 my-auto text-black text-sm ">{price}</p>
          </div>
        </div>
        {givenBY && (
        <p className="text-xs mb-3">
        Provided by - <a className="text-xs underline" href={givenByProfile} target="_blank"> {givenBY}</a>
        </p>
        )}
        
        <button className="w-full btn-blue py-2 flex justify-center items-center"><RemoveRedEyeIcon className="w-[15px] my-auto"/> <span className="my-auto ml-2">View</span></button>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
