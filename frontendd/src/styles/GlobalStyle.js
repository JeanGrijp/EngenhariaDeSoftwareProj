import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 15px;
  }
  
  body {
    background: ${props => props.theme.colours.background};
  }
`;