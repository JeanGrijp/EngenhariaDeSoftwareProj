import { ThemeProvider } from "styled-components";
import { Home } from "./components/Home/Home";
import { SignIn } from "./components/SignIn/SignIn";
import { GlobalStyle } from "./styles/GlobalStyle";
import light from "./styles/themes/light";


function App() {
  return (
    <ThemeProvider  theme={light}>
      <GlobalStyle/>
      <SignIn/>
      {/* <Home/> */}
    </ThemeProvider>
  );
}

export default App;
