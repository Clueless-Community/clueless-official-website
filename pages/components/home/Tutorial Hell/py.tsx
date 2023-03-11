import React from 'react';
import { BsGithub } from "react-icons/bs";
import { motion } from 'framer-motion';
// import Typed from 'react-typed';

const Py = () => {
  return (
    <div>
      <div>
        <h1 className="text-white pl-[15px] pb-[5px] mt-[30px]">
          <span className="text-[#c92828]">import</span> matplotlib.pyplot{' '}
          <span className="text-[#c92828]">as</span> plt<br></br>
        </h1>
        <h1 className="text-white pl-[15px] pb-[5px]">
          <br></br>
        </h1>
        <h1 className="text-white pl-[15px] pb-[5px] typewriter">
          <span className="text-[#c92828]">def </span>
          <span className="text-[#bb85eb]">draw_scatterplot</span>
          (x_values, y_values):
        </h1>
      </div>
      <motion.div
        whileInView={{ y: [10, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <div className="border-l-[3px] border-blue-600 ">
          <div className="pl-[25px] bg-blue-600/[0.25]">
            <h1 className="text-white pl-[15px] pb-[5px] ">
              plt.<span className="text-[#bb85eb]">scatter</span>
              (x_values, y_values, <span className="text-[#73b2ed]">s=20</span>)
            </h1>
          </div>
          <div className=" pl-[25px] bg-blue-600/[0.25]">
            <h1 className="text-white pl-[15px] pb-[5px] ">
              plt.<span className="text-[#bb85eb]">title</span>(
              <span className="text-[#73b2ed]">&ldquo;Scatter Plot&rdquo;</span>
              )
            </h1>
          </div>
          <div className="pl-[25px] bg-blue-600/[0.25]">
            <h1 className="text-white pl-[15px] pb-[5px] ">
              plt.<span className="text-[#bb85eb]">xlabel</span>(
              <span className="text-[#73b2ed]">&ldquo;x-values&rdquo;</span>)
            </h1>
          </div>
          <div className="pl-[25px] bg-blue-600/[0.25]">
            <h1 className="text-white pl-[15px] pb-[5px] ">
              plt.<span className="text-[#bb85eb]">ylabel</span>(
              <span className="text-[#73b2ed]">&ldquo;y-values&rdquo;</span>)
            </h1>
          </div>
          <div className="pl-[25px] bg-blue-600/[0.25]">
            <h1 className="text-white pl-[15px] pb-[5px] ">
              plt.<span className="text-[#bb85eb]">show</span>()
            </h1>
          </div>
        </div>
        <div className="rounded-[5px] w-[83px] h-[37px] flex flex-row bg-blue-600">
          <BsGithub className="text-white mt-[10px] ml-[5px]" />
          <h1 className="text-white pt-[7px] ml-[2px]">Copilot</h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Py;
