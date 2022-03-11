import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import PaidIcon from "@mui/icons-material/Paid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

type Props = {
  //Interface of the Prop Passed in this Compnent
  img: string;
  title: string;
  specificStack: string;
  category: string;
  price: string;
};

const ResourceCardAdmin: React.FC<Props> = ({
  img,
  title,
  specificStack,
  category,
  price,
}) => {
  return (
    <div className="w-[189px] h-[294px] sm:w-[672px] sm:h-[209px] p-4 flex justify-between rounded-2xl shadow-md">
      <div className="sm:w-1/2 relative">
        <p className="text-xs text-skin-main font-bold">{category}</p>
        <h1 className="text-xl mt-2">{title}</h1>
        <div className="absolute bottom-2">
          <div className="flex justify-between sm:w-2/3 my-2">
            <div className="inline-flex item-center text-skin-hoverBlue font-semibold ">
              <CircleIcon className="w-[14px] my-auto" />

              <p className="ml-2 my-auto font-semibold">{specificStack}</p>
            </div>
            <div className="inline-flex item-center text-skin-hoverBlue font-semibold">
              <PaidIcon className="w-[14px] my-auto font-semibold" />
              <p className="ml-2 my-auto text-black">{price}</p>
            </div>
          </div>
          <div className="sm:space-x-4 sm:w-3/4 sm:flex">
            <button className="w-full sm:w-inherit btn-blue py-2 mb-2 sm:mb-0 sm:flex justify-between">
              <EditIcon className="w-[11px]" />{" "}
              <span className="my-auto ml-2">Edit</span>
            </button>
            <button className="w-full sm:w-inherit btn-red py-2 sm:flex justify-between">
              <DeleteOutlineIcon className="w-[11px]" />{" "}
              <span className="my-auto ml-2">Delete</span>
            </button>
          </div>
        </div>
      </div>
      <img src={img} alt="" className="w-[228px] h-[166px] hidden sm:block" />
    </div>
  );
};

export default ResourceCardAdmin;
