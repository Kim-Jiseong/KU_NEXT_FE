import GlobalStyle from "styles/GlobalStyle";
import type { AppProps } from "next/app";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import thumbnail from "public/img/thumbnail.png";
import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
// import * as gtag from "libs/gtag";
import Head from "next/head";
import Header from "pages/components/header";
// export default function App({ Component, pageProps, session }: AppProps) {
export default function App({
  Component,
  pageProps,
}: AppProps<{ session: Session }>) {
  // // GA 설정 시작
  // const router = useRouter();
  // useEffect(() => {
  //   const handleRouteChange = (url: any) => {
  //     gtag.pageview(url);
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   router.events.on("hashChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //     router.events.off("hashChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);
  // // GA 설정 끝
  return (
    <SessionProvider session={pageProps.session}>
      <RecoilRoot>
        <ChakraProvider>
          <GlobalStyle>
            <Head>
              <title>NEXT</title>
            </Head>
            <Header></Header>
            {/* GA 설정 시작 */}
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            {/* <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtag.GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
      `,
            }}
          /> */}
            {/* GA 설정 끝 */}
            <Component {...pageProps} />
          </GlobalStyle>
        </ChakraProvider>
      </RecoilRoot>
    </SessionProvider>
  );
}
