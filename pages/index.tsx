import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import UpcomingEvents from './components/home/events/UpcomingEvents';
import WorldOfOpenSource from './components/home/WorldOfOpenSource/WorldOfOpenSource';
import Footer from './components/shared/Footer';
import Copilot from './components/home/Copilot/Copilot';
import { createMuiTheme, ThemeProvider } from '@mui/material';

const Home: NextPage = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'DM Sans',
        'sans-serif'
      ].join(','),
    }
  });
  return (
    <ThemeProvider theme={theme} >
      <Head>
        <title>ClueLess</title>
      </Head>
      <Copilot />
      <WorldOfOpenSource />
      <UpcomingEvents />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
