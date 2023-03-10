import { useEffect, useRef } from "react";
import * as S from "styles/components/slideSlick/style";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import { SLIDE_ITEM } from "types/people/slide-item";

interface Props {
  slideItemGroup: SLIDE_ITEM[];
  slideSpeed?: number;
  slideShowGroup?: number;
}

const Slick: React.FC<Props> = ({
  slideItemGroup,
  slideSpeed,
  slideShowGroup,
  ...rest
}) => {
  useEffect(() => {
    AOS.init();
  });

  const settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    // lazyLoad: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <S.MainContainer>
      <Slider {...settings}>
        {slideItemGroup.map(({ name, src }) => (
          <S.ElementWrapper key={name} data-aos="fade">
            <S.ImageWrapper>
              <img src={src.src} />
            </S.ImageWrapper>
          </S.ElementWrapper>
        ))}
      </Slider>
    </S.MainContainer>
  );
};

export default Slick;
