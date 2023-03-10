/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import NavBar from './NavBar';

const HeroSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.screen.width < 600) {
      setIsMobile(true);
    }
  }, []);

  return (
    <>
      <NavBar />
      <Container
        maxWidth="lg"
        sx={{
          width: isMobile ? '92.5%' : '95%',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
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
      </Container>
    </>
  );
};

export default HeroSection;
