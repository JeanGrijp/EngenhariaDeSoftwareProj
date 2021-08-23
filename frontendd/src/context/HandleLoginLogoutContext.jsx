import { createContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";


export const HandleLoginLogoutContext = createContext()


export const HandleLoginLogoutContextProvider = ({children}) => {

  const [uuid, setUuid] = useState(localStorage.getItem("uid"));
  let isAuth = uuid !== null;
  console.log(isAuth)
  function handleLogin (uuid) {
    setUuid(uuid);
  };
  
  function handleLogOut () {
    localStorage.removeItem("uid");
    setUuid(null);
  };

  return (
    <HandleLoginLogoutContext.Provider 

    value={{handleLogin, handleLogOut, isAuth, uuid, setUuid}}

    >
      {children}
    </HandleLoginLogoutContext.Provider>
  )
}