import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";

export const PartnerContainer = styled.div<{ isMobile: boolean }>`
  width: 100%;
  padding: 5rem;
  background: white;
  border-radius: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  & div {
    width: 20%;
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
`;
