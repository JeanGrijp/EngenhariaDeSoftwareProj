
import { ContainerSignIn } from "./style"

import googleIcon from '../../imagens/google-logo.svg'
import { ForgetPassword } from "../ForgetPassword/ForgetPassword"
import { ForgetPasswordContext } from "../../context/ForgetPasswordContext"
import { useContext } from "react"
import { useState } from 'react'
import firebaseConnection, { db } from '../../firebase'
import googleIcon from '../../imagens/google-logo.svg'
import { ContainerSignIn } from "./style"



export const SignIn = () => {


  const {forgetPassword, setForgetPassword} = useContext(ForgetPasswordContext)


  const userId = localStorage.getItem("uid") || "00000";

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  //const history = useHistory(); importar biblioteca para fazer o roteamento >> react-router-dom
  const [errorMessage, setErroMessage] = useState('')

  const handleLogin = (e)  =>{

    e.preventDefault()

    const authUser = firebaseConnection.auth()
    authUser.signInWithEmailAndPassword(login, password).then((response) =>{
      localStorage.setItem("uid", response.user.uid);

      //history.push('/pag-two') redirecionar user
      //catch

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

  function criar_info_user(){

    db.collection('users').doc(userId).set({name: 'marcson', idade: '27'})

  };
  criar_info_user()
  //função criada apenas para teste

//  const getTasks = async () => {
//     const tasksRef = db
//       .collection("users")
//       .doc(userId) //user logado
//       .collection("tasks")
//       .orderBy("date");

//     const data = await tasksRef.get();
//     let newData = [];
//     data.docs.forEach((item) => {
//       newData = [...newData, { ...item.data(), id: item.id }];
//     });
//     setTasks(newData);
//   };
// a função getTasks serve para mostrar as informações do banco, estou salvando apra criar futuramente

  
  return (
    <>
      <ContainerSignIn>
        <div className="container">
          <h1>Login</h1>
          <div className="inputs">
            <form onSubmit={handleLogin}>
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
                >Forget Password?</p>
              </div>
              <button type="submit">Entrar</button>
              <p>Don't have a account? 
              <a href="/" >Sign Up
              </a> 
              </p>
                href="">Forget passord?</a>
              </div>
              <input 
              type="submit" value="Entrar" />
              <p>Don't have a account? <a href="">Sign Up</a> </p>
              <div className="googleArea">
                <img src={googleIcon} alt="" srcset="" />
                <input type="button" value="Or Login with Google"/>
              </div>
              <div style={{fontSize:36, color:'white', background:'green', padding:20}}>
                {errorMessage}
              </div>
            </form>
          </div>
        </div>
      </ContainerSignIn>
      { forgetPassword && <ForgetPassword/>}
    </>
  )
}

