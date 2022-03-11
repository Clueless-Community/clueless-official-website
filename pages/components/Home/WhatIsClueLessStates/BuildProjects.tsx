import React from 'react'
import { motion } from "framer-motion";
import BuildIcon from "@mui/icons-material/Build";

const BuildProjects = () => {
  return (
    <motion.div
    className="container h-72 flex flex-col items-start justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      type: "fade",
      duration: 0.5,
    }}
  >
    <BuildIcon className="text-white text-6xl mb-8" />
    <h2 className="font-semibold text-4xl text-white">
      Build Projects🔥
    </h2>
    <p className="text-gray-200 mt-8">
      Building projects are the best way to learn and sharpen your
      skill. Clueless community helps you to build projects by
      providing resources, ideas, and guidance Build projects, submit
      and earn points
    </p>
  </motion.div>
  )
}

export default BuildProjects