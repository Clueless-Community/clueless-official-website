import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { AdminProvider } from "../context/AdminLogInContext";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <AdminProvider>
        <ThemeProvider attribute="class" enableSystem={false}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AdminProvider>
    </SessionProvider>
  );
}

export default MyApp;
