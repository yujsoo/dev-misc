import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { ReactNode } from "react"
import { NextPage } from "next";

type NextPageWithLayout = NextPage & { //NextPage : 넥스트에서 기본으로 제공되는 컴포넌트 페이지 기본 타입
  getLayout? : (page:ReactNode) => ReactNode
}

export default function App({ 
  Component, pageProps 
}: AppProps & {
  Component: NextPageWithLayout  
}) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page)

  return (
    <GlobalLayout>
        {getLayout(<Component {...pageProps}/>)}
    </GlobalLayout>
  )
}
