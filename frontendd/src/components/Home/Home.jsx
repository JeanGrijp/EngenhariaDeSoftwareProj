import { FirstPage } from "../FirstPage/FirstPage"
import { Login } from "../Login/Login"
import { HomeStyle } from "./style"


export const Home = () => {
  return (
    <HomeStyle>
      <Login/>
      <FirstPage/>
    </HomeStyle>
  )
}