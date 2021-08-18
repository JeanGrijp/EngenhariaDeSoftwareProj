// import { render } from "react-dom";
import styled from "styled-components";


export const DivContainer = styled.div`


  width: 100%;
  max-width: 1900px;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${props => props.theme.colours.background};

  @media screen and (max-height: 700px) {
    height: 100vh;
  }

  @media screen and (min-width: 800px) {
    position: relative;
    margin: auto;
    /* border: 1px solid yellow; */
    width: 100%;
    min-width: 1000px;
    max-width: 1920px;

  }


`

export const DivLeft = styled.div`
  font-family: ${props => props.theme.fonts.fontTwo};
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 800px) and (max-height: 1281px) {
    width: 100%;
    height: 100%;
    min-height: 650px;
    max-width: 800px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 2% 7%;
  
  h1.logo {
    font-size: 5rem;
    margin-bottom: 25%;
    /* margin-bottom: 10%; */
  }

  h1.text {
    font-size: 3rem;
    /* border: 1px solid red; */
    /* margin-top: 15%; */

  }

  p {
    /* margin-top: 30px; */
    /* border: 1px solid red; */
    font-size: 2rem;
  }

  h1, p, button {
    margin: 8% 3%;
  }

  button.btn {
    position: relative;
    margin: 0 auto;
    margin-top: 25%;
    border: 0;
    /* border: 3px solid green; */
    border-radius: 10px;
    outline: 0;
    /* margin: 0 auto;
    margin-bottom: 5px;
    margin-top: 25%; */
    width: 38%;
    /* max-height: 35px; */
    height: 5%;
    max-height: 50px;
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

      h4 {
        color: white;
      }

    }

  }



  }



  @media screen and (min-width: 800px) and (min-height: 800px) {
    /* border: 1px solid red; */
    width: 60%;
    max-width: 2000px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 2% 7%;
  

  h1.logo {
    font-size: 7rem;
    font-weight: 600;
    /* margin-bottom: 15%; */
  }

  h1.text {
    font-size: 5rem;
    /* border: 1px solid red; */
    margin-top: 15%;

  }

  p {
    margin-top: 30px;
    /* border: 1px solid red; */
    font-size: 2rem;
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

      h4 {
        color: white;
      }

    }


  }

}


`;

export const DivRight = styled.div`
    /* border: 2px solid blue; */
    width: 40%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    /* padding: 10%; */

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
    /* padding: 10%; */


    div.garbage {
      /* border: 1px solid red; */

      width: 100%;
      height: 100%;


      img {
        width: 100%;
        height: 100%;
      }
    }
  }

`;