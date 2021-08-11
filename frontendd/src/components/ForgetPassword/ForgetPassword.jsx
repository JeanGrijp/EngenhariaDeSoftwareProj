import { useContext } from "react"
import { ForgetPasswordContext } from "../../context/ForgetPasswordContext"
import { ContainerForgetPassword } from "./style"


export const ForgetPassword = () => {

  const {setForgetPassword} = useContext(ForgetPasswordContext)

  return (
    <ContainerForgetPassword>
      <div className="container">
        <button
        onClick={setForgetPassword(false)} 
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