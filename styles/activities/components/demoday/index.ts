import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";

export const Container = styled.div<{ isMobile: boolean }>`
  width: 100%;
  min-height: 100%;
`;

export const MainContainer = styled.div<{ isMobile: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem 4%;
  box-sizing: border-box;

  ${(props) =>
    props.isMobile &&
    css`
      padding: 0;
    `}

  & > div {
    border-right: 2px solid ${THEME.GRAY_200};
  }

  & > div:last-child {
    border-right: none;
  }
`;

export const SessionWrapper = styled.div<{ isMobile: boolean }>`
  width: 33%;
  height: 100%;
  padding-top: 3%;
  padding-bottom: 8%;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }

  ${(props) =>
    props.isMobile &&
    css`
      width: 100%;
      height: 100%;
      padding: 2% 0;
      border: none !important;
    `}
`;

export const SessionImgBox = styled.div<{ isMobile: boolean }>`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 3rem;

  /* &:after {
    content: "";
    display: block;
    padding-bottom: 56.25%;
  } */

  ${(props) =>
    props.isMobile &&
    css`
      width: 100%;
    `}
`;

export const SessionTitleBox = styled.div<{ isMobile: boolean }>`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  & > p {
    color: ${THEME.ORANGE};
    font-size: 2.5rem;
    font-weight: 700;
  }
`;

export const SessionInfoBox = styled.p<{ isMobile: boolean }>`
  width: 90%;
  margin: 0 auto;
  word-break: keep-all;
  white-space: pre-wrap;
  font-size: 1.5rem;
  line-height: 2.5rem;
  font-weight: 600;
  margin-bottom: 5rfem;
`;
