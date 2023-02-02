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
import { useRecoilState } from "recoil";
import { joinModalOpen, isLaunched } from "pages/constants/atoms";
import Text from "public/assets/homeMainSmallLogo.png";
import Logo from "public/assets/logo.png";
const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

export default function Join() {
  const [loading, setLoading] = useState(true);
  const [launch, setLaunch] = useRecoilState(isLaunched);
  const [modalPage, setModalPage] = useState(1);
  const [modalOpen, setModalOpen] = useRecoilState(joinModalOpen);
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
  useEffect(() => {
    return () => {
      setLaunch(false);
      setModalOpen(false);
    };
  }, []);
  useEffect(() => {
    return () => {
      setModalPage(1);
    };
  }, [modalOpen]);
  return (
    <div>
      <Head>
        <title>Join Us</title>
        <meta name="description" content="고려대학교 소프트웨어창업학회 NEXT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!loading && (
        <S.Container>
          {!launch && (
            <S.TitleWrapper isMobile={isMobile}>
              <img src={Text.src} />
              <img src={Logo.src} />
              <p>11기 모집</p>
            </S.TitleWrapper>
          )}
          {launch && (
            <S.TitleWrapper isMobile={isMobile}>
              <p>지원해주셔서 감사합니다</p>
              <br />
              <p style={{ fontSize: "1.8rem" }}>
                NEXT에서 세상을 바꿔나갈 여러분의 도전을 응원합니다!
              </p>
            </S.TitleWrapper>
          )}
          <motion.div
            animate={modalOpen ? "open" : "closed"}
            variants={variants}
            style={{ zIndex: "10", opacity: "0" }}
          >
            <S.ModalContainer infoOpen={modalOpen}>
              <S.CloseBtnWrapper>
                <div onClick={() => setModalOpen(false)}>X</div>
              </S.CloseBtnWrapper>
              <S.ModalContentWrapper>
                {modalPage == 1 && (
                  <S.InfoModal>
                    <h2>11기 지원 안내</h2>
                    <br />
                    <p>
                      <span>1. 지원방식</span>
                      <br /> a. 아래 <mark>[지원서 다운로드]</mark> 버튼을
                      클릭한 후 지원서 양식 다운로드 <br />
                      b. 지원기간<b>(2월 6일 오전 0시 ~ 2월 15일 오후 5시)</b>
                      내에 지원서 작성 <br />
                      c. 아래 <mark>[지원하기]</mark> 버튼을 클릭하여 지원서
                      업로드
                      <br /> <b>**</b>[지원하기] 버튼은 지원 기간 중에만 확인
                      가능합니다.
                      <br /> d. 각 문항별 글자수 : <b>1000자 이내</b>(공백 포함){" "}
                      <br />
                      e. 제출한 지원서는 수정할 수 없습니다.
                      <br /> f. 세종캠퍼스 학생은 지원이 불가합니다. (세종캠퍼스
                      멋쟁이사자처럼 지원 가능) <br />
                      <br />
                      <span>2. 면접 촬영 및 개인정보 수집 안내</span>
                      <br /> 면접 평가는 모두 대면으로 이뤄집니다. <br /> 공정한
                      면접 평가를 위해 면접 내용을 촬영 및 수집할 예정입니다.
                      <br />
                      촬영한 면접영상 및 개인정보는 선발과정에서만 활용되며,
                      리크루팅 이후 즉시 폐기될 예정입니다. <br /> <br />
                      <span>3. 학회 보증금 제도 안내</span> <br />
                      원활한 학회 운영을 위해 보증금 제도를 운영하고 있습니다.
                      <br />
                      새로 들어오시는 학회원들은 <b>10만원</b>의 보증금을
                      납부하고, 해당 보증금은 학회 운영비용으로만 사용될
                      예정입니다.
                      <br />
                      학회원들은 모든 회계 정산 내용을 구글 드라이브에서
                      확인하실 수 있으며 활동이 끝난 후 남은 금액을 1/n 하여
                      전액 반환해 드립니다. <br />
                      <br />
                      <span>4. 오리엔테이션 필참</span>
                      <br />
                      최종 합격 이후 <b>3월 5일</b>에 진행되는 OT는 필수
                      참여입니다. 원활한 학회 운영을 위해, OT를 고려하여 개인
                      일정을 조정해주시면 감사하겠습니다
                    </p>
                    <S.NextBtnWrapper isMobile={isMobile}>
                      <button
                        onClick={() =>
                          (location.href =
                            "https://next-recruit.s3.ap-northeast-2.amazonaws.com/assets/NEXT_11%EA%B8%B0_%EC%A7%80%EC%9B%90%EC%84%9C_%EC%96%91%EC%8B%9D.docx")
                        }
                      >
                        지원서 다운로드
                      </button>
                      <button onClick={() => setModalPage(2)}>지원하기</button>
                    </S.NextBtnWrapper>
                  </S.InfoModal>
                )}
                {modalPage == 2 && <S3upload />}
              </S.ModalContentWrapper>
            </S.ModalContainer>
          </motion.div>
          <S.SpaceContainer isMobile={isMobile}>
            <S.RocketContainer
              onClick={() => {
                setModalOpen((modalOpen) => !modalOpen);
                console.log(modalOpen);
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
            {!modalOpen && !launch && (
              <S.RocketInfo>
                <p>로켓을 클릭해보세요!</p>
              </S.RocketInfo>
            )}
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
