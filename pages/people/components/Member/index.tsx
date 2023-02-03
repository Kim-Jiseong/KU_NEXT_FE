import * as S from "styles/components/member/style";
import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import CurriculrumDesktop from "public/assets/curriculum-desktop.png";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { PEOPLE_INFORMATION } from "pages/constants/people";
import { PEOPLE_INFORMATION_TYPE } from "pages/types/people/people-information";
import AOS from "aos";

export default function Member() {
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
          <>
            {PEOPLE_INFORMATION &&
              PEOPLE_INFORMATION.map((item: PEOPLE_INFORMATION_TYPE) => {
                return (
                  <S.MemberWrapper>
                    <S.MemberImgBox>
                      {item.imgSrc ? (
                        <Image
                          src={item.imgSrc}
                          alt="김"
                          width={220}
                          height={220}
                        />
                      ) : (
                        // <Image
                        //   alt="김"
                        //   src="/public/images/profile/10기_김나영.png"
                        //   width={220}
                        //   height={220}
                        // />
                        <div
                          style={{
                            backgroundColor: "#333333",
                            width: "220px",
                            height: "220px",
                          }}
                        />
                      )}
                    </S.MemberImgBox>
                    <S.MemberTextBox>
                      <S.MemberName>
                        {item.name}{" "}
                        {item.managementTeam && (
                          <S.ManagementTeamBadge>
                            {item.managementTeam}
                          </S.ManagementTeamBadge>
                        )}
                      </S.MemberName>
                      <S.MemberInfo>
                        {item.department}
                        {item.masterDegree &&
                          `(${item.masterDegree && item.masterDegree})`}
                        {item.secondMajor &&
                          `(${item.secondMajor && item.secondMajor})`}{" "}
                        {`${item.classOf}학번`}
                      </S.MemberInfo>
                    </S.MemberTextBox>
                  </S.MemberWrapper>
                );
              })}
          </>
        </S.Container>
      )}
    </>
  );
}
