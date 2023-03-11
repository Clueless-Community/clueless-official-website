import { createTheme, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/globals.css';
import PageLayout from './components/PageLayout';

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
