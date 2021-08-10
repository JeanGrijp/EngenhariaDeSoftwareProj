import { ContainerSignIn } from "./style"
import { Link } from 'react'

import googleIcon from '../../imagens/google-logo.svg'


export const SignIn = () => {
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
                {/* <Link 
                className="forgetPassword" 
                href="">Forget passord?</Link> */}
                <a 
                className="forgetPassword" 
                href="">Forget passord?</a></div>
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
      </ContainerSignIn>
    </>
  )
}