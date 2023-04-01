/* eslint-disable @next/next/no-img-element */
import React from 'react';

const icons = [
  { name: '/icons/icon1.svg', url: 'https://flutter.dev/' },
  { name: '/icons/icon2.svg', url: 'https://kubernetes.io/' },
  { name: '/icons/icon3.svg', url: 'https://redux.js.org/' },
  { name: '/icons/icon4.svg', url: 'https://ethereum.org/en/' },
  { name: '/icons/icon5.svg', url: 'https://reactjs.org/' },
  { name: '/icons/icon6.svg', url: 'https://code.visualstudio.com/' },
  { name: '/icons/icon7.svg', url: 'https://www.linux.org/' },
  { name: '/icons/icon8.svg', url: 'https://d3js.org/' },
];

const TeachStackLine = () => {
  return (
    <div className="relative md:mx-40 mx-auto">
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-center gap-[18px] py-8">
          {icons.slice(0, 4).map((icon, i) => {
            return (
              <a href={icon.url} key={i} target="blank">
                <img src={icon.name} alt={icon.url} key={i} />
              </a>
            );
          })}
          <a
            href="https://github.com/"
            target="blank"
            className="w-[200px] h-[150px] flex flex-row justify-center items-center"
          >
            <img
              src="/icons/iconmiddle.svg"
              alt="github"
              className="w-[150px] col-span-2 dark:invert dark:brightness-0"
            />
          </a>
          {icons.slice(4, 8).map((icon, i) => {
            return (
              <a href={icon.url} key={i} target="blank">
                <img src={icon.name} alt={icon.url} key={i} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeachStackLine;
