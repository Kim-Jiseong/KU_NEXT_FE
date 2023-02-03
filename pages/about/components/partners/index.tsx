import React, { useState, useEffect } from "react";
import * as S from "styles/about/components/partners/styles";
import { useMediaQuery } from "react-responsive";
import { Partners as PartnersItems } from "pages/constants/partners";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";

export const DESKTOP_TAB = {
  width: "100%",
  margin: "0 auto 2rem auto",
};

export default function Partners() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const isDesktop = useMediaQuery({ minDeviceWidth: 820 });
  const isMobile = useMediaQuery({ maxWidth: 820 });
  const partners = Partners;

  useEffect(() => {
    AOS.init();
    if (isMobile != undefined && isDesktop != undefined) {
      setLoading(false);
    }
  }, []);
  return (
    <S.PartnerContainer isMobile={isMobile} className="mount">
      {PartnersItems.map(({ name, src }) => (
        <div key={name} data-aos="fade">
          <img src={src.src} />
        </div>
      ))}
    </S.PartnerContainer>
  );
}
