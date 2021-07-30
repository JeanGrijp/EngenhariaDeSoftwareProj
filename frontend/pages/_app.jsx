import { ThemeProvider } from "styled-components"
import { Home } from "./components/Home/Home"
import { GlobalStyle } from "./styles/GlobalStyle"
import light from "./styles/themes/light"


function MyApp({ Component, pageProps }) {
  return (
  <>
  <ThemeProvider theme={light}>
    <GlobalStyle/>
    <Home/>
    <Component {...pageProps} />
  </ThemeProvider>
  </>
  )
}

export default MyApp
