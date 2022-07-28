import React, { useState } from "react";
import { motion } from "framer-motion";

const OurVision: React.FC = () => {
    return (
        <>
            <div className="md:grid lg:grid-cols-2 md:mx-40 lg:mt-64 mt-32 flex md:flex-col flex-col-reverse text-center lg:text-left sm:mb-32">
                <div className="md:bg-skin-main lg:rounded-l-3xl md:rounded-t-3xl lg:rounded-tr-none md:py-20 transition-all duration-500 relative">
                    <div className="xl:px-24 md:px-10 flex flex-col items-center w-11/12 mx-auto my-auto">
                        <motion.div
                            className="container flex flex-col justify-center h-[250px]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                type: "fade",
                                duration: 0.5,
                            }}
                        >
                            <h2 className="font-semibold text-4xl text-white ease-in-out transition-all duration-1000 hidden md:block">
                                Our Vision
                            </h2>
                            <p className="md:text-gray-200 md:mt-8">
                                Internet is flooded with so many resources that can make one confused and clueless. So we provide the best, filtered, and curated resources like YouTube videos, GitHub repositories, websites, cheatsheets, etc!
                            </p>
                        </motion.div>
                    </div>
                </div>
                <div className="md:bg-[#F2F2F2] lg:rounded-r-3xl md:rounded-b-3xl lg:rounded-bl-none md:pt-20 pb-10 relative md:border-2 border-dashed border-black border-opacity-30 lg:border-l-0 lg:border-t-2 md:border-t-0">
                    <h2 className="font-semibold text-4xl mb-16 md:hidden">
                        Our Vision
                    </h2>
                    <div className="flex flex-col justify-center h-full">
                        <img src="/our-vision-image.png" alt="" className="mx-auto sm:w-96 w-64" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurVision;
