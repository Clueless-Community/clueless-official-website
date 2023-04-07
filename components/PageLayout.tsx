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
      <div className="xl:px-24 relative z-0 md:px-10 px-5 overflow-x-hidden h-full pattern bg-[#1B1B1B] text-white">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
