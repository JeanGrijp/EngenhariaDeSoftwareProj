import { ThemeProvider } from "styled-components";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { GlobalStyle } from "./styles/GlobalStyle";
import light from "./styles/themes/light";


function App() {
  return (
    <ThemeProvider  theme={light}>
      <GlobalStyle/>
      <Login/>
      {/* <Home/> */}
    </ThemeProvider>
  );
}

export default App;
