import React, { useState, useEffect } from "react";
import * as S from "styles/about/components/greeting/styles";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "aos/dist/aos.css";
// import { useRouter } from "next/router";
import kimhagyeong from "public/images/profile/kimhagyeong.jpg";

export const DESKTOP_TAB = {
  width: "100%",
  margin: "0 auto 2rem auto",
};

export default function Greeting() {
  // const router = useRouter();
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
    // <div> {!loading && (
    <S.Container isMobile={isMobile} className="mount">
        <S.ImageWrapper>
          <S.ImageElementWrapper>
            <img src={kimhagyeong.src} />
          </S.ImageElementWrapper>
        </S.ImageWrapper>
        <S.TextWrapper>
            <S.TextElementWrapper data-aos="fade">
                <div>
                    {/* <p>안녕하세요. <span><b>NEXT x LIKELION</b></span> 11기 대표 김하경입니다.</p>
                    <p>코딩. 따분한 강의와 두꺼운 교재에 결국 흐지부지 끝나버리지는 않으셨나요?</p>
                    <p>저희 NEXT X LIKELION은 단순히 코드만 따라서 치는 코딩이 아닌 <b>아이디어를 현실로 만들어주는</b> "도구"로서의 코딩을 하실 수 있도록 도와드립니다.</p>
                    <p>코딩에 대해 전혀 몰라도 걱정하실 필요 없습니다! 여러분을 위해 언제든지 도와줄 준비가 되어있는 운영진분들이 옆에 있으니 포기하지 않고 배울 열정만 있으시다면 충분합니다.</p>
                    <p>1년 동안 후회 없이 배우고 경험하실 수 있도록, 다양한 주제로 매주 진행되는 세션, 팀원들과 함께 직접 기획하고 개발까지 해볼 수 있는 해커톤 프로젝트 & 데모데이, 그리고 그 외의 많은 오프라인 활동들이 준비되어 있습니다.</p>
                    <p>비슷한 목표를 가진 뜻이 맞는 동료들, 여러 서비스들을 직접 만들어보면서 배운 경험과 개발 능력, 그리고 직접 창업하신 선배들과의 시간까지.</p>
                    <p>NEXT X LIKELION은 제 인생에서 가장 뜻 깊었던 활동이었습니다. 그리고 여러분에게도 이러한 경험이 될 것이라고 확신합니다.</p>
                    <p>올 한 해 NEXT X LIKELION과 함께 여러분의 상상을 현실로 만들어보세요.</p> */}
                    <p>안녕하세요. <span><b>NEXT X LIKELION</b></span> 은 고려대학교 유일의 <b>소프트웨어 창업 학회</b>입니다.</p>
                    <p>코딩. 따분한 강의와 두꺼운 교재에 결국 흐지부지 끝나버리지는 않으셨나요?</p>
                    <p>창업. 아이디어는 떠오르지만 현실로 만들 방법을 몰라, 함께할 사람이 없어 묻어두지는 않으셨나요?</p>
                    <p>앞으로 1년 동안 운영진들이 자체적으로 구축한 커리큘럼과 세션을 통해 개발을 학습하며 소프트웨어 역량을 기르게 됩니다.</p>
                    <p>또한, NEXT의 파트너 eo PLANET의 창업 교육 과정을 통해 기업가적 마인드셋을 갖추게 됩니다.</p>
                    <p>시장에서 문제를 찾고 프로덕트를 개발하는 두 학습을 실전 프로젝트를 통해 병행하며, 문제 해결 능력을 갖춘 스타트업 인재로 성장합니다.</p>
                    <p>공동의 목표를 가진 동료들, 여러 서비스를 직접 만들고 시장에서 테스트하며 축적한 실전 역량, 다양한 분야의 사람들과 네트워킹할 수 있는 기회까지.</p>
                    <p>우리는 더 넓은 세상을 마주하게 될 것이고, 그 과정에서 동료들과 열정을 공유하며 내가 그리는 비전에 가까워질 것입니다. </p>
                    <p>지금껏 경험해본적 없는 폭발적인 성장을 기대하며, </p>
                    <p>NEXT라는 로켓에 올라타세요.</p>
                    <p><b>ACCELERATE YOUR POTENTIAL.</b></p>

                      {/* <span style={{ fontWeight: "700" }}>
                        &nbsp; NE<b>X</b>T
                      </span> */}
                </div>
                <p>
                  <b style={{ display: "flex", alignItems: "baseline", justifyContent: "flex-end"}}>NEXT 11기 임원진 드림</b>
                  <span style={{ display: "flex", alignItems: "baseline", justifyContent: "flex-end", fontWeight: "300", fontSize: "8px"}}>
                    대표 <b style={{color: "#000", fontWeight: "500", paddingLeft: "3px" }}>김하경</b> |
                    부대표 <b style={{color: "#000",fontWeight: "500", paddingLeft: "3px" }}>송명훈 윤정윤 정지우</b>
                  </span>
                </p>              
            </S.TextElementWrapper>
        </S.TextWrapper>
    </S.Container>
    // )};</div>
    );
}