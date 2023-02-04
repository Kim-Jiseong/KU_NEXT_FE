import * as S from "styles/activities/components/demoday/index";
import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import SessionDev from "public/assets/activities/session-development.png";
import SessionStartup from "public/assets/activities/session-startup.png";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import {
  DemodayFinalLottie,
  DemodayInHouseLottie,
} from "pages/components/lottie/lottie";

export default function Curriculrum() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const isDesktop = useMediaQuery({ minDeviceWidth: 820 });
  const isMobile = useMediaQuery({ maxWidth: 820 });
  useEffect(() => {
    AOS.init();
    if (isMobile != undefined && isDesktop != undefined) {
      setLoading(false);
    }
  }, []);
  return (
    <>
      {!loading && (
        <S.Container className="mount" isMobile={isMobile}>
          <S.MainContainer isMobile={isMobile}>
            <S.SessionWrapper isMobile={isMobile}>
              <S.SessionImgBox isMobile={isMobile}>
                <DemodayInHouseLottie />
              </S.SessionImgBox>
              <S.SessionTitleBox isMobile={isMobile}>
                NEXT 데모데이
              </S.SessionTitleBox>
              <S.SessionInfoBox isMobile={isMobile}>
                <p>
                  4주간 진행된 여름방학 프로젝트를 알럼나이와 투자심사역 앞에서
                  발표합니다. 피드백 후, 서비스 유지/피벗을 결정합니다.
                </p>
              </S.SessionInfoBox>
              <S.SessionDayBox isMobile={isMobile}>
                ㅣ8월 5일 예정 I
              </S.SessionDayBox>
            </S.SessionWrapper>
            <S.SessionWrapper isMobile={isMobile}>
              <S.SessionImgBox isMobile={isMobile}>
                <DemodayFinalLottie />
              </S.SessionImgBox>
              <S.SessionTitleBox isMobile={isMobile}>
                연합 데모데이
              </S.SessionTitleBox>
              <S.SessionInfoBox isMobile={isMobile}>
                <p>
                  1년간 활동의 결과물을 투자심사역 앞에서 발표하고, 최종 창업
                  진행 여부를 결정합니다.
                </p>
                <p>서울대학교 멋쟁이사자처럼과 함께 진행합니다.</p>
              </S.SessionInfoBox>
              <S.SessionDayBox isMobile={isMobile}>
                ㅣ12월 예정 I
              </S.SessionDayBox>
            </S.SessionWrapper>
          </S.MainContainer>
        </S.Container>
      )}
    </>
  );
}
