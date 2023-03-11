import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/globals.css';
import PageLayout from './components/PageLayout';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>)
}
