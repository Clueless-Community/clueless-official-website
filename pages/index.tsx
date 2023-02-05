import React from "react";

const Home = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-900 flex-col">
      <h1 className="text-5xl font-semibold text-white">
        Hello welcome to Tailwind based Next.js
      </h1>
      <a
        href="https://github.com/Rajdip019"
        target="_blank"
        className=" text-gray-200 mt-10 "
        rel="noreferrer"
      >
        - by Rajdeep Sengupta
      </a>
    </div>
  );
};

export default Home;

