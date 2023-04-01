import React from 'react';
import { motion } from 'framer-motion';
import StorageIcon from '@mui/icons-material/Storage';

const Resources = () => {
  return (
    <motion.div
      className="container h-72 flex flex-col items-start justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: 'fade',
        duration: 0.5,
      }}
    >
      <StorageIcon
        className="text-white mb-8"
        fontSize="inherit"
        sx={{ fontSize: '50px' }}
      />
      <h2 className="font-semibold text-4xl text-white">
        ClueLess ➡️ Resources
      </h2>
      <p className="text-gray-200 mt-8">
        There are too many resources available on the internet that might make
        you more confused. Clueless community filters out the best resource and
        provides it to you. Do check our resource page !
      </p>
    </motion.div>
  );
};

export default Resources;
