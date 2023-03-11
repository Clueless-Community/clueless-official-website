import React from "react";
interface Props {
  children: JSX.Element[] | JSX.Element;
}
const PageLayout = ({ children }: Props) => {
  return (
      <div className="lg:px-40 md:px-20 px-5 overflow-x-hidden h-full backGround text-white ">
        {children}
      </div>
  );
};

export default PageLayout;
