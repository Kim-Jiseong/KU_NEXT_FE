import React from "react";
import styled, { createGlobalStyle } from "styled-components";
const GlobalStyleWrapper = createGlobalStyle`


  * {
    padding: 0px;
    margin: 0px;
    /* box-sizing: border-box; */
    font-family:'Spoqa Han Sans Neo', 'sans-serif', "애플 SD 산돌고딕 Neo", "Apple SD Gothic Neo", "Malgun Gothic", "arial sans-serif";
  }
  body, button, form, h1, h2, h3, h4, h5, h6, p, input, legend, li, ol, ul, select, table, td, textarea, th {
    margin:0;
    padding:0;
    /* background-color: #1D1D1D; */
  }
  ::-webkit-scrollbar {
  display: none;
}
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    background:none;
    border:0;
    cursor:pointer;

    &:disabled {
      cursor: default;
    }
  }

  *:focus {
    outline: none;
  }

  html {
    font-size: 62.5%;
    -webkit-tap-highlight-color: transparent;
  }
  body {
  padding: 0;
  margin: 0;
  word-break: keep-all;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
 -ms-overflow-style: none;
 

  /* overflow-x: hidden; */
  /* font-family: -apple-system, InkLipquid; */
}
@font-face {
    font-family: 'NanumSquareNeo-Variable';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  @media screen and (max-width: 415px) {
    html {
      font-size: 9.375px;
    }
  }

  @media screen and (max-width: 413px) {
    html {
      font-size: 8.75px;
    }
  }

  @media screen and (max-width: 361px) {
    html {
      font-size: 8.125px;
    }
  }

  @media screen and (max-width: 321px) {
    html {
      font-size: 7.5px;
    }
  }
`;

const Container = styled.div`
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* max-width: 1920px; */
  width: 100vw;
  /* overflow: hidden; */
  margin: 0 auto;
  font-size: 1.6rem;
  color: #222222;
`;

const GlobalStyle = ({ children }) => {
  return (
    <>
      <GlobalStyleWrapper />
      <Container>{children}</Container>
    </>
  );
};

export default GlobalStyle;
