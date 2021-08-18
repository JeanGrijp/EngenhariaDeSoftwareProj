import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HandleLoginLogoutContextProvider } from './context/HandleLoginLogoutContext';

ReactDOM.render(
  <React.StrictMode>
    <HandleLoginLogoutContextProvider>
      <App />
    </HandleLoginLogoutContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

