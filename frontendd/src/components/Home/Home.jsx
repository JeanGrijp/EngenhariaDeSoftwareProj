
import { HomeStyle } from "./style"
import { SignIn } from "../SignIn/SignIn"
import { FirstPage } from "../FirstPage/FirstPage"
import { SecondPage } from "../SecondPage/SecondPage"


export const Home = () => {
  return (
    <HomeStyle>
      <FirstPage/>
      <SecondPage/>
    </HomeStyle>
  )
}