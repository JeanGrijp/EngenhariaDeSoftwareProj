// import { render } from "react-dom";
import styled from "styled-components";


export const DivContainer = styled.div`
  width: 100%;
  max-width: 1900px;
  height: 85vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${props => props.theme.colours.background};

  @media screen and (max-height: 700px) {
    height: 100vh;
  }

  @media screen and (min-width: 800px) {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 1700px;
  }

`;

export const DivLeft = styled.div`
  font-family: ${props => props.theme.fonts.fontTwo};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5% 0;

  @media screen and (max-width: 801px) and (max-height: 1281px) {
    width: 100%;
    height: 100%;
    min-height: 650px;
    max-width: 800px;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
    padding: 2% 7%;

    img.logo {
      width: 20rem;
      margin-bottom: 50px;
    } 

    h1.text {
      position: relative;
      margin-bottom: -20%;
      font-size: 2.5rem;
    }

    p {
      font-size: 1.3rem;
    }

    button.btn {
      position: relative;
      margin: 0 auto;
      border: 0;
      border-radius: 10px;
      outline: 0;
      width: 45%;
      max-width: 170px;
      height: 5%;
      max-height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      div.btnIcon {
        border-radius: 10px 0px 0px 10px;
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${props => props.theme.colours.buttonGreen};
      }

      div {
        border-radius: 0px 10px 10px 0px;
        width: 75%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${props => props.theme.colours.buttonBlue};

        .link {
          text-decoration: none;
        }

        h4 {
          text-decoration: none;
          font-size: 1em;
          color: white;
        }
      }
    }
  }

  @media screen and (min-width: 802px) and (max-width: 1200px) {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 7% 7%;

    img.logo {
      position: relative;
      left: -10%;
      width: 25rem;
      margin-bottom: 50px;
    } 

    h1.text {
      font-size: 2.5rem;
    }

    p {
      margin-top: 30px;
      font-size: 1rem;
    }

    button.btn {
    border: 0;
    border-radius: 10px;
    outline: 0;
    margin: 0 auto;
    margin-top: 25%;
    max-width: 400px;
    min-width: 180px;
    max-height: 50px;
    min-height: 50px;
    width: 45%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

    div.btnIcon {
      border-radius: 10px 0px 0px 10px;

      /* border: 1px solid red; */
      width: 25%;

      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${props => props.theme.colours.buttonGreen};
      }

      div {
        border-radius: 0px 10px 10px 0px;

        width: 75%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${props => props.theme.colours.buttonBlue};

        .link {
          text-decoration: none;
        }

        h4 {
          color: white;
        }
      }
    }
  }

  @media screen and (min-width: 1201px) and (min-height: 800px) {
    width: 60%;
    max-width: 2000px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 2% 7%;

    img.logo {
      position: relative;
      left: -15%;
      width: 25rem;
      margin-bottom: 50px;
    } 

    h1.text {
      font-size: 3.5rem;
      margin-top: 15%;

    }

    p {
      margin-top: 30px;
      font-size: 1.5rem;
    }

    button.btn {
      border: 0;
      border-radius: 10px;
      outline: 0;
      margin: 0 auto;
      margin-top: 25%;
      max-width: 400px;
      min-width: 180px;
      max-height: 50px;
      min-height: 50px;
      width: 45%;
      height: 40%;
      display: flex;
      justify-content: center;
      align-items: center;

      div.btnIcon {
        border-radius: 10px 0px 0px 10px;
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${props => props.theme.colours.buttonGreen};
      }

      div {
        border-radius: 0px 10px 10px 0px;
        width: 75%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${props => props.theme.colours.buttonBlue};

        .link {
          text-decoration: none;
        }

        h4 {
          color: white;
        }
      }
    }
  }

`;

export const DivRight = styled.div`
    width: 40%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

  @media screen and (max-width: 800px)  {
    display: none;

    div.garbage {
      display: none;

      img {
        display: none;
      }
    }
  }

  @media screen and (min-width: 800px) {
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    div.garbage {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

`;