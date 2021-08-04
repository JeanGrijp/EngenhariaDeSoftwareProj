import { ContainerLogin } from "./style"

import googleIcon from '../../imagens/google-logo.svg'
import logo from '../../imagens/symbol.svg'


export const Login = () => {
  return (
    <>
      <ContainerLogin>
        <div className="container">
          <h1>Login</h1>
          <div className="inputs">
            <form action="">
              <input 
              type="email" placeholder="Email" name="email" 
              id="" />
              <input 
              type="password" placeholder="Password" name="" 
              id="" />
              <a className="forgetPassword" href="">Forget passord?</a>
              <input 
              type="submit" value="Entrar" />
              <p>Don't have a account? <a href="">Sign Up</a> </p>
              <div className="googleArea">
                <img src={googleIcon} alt="" srcset="" />
                <input type="button" value="Or Login with Google"/>
              </div>
            </form>
          </div>
        </div>
      </ContainerLogin>
    </>
  )
}