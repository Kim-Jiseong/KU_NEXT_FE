import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";
export const color = keyframes`
0%{
  filter: grayscale(1)
}
100%{
  filter: grayscale(0)
}
`;
export const fadeIn = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;
export const slideIn = keyframes`
0%{
  transform: translate(-50%, 100%);
}
100%{
  transform: translate(-50%, 70%);
}
`;
export const slideOut = keyframes`
0%{
  transform: translate(-50%, 70%);
}
100%{
  transform: translate(-50%, 150%);
}
`;
export const stanby = keyframes`
0%{
  width:50%;
  top:0;
}
50%{
  width:100%;
  top:30%;
}
100%{
  width: 50%;
  top:0;
}
`;
export const launch = keyframes`
0%{
  bottom: 0;
}
100%{
  bottom:200vh;
}
`;

export const vibrate = keyframes`
0%{
  bottom: 0;
}
100%{
  bottom:200vh;
}
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  background-color: #000;
`;
export const SpaceContainer = styled.div<{ isMobile: boolean }>`
  width: 33%;
  min-height: 100vh;
  max-width: 800px;
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
  pointer-events: none;
  ${(props) =>
    props.isMobile &&
    css`
      width: 100%;
      max-width: 430px;
    `}
`;

export const Planet = styled.div<{ launched: boolean }>`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 100%);
  animation: ${slideIn} 2s 2s forwards;
  pointer-events: auto;
  ${(props) =>
    props.launched &&
    css`
      transform: translate(-50%, 70%);
      animation: ${slideOut} 2s 2s forwards;
    `}
  & img {
    width: 100%;
    height: 100%;
  }
`;

export const RocketContainer = styled.div<{ launched: boolean }>`
  width: 30%;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  z-index: 4;
  pointer-events: auto;
  &::after {
    content: "";
    display: block;
    padding-bottom: 200%;
  }
  ${(props) =>
    props.launched &&
    css`
      animation: ${launch} 4s 2s forwards;
    `}
`;
export const Rocket = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  pointer-events: auto;
  & img {
    width: 100%;
  }
`;
export const Fire = styled.div<{ launched: boolean }>`
  width: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 4;
  transform: translateX(-50%);
  animation: ${stanby} 4s;
  transition: 3s;
  ${(props) =>
    props.launched &&
    css`
      width: 100%;
      top: 30%;
    `}
`;

export const ModalContainer = styled.div<{ infoOpen: boolean }>`
  width: 90%;
  height: auto;
  padding: 3rem;
  background-color: #151515;
  color: white;
  position: absolute;
  z-index: 6;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  visibility: ${(props) => (props.infoOpen ? "visible" : "hidden")};
  pointer-events: ${(props) => (props.infoOpen ? "auto" : "none")};
  /* align-items: center; */
`;
