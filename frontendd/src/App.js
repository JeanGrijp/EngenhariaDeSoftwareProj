import { ThemeProvider } from "styled-components";
import { Home } from "./components/Home/Home";
import { GlobalStyle } from "./styles/GlobalStyle";
import light from "./styles/themes/light";


function App() {
  return (
    <ThemeProvider  theme={light}>
      <GlobalStyle/>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
