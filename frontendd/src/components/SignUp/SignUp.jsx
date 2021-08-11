import { SignUpContainer } from "./style"

export const SignUp = () => {





  return (
    <SignUpContainer>
      <div className="container">
        <h1>Cadastro</h1>
        <div className="inputs">
          <form action="/cadastro" method="POST">
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