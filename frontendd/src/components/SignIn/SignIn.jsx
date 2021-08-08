import { ContainerSignIn } from "./style"

import googleIcon from '../../imagens/google-logo.svg'
import { ForgetPassword } from "../ForgetPassword/ForgetPassword"
import { ForgetPasswordContext } from "../../context/ForgetPasswordContext"
import { useContext } from "react"


export const SignIn = () => {

  const {forgetPassword, setforgetPassword} = useContext(ForgetPasswordContext)



  return (
    <>
      <ContainerSignIn>
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
              <div className="forget">
                <a 
                onClick={() => setforgetPassword(true)}
                className="forgetPassword" 
                href="/">Forget Password?</a>
              </div>
              <button type="submit">Entrar</button>
              <p>Don't have a account? 
              <a href="/" >Sign Up
              </a> 
              </p>
              <div className="googleArea">
                <img src={googleIcon} alt="" srcset="" />
                <input type="button" value="Or Login with Google"/>
              </div>
            </form>
          </div>
        </div>
      { forgetPassword && <ForgetPassword/>}
      </ContainerSignIn>
    </>
  )
}