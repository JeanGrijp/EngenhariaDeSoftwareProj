import { ContainerForgetPassword } from "./style"


export const ForgetPassword = () => {


  return (
    <ContainerForgetPassword>
      <div className="container">
        <button 
        className="btn">
          <a 
          href="/">X</a>
        </button>
        <div className="inputs">
          <form action="/forgetPassword" method="POST">
            <input 
            type="email" placeholder="Email" name="email" 
            id="" />
            <input 
            type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </ContainerForgetPassword>
  )
}