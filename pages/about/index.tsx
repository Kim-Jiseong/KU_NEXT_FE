import Head from "next/head";
import React, { useState, useEffect } from "react";
import * as S from "styles/about/style";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { Tabs } from "antd";
import { ABOUT_ITEMS } from "pages/constants/about";
import Partners from "pages/about/components/partners";

const { INTRODUCTION, GREETING, HISTORY, ACHIEVEMENT, PARTNERS } = ABOUT_ITEMS;

export default function About() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const isDesktop = useMediaQuery({ minDeviceWidth: 820 });
  const isMobile = useMediaQuery({ maxWidth: 820 });
  const isTabCenter = useMediaQuery({ minWidth: 500 });

  useEffect(() => {
    AOS.init();
    if (isMobile != undefined && isDesktop != undefined) {
      setLoading(false);
    }
  }, []);
  return (
    <>
      <Head>
        <title>NEXT: ABOUT</title>
        <meta
          name="description"
          content="고려대학교 소프트웨어창업학회 NEXT ABOUT"
        />
      </Head>
      {!loading && (
        <S.Container isMobile={isMobile}>
          <Tabs
            defaultActiveKey="1"
            centered={isTabCenter}
            items={[
              {
                label: INTRODUCTION,
                key: "1",
                children:
                  "컴포넌트를 만들어서 이곳에 넣으면 됩니다. Partners 참조",
              },
              {
                label: GREETING,
                key: "2",
                children:
                  "컴포넌트를 만들어서 이곳에 넣으면 됩니다. Partners 참조",
              },
              {
                label: HISTORY,
                key: "3",
                children:
                  "컴포넌트를 만들어서 이곳에 넣으면 됩니다. Partners 참조",
              },
              {
                label: ACHIEVEMENT,
                key: "4",
                children:
                  "컴포넌트를 만들어서 이곳에 넣으면 됩니다. Partners 참조",
              },
              {
                label: PARTNERS,
                key: "5",
                children: <Partners />,
              },
            ]}
          />
        </S.Container>
      )}
    </>
  );
}
