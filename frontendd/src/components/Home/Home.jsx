import { FirstPage } from "../FirstPage/FirstPage"
import { SignIn } from "../SignIn/SignIn"
import { HomeStyle } from "./style"


export const Home = () => {
  return (
    <HomeStyle>
      <SignIn/>
      <FirstPage/>
    </HomeStyle>
  )
}