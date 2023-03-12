import { createTheme, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/dist/shared/lib/router/router';
import PageLayout from '../components/PageLayout';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    typography: {
      fontFamily: ['DM Sans', 'sans-serif'].join(','),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ThemeProvider>
  );
}
