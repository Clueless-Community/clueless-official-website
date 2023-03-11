import React from 'react';
import NavBar from './home/HeroSection/NavBar';
import Footer from './shared/Footer';
interface Props {
  children: JSX.Element[] | JSX.Element;
}
const PageLayout = ({ children }: Props) => {
  return (
    <div>
      <NavBar />
      <div className="lg:px-40 md:px-20 px-5 overflow-x-hidden h-full backGround text-white ">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
