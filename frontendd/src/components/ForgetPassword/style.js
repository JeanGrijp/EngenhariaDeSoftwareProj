import styled from "styled-components";

export const ContainerForgetPassword = styled.div`

@media screen and (max-width: 700px) {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #BFEF8E;
  
  
  div.container {
    position: relative;
    background: #436C18;
    width: 300px;
    height: 200px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button.btn {
      /* border: 1px solid red; */
      border: 0;
      width: 20px;
      height: 20px;
      font-size: 0;
      position: absolute;
      top: 10px;
      right: 10px;
      background: 0;
      outline: 0;
  
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        text-decoration: 0;
        color: white;
        width: 100%;
        height: 100%;
      }
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

      input[type='submit']{
        font-family: ${props => props.theme.fonts.fontOne};
        font-weight: 600;
        width: 50%;
        background: #88D23C;
        transition: 0.5s;
        border-radius: 10px;
      }

      input[type='submit']:hover {
        transition: 0.5s;
        background: #3E6911;
        color: white;
        border-radius: 10px;
        border: 1px solid white;

      }
    }
  }
}

`;