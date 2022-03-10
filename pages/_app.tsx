import { AppProps } from 'next/dist/shared/lib/router/router'
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return  (
  <SessionProvider session={session}>
  <Component {...pageProps} />
  </SessionProvider>
  )    
}


export default MyApp
