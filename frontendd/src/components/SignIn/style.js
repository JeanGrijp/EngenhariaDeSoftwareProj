import styled from "styled-components";

import Explore from '../../imagens/recycling.jpg';

export const ContainerSignIn = styled.div`

@media screen and (max-width: 700px) {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('${Explore}');
  background-size: cover;
  background-repeat: no-repeat;
  
  div.container {
    width: 80%;
    height: 70%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      position: relative;
      left: -20%;
      /* margin-left: 5%; */
      color: white;
      font-size: 4rem;
      font-family: ${props => props.theme.fonts.fontOne};
      border-bottom: 2px solid #88D23C;
    }

    div.inputs {
      width: 80%;
      height: 70%;
      margin: 15% 0;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      form {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      }

      input {
        background: 0;
        border: #88D23C;
        border-bottom: 2px solid #88D23C;
        outline: none;
        margin: 5% 0;
        /* border-radius: 10px; */
        width: 80%;
        height: 4rem;
        padding: 0 5%;
        color: white;
        transition: 0.3s;
        font-weight: 600;
      }

      input::placeholder{
        font-size: 1.5rem;
        color: white;
        font-weight: 800;
      }

      input:focus {
        border: 2px solid #FFF;
        width: 90%;
        transition: 0.3s;
        border-radius: 10px;

      }

      div.forget {
        width: 80%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        a.forgetPassword {
          color: white;
          text-decoration: 0;
          font-family: ${props => props.theme.fonts.fontOne};
          font-size: 1.2rem;
          font-weight: 600;
          
        }
      }


      button[type='submit']{
        font-family: ${props => props.theme.fonts.fontOne};
        font-weight: 600;
        width: 50%;
        height: 4rem;
        padding: 0 5%;
        outline: none;
        margin: 5% 0;
        background: #88D23C;
        transition: 0.5s;
        border-radius: 10px;
        color: white;
        border: 0;
        transition: 0.5s;
      }

      button[type='submit']:hover {
        transition: 0.5s;
        background: #3E6911;
        color: white;
        border-radius: 10px;
        border: 1px solid white;

      }

      p {
        color: white;
        font-family: ${props => props.theme.fonts.fontOne};
        margin-bottom: 10px;
        font-size: 1.2rem;
        font-weight: 600;

        a {
          font-family: ${props => props.theme.fonts.fontOne};
          color: red;
          text-decoration: 0;
        }
      }

      div.googleArea {
        width: 80%;
        height: 4rem;
        border: none;
        border-radius: 10px;
        text-align: center;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: rgba(197, 31, 31, 0.884);

        img {
          height: 90%;
          width: 15%;
        }

        input {
          border: 0;
          outline: 0;
          border: 0;
        }
      }
    }
  }
}

`;