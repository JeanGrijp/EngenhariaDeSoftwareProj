import styled from "styled-components";


export const Container = styled.div`
  /* border: 1px solid yellowgreen; */
  width: 100%;
  height: 100vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${props => props.theme.colours.background};

 


  @media screen and (max-height: 800px) {
    height: 100vh;
  }

  @media screen and (min-width: 800px) {
    position: relative;
    margin: 0 auto;
    width: 100%;
  }

`;


export const ImgBack = styled.div`
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  /* border: 1px solid red; */

  @media screen and (max-width: 700px) {
    img.front {
      z-index: 1;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 50%;
    }
  }

  @media screen and (min-width: 700px) and (max-width: 2000px ) {
    img.front {
      /* border: 1px solid green; */
      z-index: 1;
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 80%;
    }
  }

`;


export const FormCadastro = styled.form`
  font-family: ${props => props.theme.fonts.fontOne};

  position: absolute;
  left: 0;
  top: 0;
  font-family: ${props => props.theme.fonts.fontOne};

  @media (max-width: 700px) {
    z-index: 3;
    /* border: 5px solid green; */
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;

    div.containerDados {
      display: flex;
      justify-content: space-evenly;
      align-items: flex-start;
      flex-direction: column;
      /* border: 1px solid red; */
      width: 100%;
      height: 40%;
      padding: 1% 5%;

      h3 {
        font-weight: 600;
        font-size: 1.5rem;
        margin: 2% 0;
      }



      div.inputs {
        /* border: 3px solid black; */

        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        flex-direction: column;
        margin: 1% 0;
        padding: 0 5%;

        label {
          font-size: 0.7rem;
        }

        input {
          text-align: center;
          width: 80%;
          height: 60%;
          border-radius: 10px;
          border: 0;
          outline: transparent;
          background: ${props => props.theme.colours.backgroundInput};

        }

        input.tel {
          width: 50%;
        }
      }


    }

    div.containerAddress {
      display: inline-flex;
      justify-content: space-evenly;
      align-items: flex-start;
      flex-direction: column;
      /* border: 1px solid red; */
      width: 100%;
      height: 45%;
      padding: 1% 5%;

      h3 {
        font-weight: 600;
        font-size: 1.5rem;
        margin: 2% 0;
      }

      div.inputs {
        /* border: 3px solid black; */

        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        flex-direction: column;
        margin: 1% 0;
        padding: 0 5%;

        label {
          font-size: 0.7rem;
        }

        input {
          text-align: center;
          width: 80%;
          height: 60%;
          border-radius: 10px;
          border: 0;
          outline: transparent;
          background: ${props => props.theme.colours.backgroundInput};

        }

        input.tel {
          width: 50%;
        }
      }

      
      div.containerNB {
        /* border: 5px solid red; */
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }


      div.inputsNumber {
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        flex-direction: column;
        margin: 1% 0;
        padding: 0 5%;

        label {
          font-size: 0.7rem;
        }

        input {
          text-align: center;
          width: 80%;
          height: 60%;
          border-radius: 10px;
          border: 0;
          outline: transparent;
          background: ${props => props.theme.colours.backgroundInput};

        }

        input.tel {
          width: 50%;
        }
      }

      div.inputsBairro {
        /* border: 2px solid green; */
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        flex-direction: column;
        margin: 1% 0;
        padding: 0 5%;

        label {
          font-size: 0.7rem;
        }

        input {
          text-align: center;
          width: 80%;
          height: 60%;
          border-radius: 10px;
          border: 0;
          outline: transparent;
          background: ${props => props.theme.colours.backgroundInput};

        }

        input.tel {
          width: 50%;
        }
      }

    }

  }

  @media screen and (min-width: 700px){
    z-index: 3;
    /* border: 5px solid green; */
    width: 100%;
    height: 100%;
    /* min-height: 1000px; */
    /* max-height: 1100px; */
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;

    div.containerDados {
      display: flex;
      justify-content: space-evenly;
      align-items: flex-start;
      flex-direction: column;
      /* border: 1px solid red; */
      width: 100%;
      height: 50%;
      padding: 1% 5%;


      h3 {
        font-weight: 600;
        font-size: 1.5rem;
        margin: 2% 0;
      }



      div.inputs {
        /* border: 3px solid black; */

        width: 50%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        flex-direction: column;
        margin: 1% 0;
        padding: 0 5%;

        label {
          font-weight: 600;
          font-size: 0.7rem;
        }

        input {
          text-align: center;
          width: 80%;
          height: 100%;
          min-height: 30px;
          max-height: 50px;
          border-radius: 10px;
          border: 0;
          outline: transparent;
          background: ${props => props.theme.colours.backgroundInput};

        }

        input.tel {
          width: 50%;
        }
      }
    }

    div.containerAddress {
      display: inline-flex;
      justify-content: space-evenly;
      align-items: flex-start;
      flex-direction: column;
      /* border: 1px solid red; */
      width: 100%;
      height: 50%;
      padding: 1% 5%;

      h3 {
        font-weight: 600;
        font-size: 1.5rem;
        margin: 2% 0;
      }

      div.inputs {
        /* border: 3px solid black; */

        width: 50%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        flex-direction: column;
        margin: 1% 0;
        padding: 0 5%;

        label {
          font-weight: 600;
          font-size: 0.7rem;
        }

        input {
          text-align: center;
          width:100%;
          height: 80%;
          min-height: 30px;
          max-height: 50px;
          border-radius: 10px;
          border: 0;
          outline: transparent;
          background: ${props => props.theme.colours.backgroundInput};

        }

        input.tel {
          width: 50%;
        }
      }

      
      div.containerNB {
        /* border: 5px solid red; */
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }


      div.inputsNumber {
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        flex-direction: column;
        margin: 1% 0;
        padding: 0 5%;

        label {
          font-weight: 600;
          font-size: 0.7rem;
        }

        input {
          text-align: center;
          width: 80%;
          height: 60%;
          border-radius: 10px;
          border: 0;
          outline: transparent;
          background: ${props => props.theme.colours.backgroundInput};

        }

        input.tel {
          width: 50%;
        }
      }

      div.inputsBairro {
        /* border: 2px solid green; */
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        flex-direction: column;
        margin: 1% 0;
        padding: 0 5%;

        label {
          font-weight: 600;
          font-size: 0.7rem;
        }

        input {
          text-align: center;
          width: 80%;
          height: 60%;
          border-radius: 10px;
          border: 0;
          outline: transparent;
          background: ${props => props.theme.colours.backgroundInput};

        }

        input.tel {
          width: 50%;
        }
      }

    }

  }

`;

export const Button = styled.button`

  @media (max-width: 700px) {
    cursor: pointer;
    position: relative;
    margin-top: 5%;
    margin-left: 10%;
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
 

`;