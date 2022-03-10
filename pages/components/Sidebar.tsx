import React from "react";
type Props = {
    //Interface of the Prop Passed in this Compnent
    img: string;
    title: string;
  };

const Sidebar: React.FC<Props> = ({title,img}) => {
  return (
    <div>
      <div className="hidden lg:block">
        <div className="w-[400px] h-screen shadow-xl bg-sidebar-pattern float-left sticky text-center bg-skin-main px-10">
          <h1 className="font-extrabold text-4xl text-center mt-28 text-white">
            {title}
          </h1>
            <img src={img} alt="" className="mt-20 "/>            
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
