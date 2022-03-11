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
};

const ResourceCard: React.FC<Props> = ({category, price, title, specificStack, img}) => {
  return (
    <div className="w-[189px] h-[264px] sm:w-[672px] sm:h-[209px] p-4 flex justify-between rounded-2xl shadow-md">
      <div className="sm:w-1/2 relative">
        <p className="text-xs text-skin-main font-bold">{category}</p>
        <h1 className="text-xl mt-2">{title}</h1>
        <div className="absolute bottom-0">
        <div className="flex justify-between mb-2 space-x-2">
          <div className="inline-flex item-center text-skin-hoverBlue font-semibold ">
            <CircleIcon className="w-[14px] my-auto" />

            <p className="ml-2 my-auto font-semibold text-sm sm:text-lg">{specificStack}</p>
          </div>
          <div className="inline-flex item-center text-skin-hoverBlue font-semibold">
            <PaidIcon className="w-[14px] my-auto font-semibold" />
            <p className="ml-2 my-auto text-black text-sm sm:text-lg">{price}</p>
          </div>
        </div>
        <button className="w-full sm:w-inherit btn-blue py-2"><RemoveRedEyeIcon className="w-[15px] my-auto"/> <span className="my-auto ml-2">View</span></button>
        </div>
      </div>
      <img src={img} alt="" className="w-[228px] h-[166px] hidden sm:block"/>
    </div>
  );
};

export default ResourceCard;
