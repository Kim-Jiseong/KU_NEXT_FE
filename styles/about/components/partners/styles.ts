import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";

export const Container = styled.div<{ isMobile: boolean }>`
  width: 100%;
  padding: 6rem 3rem;
  background: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;

    ${(props) =>
      props.isMobile &&
      css`
        padding: 10rem 8%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        & div {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding-bottom: 5rem;
        }
        & div:first-child p {
          font-size: 1.8rem;
          font-weight: 500;
          padding-bottom: 3rem;
        }
      `}
`;

export const TextWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-left: 14rem;

  font-size: 1.8rem;
  font-weight: 300;
  word-break: keep-all;
  color: #000;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  & p {
    line-height: 180%;
    padding-bottom: 3rem;
  }

  & span {
    font-size: 2.4rem;
    font-weight: 600;
  }
  & span b {
    color: ${THEME.ORANGE};
  }
  
}

`;

export const ImageWrapper = styled.div<{ isMobile: boolean }>`
  width: 100%;
  margin: 0;
  padding: 8rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  border-radius: 5rem;

  & div {
    width: 10%;
    margin: 2rem;
  }
  & div img {
    width: 100%;
  }
  ${(props) =>
    props.isMobile &&
    css`
      padding: 2rem;
      & div {
        width: 40%;
        margin: 1rem;
      }
    `}

  }
`;

export const ImageElementWrapper = styled.div`
  width: 10%;
  min-width: 100px;
  position: relative;
  &:after {
    content: "";
    padding-bottom: 100%;
    display: block;
  }
  & img {
    position: absolute;

    width: 100%;
    height: 100%;
    object-fit: cover;

    transition: all 0.2s linear;
  }

  & img:hover {
    transform: scale(1.13);
`;

// export const PartnerContainer = styled.div<{ isMobile: boolean }>`
//   width: 100%;
//   padding: 5rem;
//   background: white;
//   border-radius: 5rem;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;


// `;
