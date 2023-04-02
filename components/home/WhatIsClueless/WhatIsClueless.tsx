/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';

const WhatIsClueless: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.screen.width < 600) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className="relative">
      <div className="green-gradient absolute -top-10 -right-10 hidden sm:block"></div>
      {/* <Container
        maxWidth="lg"
        className="mt-24 flex flex-col md:flex-row scale-105"
        sx={{
          width: isMobile ? '92.5%' : '95%',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid #ccc',
          gap: isMobile ? '' : '2rem',
          borderRadius: '46px',
          background: '#282E36',
          marginTop: '2rem',
        }}
      >
        <Box
          sx={{
            width: isMobile ? '100%' : '70%',
            padding: isMobile ? '2rem 1rem' : '4rem 2rem',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: '500',
              fontSize: isMobile ? '2rem' : '2.6rem',
              color: 'lightgreen',
              marginBottom: '1rem',
            }}
          >
            Clueless is a student community
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: '300',
              fontSize: isMobile ? '1.2rem' : '1.4rem',
              lineHeight: '1.8rem',
              color: 'white',
            }}
          >
            Built with the vision to encourage open-source enthusiasts! We
            provide the best resources, conducts weekly contests to test your
            skills, a guide to Open-source, and help you build projects.
          </Typography>
        </Box>
        <HeatMapImage />
      </Container>
      <div className="flex justify-end h-40 mr-72 my-4">
        <img src="/line1.png" alt="line1" />
      </div> */}
      <div className="bg-[#282E36] relative border border-[#ccc] flex flex-col lg:flex-row mb-8 justify-between items-center mt-[6rem] rounded-[2.5rem] p-8">
        <div>
          <h1 className="text-[2rem] md:text-[2.4rem] text-skin-globalGreen font-medium mb-[1rem]">
            Clueless is a student community
          </h1>
          <h1 className="font-light text-[1.2rem] md:text-[1.4rem] max-w-3xl">
            {' '}
            Built with the vision to encourage open-source enthusiasts! We
            provide the best resources, conducts weekly contests to test your
            skills, a guide to Open-source, and help you build projects.
          </h1>
        </div>
        <div>
          <HeatMapImage />
        </div>
      </div>
      <div className="flex justify-end h-40 mr-56 my-4">
        <img src="/line1.png" alt="line1" />
      </div>
    </div>
  );
};

export default WhatIsClueless;

const HeatMapImage = () => {
  return (
    <svg
      width="270"
      height="270"
      viewBox="0 0 301 228"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="26.0983" height="26.0983" rx="3" fill="#7EE787" />
      <rect
        x="121.792"
        width="26.0983"
        height="26.0983"
        rx="3"
        fill="#7EE787"
      />
      <rect
        x="30.448"
        width="26.0983"
        height="26.0983"
        rx="3"
        fill="#7EE787"
        fillOpacity="0.49"
      />
      <rect
        x="214.006"
        y="118.312"
        width="26.0983"
        height="26.0983"
        rx="3"
        fill="#AAEBB0"
      />
      <rect
        x="214.006"
        y="174.858"
        width="26.0983"
        height="25.2283"
        rx="3"
        fill="#4F855A"
      />
      <rect
        x="121.792"
        y="59.156"
        width="26.0983"
        height="25.2283"
        rx="3"
        fill="#AAEBB0"
      />
      <rect x="60.896" width="26.0983" height="26.0983" rx="3" fill="#AAEBB0" />
      <rect
        x="244.454"
        y="87.8643"
        width="26.0983"
        height="26.0983"
        rx="3"
        fill="#AAEBB0"
      />
      <rect
        x="274.902"
        y="87.8643"
        width="26.0983"
        height="26.0983"
        rx="3"
        fill="#7EE787"
      />
      <rect
        x="244.454"
        y="174.858"
        width="26.0983"
        height="25.2283"
        rx="3"
        fill="#7EE787"
      />
      <rect y="59.156" width="26.0983" height="25.2283" rx="3" fill="#AAEBB0" />
      <rect
        x="60.896"
        y="29.5781"
        width="26.0983"
        height="26.0983"
        rx="3"
        fill="#4F855A"
      />
      <rect
        x="183.558"
        y="87.8643"
        width="26.0983"
        height="26.0983"
        rx="3"
        fill="#4F855A"
      />
      <rect
        x="91.344"
        y="29.5781"
        width="26.0983"
        height="26.0983"
        rx="3"
        fill="#AAEBB0"
      />
      <rect
        x="151.37"
        y="144.41"
        width="26.0983"
        height="25.2283"
        rx="3"
        fill="#AAEBB0"
      />
      <rect
        x="183.558"
        y="201.827"
        width="26.0983"
        height="26.0983"
        rx="3"
        fill="#7EE787"
      />
      <rect
        x="151.37"
        y="174.858"
        width="26.0983"
        height="25.2283"
        rx="3"
        fill="#4F855A"
      />
      <rect
        x="214.006"
        y="87.8643"
        width="26.0983"
        height="26.0983"
        rx="3"
        fill="#7EE787"
      />
      <rect
        x="274.902"
        y="118.312"
        width="26.0983"
        height="26.0983"
        rx="3"
        fill="#7EE787"
      />
      <rect
        x="183.558"
        y="118.312"
        width="26.0983"
        height="26.0983"
        rx="3"
        fill="#7EE787"
      />
      <rect
        x="177.468"
        y="29.5781"
        width="26.0983"
        height="26.0983"
        rx="3"
        fill="#4F855A"
      />
      <rect
        x="121.792"
        y="87.8643"
        width="26.0983"
        height="26.0983"
        rx="3"
        fill="#4F855A"
      />
      <rect
        x="151.37"
        y="59.156"
        width="26.0983"
        height="25.2283"
        rx="3"
        fill="#7EE787"
      />
      <rect
        x="30.448"
        y="29.5781"
        width="26.0983"
        height="26.0983"
        rx="3"
        fill="#7EE787"
      />
      <rect
        x="207.046"
        y="29.5781"
        width="26.0983"
        height="26.0983"
        rx="3"
        fill="#AAEBB0"
      />
      <rect
        x="30.448"
        y="87.8643"
        width="26.0983"
        height="26.0983"
        rx="3"
        fill="#4F855A"
      />
    </svg>
  );
};
