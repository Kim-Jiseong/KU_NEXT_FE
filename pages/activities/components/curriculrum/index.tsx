import * as S from "styles/activities/style";
import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import CurriculumDesktop from "public/images/activities/curriculum/curriculum-desktop.png";
import "aos/dist/aos.css";
import { useRouter } from "next/router";

export default function Curriculrum() {
  const router = useRouter();
  const isMobile = useMediaQuery({ maxWidth: 820 });
  return (
    <S.Section2 className="mount">
      <S.TextWrapper isMobile={isMobile} data-aos="fade">
        <span>
          <b>개발/창업 경험이 전혀 없더라도</b>
        </span>
        <p>1년 간의 활동을 통해</p>
        <p>기본적인 개발 능력을 갖춘 창업자로 성장합니다.</p>
        <p>
          📌 아래 일정은 1학기 기준으로, 2학기 일정은 학회 내부 공지 예정입니다.
        </p>
      </S.TextWrapper>
      <S.ScheduleContainer isMobile={isMobile}>
        <S.ScheduleWrapper isMobile={isMobile}>
          <S.ScheduleEventBox>
            <p>24</p>
          </S.ScheduleEventBox>
          <S.ScheduleInfoBox>
            <div>
              <h2>Development</h2>
              <h2>Sessions</h2>
            </div>
            <p>개발 세션</p>
          </S.ScheduleInfoBox>
        </S.ScheduleWrapper>
        <S.ScheduleWrapper isMobile={isMobile}>
          <S.ScheduleEventBox>
            <p>6</p>
          </S.ScheduleEventBox>
          <S.ScheduleInfoBox>
            <h2>Startup</h2>
            <h2>Sessions</h2>
            <p>창업 세션</p>
          </S.ScheduleInfoBox>
        </S.ScheduleWrapper>
        <S.ScheduleWrapper isMobile={isMobile}>
          <S.ScheduleEventBox>
            <p>4</p>
          </S.ScheduleEventBox>
          <S.ScheduleInfoBox>
            <h2>Project</h2>
            <h2>Weeks</h2>
            <p>필수 기술 스택 습득</p>
          </S.ScheduleInfoBox>
        </S.ScheduleWrapper>
        <S.ScheduleWrapper isMobile={isMobile}>
          <S.ScheduleEventBox>
            <p>2</p>
          </S.ScheduleEventBox>
          <S.ScheduleInfoBox>
            <h2>Demodays</h2>
            <h2></h2>
            <p>데모데이</p>
          </S.ScheduleInfoBox>
        </S.ScheduleWrapper>
      </S.ScheduleContainer>
      <S.LottieContainer isMobile={isMobile}>
        <Image
          layout="intrinsic"
          alt="CurriculumDesktop"
          src={CurriculumDesktop}
        />
      </S.LottieContainer>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "6rem",
        }}
      >
        <S.MoreBtn
          isMobile={isMobile}
          onClick={() => router.push("about")}
          // data-aos="fade"
        >
          + More Info
        </S.MoreBtn>
      </div>
    </S.Section2>
  );
}
