/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { NextPage } from 'next';
import MobileHeroSection from './MobileHeroSection';
import PcHeroSection from './PcHeroSection';

export function HeroSection() {
  return (
    <>
      <div className="block sm:hidden">
        <MobileHeroSection />
      </div>
      <div className="hidden sm:block">
        <PcHeroSection />
      </div>
    </>
  );
}

export default HeroSection;
