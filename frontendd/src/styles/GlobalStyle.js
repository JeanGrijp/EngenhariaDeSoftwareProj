import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
     scroll-behavior: smooth;
     font-size: 62.5%
  }

  body {
    background: ${props => props.theme.colours.backgroundBorder};
  }

  .container {
    max-width: 1440px;
    margin: 0 auto;
    width: 90vw;
  }
`;