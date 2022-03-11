import React from "react";
type Props = {
    //Interface of the Prop Passed in this Compnent
    img: string;
    title: string;
  };

const Sidebar: React.FC<Props> = ({title,img}) => {
  return (
    <>
      <div className="hidden lg:block ">
        <div className="w-[300px] h-full shadow-xl bg-sidebar-pattern text-center bg-skin-main px-10 float-left relative">
          <h1 className="font-extrabold text-4xl text-center mt-28 text-white">
            {title}
          </h1>
            <img src={img} alt="" className="mt-[44.1vh]"/>            
        </div>
      </div>
    </>
  );
};

export default Sidebar;
