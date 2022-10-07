import { css, createGlobalStyle } from "styled-components";

const global = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
    font-size: 16px;
    font-family: "MontserratRegular", serif;
  }
`;

export const GlobalStyle = createGlobalStyle(global);
