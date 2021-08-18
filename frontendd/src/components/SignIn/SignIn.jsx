
import { ContainerSignIn } from "./style"

import { ForgetPassword } from "../ForgetPassword/ForgetPassword"
import { ForgetPasswordContext } from "../../context/ForgetPasswordContext"
import { useContext } from "react"
import { useState } from 'react'
import firebaseConnection, { db } from '../../firebase'
import { useHistory } from "react-router-dom"



export const SignIn = ({ handleSignIn }) => {


  const {forgetPassword, setForgetPassword} = useContext(ForgetPasswordContext)


  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory(); //importar biblioteca para fazer o roteamento >> react-router-dom
  const [errorMessage, setErroMessage] = useState('')

  const handleLoginSignIn = (e)  =>{

    e.preventDefault()

    const authUser = firebaseConnection.auth()
    authUser.signInWithEmailAndPassword(login, password).then((response) =>{
      localStorage.setItem("uid", response.user.uid);
      handleSignIn(response.user.uid);
      history.push('/home') //redirecionar user

    })

    .catch((error)=>{
      console.log(error.message)
      setErroMessage(error.message)
    })

  }

    const onEmailChange = (e)  =>{

    setLogin(e.target.value)
    
  }

    const onPasswordChange = (e)  =>{

    setPassword(e.target.value)
    
  }
  
  return (
    <>
      <ContainerSignIn>
        <div className="container">
          <h1>Login</h1>
          <div className="inputs">
            <form onSubmit={handleLoginSignIn}>
              <input 
              type="email" placeholder="Email" name="email" 
              id="" onChange={onEmailChange} value={login}/>
              <input 
              type="password" placeholder="Password" name="" 
              id="" onChange={onPasswordChange} value={password}/>
              {login}
              {password}
              <div className="forget">
                <p 
                onClick={() => setForgetPassword(true)}
                className="forgetPassword" 
                >Forget Password?
                </p>
              </div>
              <div className="Submit">
                <button type="submit">Entrar</button>
                <p>Don't have a account? 
                <a href="/" >Sign Up
                </a> 
                </p>
              </div>
            </form>
          </div>
        </div>
      </ContainerSignIn>
      { forgetPassword && <ForgetPassword/>}
    </>
  )
}

