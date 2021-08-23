import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { Home } from "./components/Home/Home";
import { GlobalStyle } from "./styles/GlobalStyle";
import light from "./styles/themes/light";
import { SignUp } from "./components/SignUp/SignUp";
import { ForgetPassword } from "./components/ForgetPassword/ForgetPassword";
import { ForgerPasswordProvider } from "./context/ForgetPasswordContext";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { SignIn } from "./components/SignIn/SignIn";
import { HandleLoginLogoutContext, HandleLoginLogoutContextProvider } from "./context/HandleLoginLogoutContext";
import { SecondPage } from "./components/SecondPage/SecondPage";

function App() {

  const { handleLogin, handleLogOut, isAuth } = useContext(HandleLoginLogoutContext)

  return (
    <ThemeProvider theme={light}>
        <HandleLoginLogoutContextProvider>
      <ForgerPasswordProvider>
          <GlobalStyle />
          <BrowserRouter>
            <Switch>
              {isAuth ? (
                <>
                  <Route path="/home" exact>
                    <Home/>
                  </Route>
                  <Redirect to="/home" />
                </>
              ) : (
                <>
                  <Route path="/" exact>
                    <SignIn handleSignIn={handleLogin} />
                  </Route>
                  <Route path="/cadastrar" exact component={SignUp} />
                  <Route
                    path="/forgetPassword"
                    exact
                    component={ForgetPassword}
                    />
                  <Redirect to="/" />
                </>
              )}
            </Switch>
          </BrowserRouter>
      </ForgerPasswordProvider>
        </HandleLoginLogoutContextProvider>
    </ThemeProvider>
  );
}

export default App;
