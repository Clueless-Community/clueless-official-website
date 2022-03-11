import React from "react";

type Props = {
  //Interface of the Prop Passed in this Compnent
  img: string;
  title: string;
  description: string;  
};
const ChallengeCardPrevious: React.FC<Props> = ({img, title ,description}) => {
  return (
    <div>
      <div className="w-[281px] h-[375px] sm:w-[320px] sm:h-[380px] shadow-md pb-2 sm:pb-4 rounded-2xl relative">
        <img src={img} alt="" className="w-[320px] h-[184px]"/>
          <h1 className="text-lg sm:text-xl mt-2 sm:mt-4 px-6">
            {title}
          </h1>
        <div className="px-6 absolute bottom-4">
          <p className="text-xs my-2">
            {description.substring(0,100)} 
            {/* 100 => length till we will truncate */}
          </p>
          <button className="btn-blue text-xs py-2 w-full mt-4">Participate</button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCardPrevious;
