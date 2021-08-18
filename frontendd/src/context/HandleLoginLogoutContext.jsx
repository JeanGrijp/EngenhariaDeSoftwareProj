import { createContext, useRef, useState } from "react";


export const HandleLoginLogoutContext = createContext()


export const HandleLoginLogoutContextProvider = ({children}) => {

  const [uuid, setUuid] = useState(localStorage.getItem("uid"));
  let isAuth = useRef(uuid !== null);

  function handleLogin (uuid) {
    setUuid(uuid);
  };
  
  function handleLogOut () {
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