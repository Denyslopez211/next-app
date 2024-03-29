// import { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";
import { NextPage } from "next";

import "../styles/globals.css";

type NexPageWithLayout = NextPage & {
  // getLayout?: (page: ReactElement) => ReactNode;
  getLayout?: (page: JSX.Element) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NexPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  // return <Component {...pageProps} />
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
