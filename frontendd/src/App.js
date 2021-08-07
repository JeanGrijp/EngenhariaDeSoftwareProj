import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import { Home } from "./components/Home/Home";
import { GlobalStyle } from "./styles/GlobalStyle";
import light from "./styles/themes/light";



function App() {
  return (
  <ThemeProvider  theme={light}>
    <Home/>
    <BrowserRouter>
      <Switch>
          <GlobalStyle/>
          <Route path='/' exact component={Home} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
