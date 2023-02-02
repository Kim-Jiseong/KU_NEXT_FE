import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import * as S from "styles/join/style";
import spaceImg from "public/assets/space.jpg";
import ReactPannellum, { getConfig } from "react-pannellum";
import { FireLottie } from "pages/components/lottie/lottie";
import RocketImg from "public/assets/Rocket.png";
import { motion } from "framer-motion";
import S3upload from "pages/components/s3upload/index";
const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

export default function Join() {
  const [loading, setLoading] = useState(true);
  const [launch, setLaunch] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const isDesktop = useMediaQuery({ minDeviceWidth: 1000 });
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  const config = {
    autoRotate: 1,
    autoLoad: true,
    showControls: false,
    mouseZoom: false,
    uiText: {
      loadingLabel: "NEXT를 향해 비행중...",
      bylineLabel: "",
      iOS8WebGLError: "",
      genericWebGLError: "",
      textureSizeError: "",
    },
  };
  useEffect(() => {
    console.log("loaded");
    setLoading(false);
  }, [isMobile, isDesktop]);
  return (
    <div>
      <Head>
        <title>Join Us</title>
        <meta name="description" content="고려대학교 소프트웨어창업학회 NEXT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!loading && (
        <S.Container>
          <motion.nav
            animate={infoOpen ? "open" : "closed"}
            variants={variants}
            style={{ zIndex: "80" }}
          >
            <S.ModalContainer infoOpen={infoOpen}>
              <S3upload />
              {/* 1. 지원방식 <br />
              <br />
              <p>
                a. 아래 [지원서 다운로드] 버튼을 클릭한 후 지원서 양식 다운로드{" "}
                <br />
                b. 지원기간(2월 26일 오전 0시 ~ 3월 3일 오후 5시) 내에 지원서
                작성 <br />
                c. 아래 [지원하기] 버튼을 클릭하여 구글폼 작성 및 지원서 업로드
                *이[지원하기]버튼은 지원 기간 중에만 확인 가능합니다.
                <br /> d. 각 문항별 글자수 : 1000자 이내(공백 포함) <br />
                e. 제출한 지원서는 수정할 수 없습니다.
                <br /> f. 세종캠퍼스 학생은 지원이 불가합니다. (세종캠퍼스
                멋쟁이사자처럼 지원 가능)
                <br />
              </p>
              <br /> 2. 학회 운영비 관련 보증금 제도 안내
              <br />
              <br />
              <p>
                현 코로나 상황을 고려하여 NEXT x LIKELION은 원활한 학회 운영을
                위해 보증금 제도를 운영하고 있습니다. 새로 들어오시는 학회원들은
                10만원의 보증금을 납부하고, 해당 보증금은 해커톤 행사. 세션 장소
                대관 및 기타 학회 운영비용으로 사용될 예정입니다. 학회원들은
                모든 회계 정산 내용을 구글 드라이브에서 확인하실 수 있으며
                활동이 끝난 후 남은 금액을 1/n 하여 전액 반환해 드립니다.
              </p>
              <br /> */}
            </S.ModalContainer>
          </motion.nav>
          <S.SpaceContainer isMobile={isMobile}>
            <S.RocketContainer
              onClick={() => {
                setInfoOpen((infoOpen) => !infoOpen);
                // setLaunch(true);
                console.log(infoOpen);
              }}
              launched={launch}
            >
              <S.Rocket>
                <img src={RocketImg.src} />
              </S.Rocket>
              <S.Fire launched={launch}>
                <FireLottie />
              </S.Fire>
            </S.RocketContainer>

            <S.Planet launched={launch}>
              <img
                draggable={false}
                src="https://media-public.canva.com/Y2Ods/MAD9dPY2Ods/1/tl.png"
              />
            </S.Planet>
          </S.SpaceContainer>

          <ReactPannellum
            id="1"
            sceneId="BG"
            // haov={200}
            imageSource={spaceImg.src}
            config={config}
            style={{
              width: "100vw",
              height: "100vh",
              background: "#000000",
              cursor: "pointer",
            }}
          />
        </S.Container>
      )}
    </div>
  );
}
