// import { render } from "react-dom";
import styled from "styled-components";

export const DivLeft = styled.div`

  @media screen and (max-width: 620px) {
    width: 80%;
    height: 50vh;
    border: 2px solid red;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: column;
    padding: 0 30px;

    h1 {
      font-family: ${props => props.theme.fonts.fontOne};
      font-weight: 700;
      color: #012205;

    }

    p {
      font-family: ${props => props.theme.fonts.fontTwo};
      font-weight: 300;
      color: #012205;
    }

    button {
      width: 55%;
      height: 2rem;
      display: flex;
      border: none;
      border-radius: 10px;

      div.btnIcon {
        background: ${props => props.theme.colours.buttonGreen};
        width: 25%;
        height: 100%;
        border-radius: 5px 0 0 5px;
      }
      
      div {
        background: ${props => props.theme.colours.buttonBlue};
        width: 75%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0 5px 5px 0;

        h4 {
          color: white;
        }
        }
      }
    }
  
  @media screen and (max-width: 2000px) {
    margin: 0 5%;
    width: 60%;
    height: 80vh;
    border: 2px solid red;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    h1.logo {
      display: none;
    }
    h1 {
      font-family: ${props => props.theme.fonts.fontOne};
      font-weight: 700;
      color: #012205;
      font-size: 3.5rem;
      margin: 2% 5%;



    }

    p {
      font-family: ${props => props.theme.fonts.fontTwo};
      font-weight: 300;
      color: #012205;
      font-size: 1.5rem;
      margin: 2% 5%;

      /* padding: 3% 0; */


    }

    button {
      width: 27%;
      height: 10%;
      display: flex;
      border: none;
      border-radius: 10px;
      margin: 8% 15%;

      div.btnIcon {
        background: ${props => props.theme.colours.buttonGreen};
        width: 25%;
        height: 100%;
        border-radius: 5px 0 0 5px;

        img {
          background: none;
        }
      }
      
      div {
        background: ${props => props.theme.colours.buttonBlue};
        width: 75%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0 5px 5px 0;

        h4 {
          color: white;
          font-size: 1.1rem;
        }
        }
      }
    }

`;

export const DivRight = styled.div`

  @media screen and (max-width: 620px) {
    width: 100%;
    height: 40vh;
    border: 2px solid green;

    div {
      
      height: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      display: none;
      img {
        width: 80%;
        height: 80%;

      }
    }
  }
`
