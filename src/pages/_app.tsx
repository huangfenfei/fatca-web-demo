import React from "react";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import themeConfig from "../configs/ThemeConfig";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from '../configs/AuthConfig';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const QueryProvider = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  }
});
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const msalInstance = new PublicClientApplication(msalConfig);
  console.log(msalConfig);
  return (
    <MsalProvider instance={msalInstance}>
      <QueryClientProvider client={QueryProvider}>
        <ConfigProvider theme={themeConfig}>
          {getLayout(<Component {...pageProps} />)}
        </ConfigProvider>
      </QueryClientProvider>
    </MsalProvider>
  );
}
