import React from "react";
type Props = {
    //Interface of the Prop Passed in this Compnent
    img: string;
    title: string;
  };

const SidebarFullScreen: React.FC<Props> = ({title,img}) => {
  return (
    <>
      <div className="hidden lg:block ">
        <div className="w-[300px] h-screen shadow-xl bg-sidebar-pattern text-center bg-skin-main px-10 float-left relative">
          <h1 className="font-extrabold text-4xl text-center mt-28 text-white">
            {title}
          </h1>
          <div className="mt-[44.1vh] h-[239px]">
            <img src={img} alt="" />            
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarFullScreen;
