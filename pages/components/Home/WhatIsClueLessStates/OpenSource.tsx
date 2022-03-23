import React from 'react'
import { motion } from 'framer-motion'
import GitHubIcon from "@mui/icons-material/GitHub";

const OpenSource = () => {
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
            <GitHubIcon className="text-white mb-8" fontSize='inherit'sx={{fontSize: "50px"}}/>
            <h2 className="font-semibold text-4xl text-white">
                ClueLess ❤️ Open-source
            </h2>
            <p className="text-gray-200 mt-8">
                “Open source is about collaborating, not competing.” Following
                this ideology, we the Clueless Community help you to dive into
                the world of Open-Source ! Happy Contributing ...
            </p>
        </motion.div>
    )
}

export default OpenSource