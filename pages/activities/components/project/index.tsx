import * as S from "styles/activities/components/project/index";
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
import SliderSlick from "pages/components/sliderSlick";
import { ProjectItem } from "pages/constants/project";

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
              <S.SessionTitleBox isMobile={isMobile}>
                <p>NEXT 예비창업 패키지</p>
                <p>(7월)</p>
              </S.SessionTitleBox>
              <S.SessionInfoBox isMobile={isMobile}>
                24번의 개발세션과 6번의 창업세션을 통해 배운 것들을 활용할 수
                있는 시간입니다. 팀을 꾸려 검증하고자 하는 아이디어를 실현할 수
                있습니다.
              </S.SessionInfoBox>
            </S.SessionWrapper>
            <S.SessionWrapper isMobile={isMobile}>
              <S.SessionTitleBox isMobile={isMobile}>
                <p>NEXT 초기창업 패키지</p>
                <p>(2학기)</p>
              </S.SessionTitleBox>
              <S.SessionInfoBox isMobile={isMobile}>
                실제 창업 또는 경진대회 출전을 목표로 진행하는 몰입
                프로젝트입니다. 가설을 검증하고 서비스를 개발하여 심사위원을
                대상으로 최종 IR을 진행합니다.
              </S.SessionInfoBox>
            </S.SessionWrapper>
            <S.ProjectExampleWrapper>
              <S.ProjectTextBox>2022년 프로젝트 예시</S.ProjectTextBox>
              <S.SlideWrapper>
                <SliderSlick slideItemGroup={ProjectItem} slideShowGroup={2} />
              </S.SlideWrapper>
            </S.ProjectExampleWrapper>
            <S.ProjectUpdateText>
              <span>서울대멋사 연합해커톤</span>은 2023년부터 연합데모데이로
              교체됩니다.
            </S.ProjectUpdateText>
          </S.MainContainer>
        </S.Container>
      )}
    </>
  );
}
