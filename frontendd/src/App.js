import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import { Home } from "./components/Home/Home";
import { GlobalStyle } from "./styles/GlobalStyle";
import light from "./styles/themes/light";
import { SignUp } from "./components/SignUp/SignUp";
import { ForgetPassword } from "./components/ForgetPassword/ForgetPassword";
import { ForgerPasswordProvider } from "./context/ForgetPasswordContext";



function App() {
  return (

    <ThemeProvider  theme={light}>
    <ForgerPasswordProvider>
      <GlobalStyle/>
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cadastrar" exact component={SignUp} />
            <Route path="/forgetPassword" exact component={ForgetPassword} />
          </Switch>
      </BrowserRouter>
    </ForgerPasswordProvider>
  </ThemeProvider>
  );
}

export default App;
