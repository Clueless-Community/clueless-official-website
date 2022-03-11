import React from 'react'
import { motion } from 'framer-motion'
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";

const WeeklyChallenges = () => {
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
    <LocalPoliceIcon className="text-white text-6xl mb-8" />
    <h2 className="font-semibold text-4xl text-white">
      Weekly Challenges
    </h2>
    <p className="text-gray-200 mt-8">
      "Challenges hit your weakness but unlock your true strength"
      Weekly challenges are conducted at Clueless that helps you to
      test and sharpen your skills Participate, win and earn goodies!
    </p>
  </motion.div>
  )
}

export default WeeklyChallenges