import { createContext, useState } from "react";


export const ForgetPasswordContext = createContext()

export const ForgerPasswordProvider = () => {

  const [forgetPassword, setforgetPassword] = useState(false);


  return (
    <ForgetPasswordContext.Provider
      value={{forgetPassword, setforgetPassword}}
    >
    </ForgetPasswordContext.Provider>
  )
}