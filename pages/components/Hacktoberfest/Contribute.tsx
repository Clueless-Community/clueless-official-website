import Link from "next/link";
import React from "react";

const Contribute = () => {
  return (
    <div>
      <div className="justify-center items-center space-x-5 space-y-3 md:grid lg:grid-cols-2 mx-10 md:mx-40 flex flex-col text-center lg:text-left py-[28px] px-[20px] sm:px-[91px]">
        <div className="space-y-7">
          <h1 className="text-[24px] lg:text-3xl xl:text-4xl">
            How to Contribute ❓🤔
          </h1>
          <p className="text-[14px] ">
            You will get the idea of how to contribute by visiting the
            contribution.md file of each repo.
          </p>
          <a
            href="https://github.com/Clueless-Community/clueless-official-website/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn-blue mt-6">Read More</button>
          </a>
        </div>
        <Link href="#" passHref>
          <img src="/contribute.png" className="mx-auto " />
        </Link>
      </div>
    </div>
  );
};

export default Contribute;
