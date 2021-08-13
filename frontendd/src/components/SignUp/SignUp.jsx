import { useState } from "react";
import { useHistory } from "react-router-dom";
import firebaseConnection from "../../firebase"
import { SignUpContainer } from "./style"

export const SignUp = () => {


  const userId = localStorage.getItem("uid") || "00000";

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory(); //importar biblioteca para fazer o roteamento >> react-router-dom
  const [errorMessage, setErroMessage] = useState('')

  const handleCadastro = (e)  =>{

    e.preventDefault()

    const authUser = firebaseConnection.auth()
    authUser.createUserWithEmailAndPassword(login, password).then((response) =>{
      localStorage.setItem("uid", response.user.uid);

      history.push('/pag-two') //redirecionar user
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


  return (
    <SignUpContainer>
      <div className="container">
        <h1>Cadastro</h1>
        <div className="inputs">
          <form onSubmit={handleCadastro}>
            <input 
            type="email" 
            placeholder="Email" 
            name="email" 
            id="" />
            <input 
            type="password" 
            placeholder="Password" 
            name="" 
            id="" />
            <input 
            type="password" 
            placeholder="Confirm Password" 
            name="" 
            id="" />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </SignUpContainer>
  )
}