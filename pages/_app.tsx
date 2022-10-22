import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { AdminProvider } from "../context/AdminLogInContext";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <AdminProvider>
          <Component {...pageProps} />
      </AdminProvider>
    </SessionProvider>
  );
}

export default MyApp;
