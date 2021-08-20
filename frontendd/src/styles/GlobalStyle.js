import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  

  /* @media screen and (max-height: 700px) {
    html {
      height: 100vh;
    }
  } */

  @media screen and (max-width: 800px) {
    html {
      font-size: 15px;
    }
  }

  @media screen and (min-width: 800px) {
    html {
      font-size: 20px;
      /* position: relative; */
      /* margin: 0 auto; */
      /* width: 100%; */
      /* max-width: 1700px; */
    }
  }


  html {
     scroll-behavior: smooth;
     /* font-size: 62.5% */
  }

  body {
    background: ${props => props.theme.colours.background};
  }

  .container {
    max-width: 1440px;
    margin: 0 auto;
  }
`;