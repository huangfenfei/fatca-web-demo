import React from "react";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import theme from "../theme/themeConfig";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const QueryProvider = new QueryClient({
  defaultOptions:{
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  }
});
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <QueryClientProvider client={QueryProvider}>
      <ConfigProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ConfigProvider>
    </QueryClientProvider>
  );
}
