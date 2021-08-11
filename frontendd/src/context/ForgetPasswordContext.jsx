import { createContext, useState } from "react";


export const ForgetPasswordContext = createContext()

export const ForgerPasswordProvider = ({children}) => {

  const [forgetPassword, setForgetPassword] = useState(false);


  return (
    <ForgetPasswordContext.Provider
      value={{forgetPassword, setForgetPassword}}
    >
      {children}
    </ForgetPasswordContext.Provider>
  )
}