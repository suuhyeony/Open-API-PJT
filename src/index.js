import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './modules/UserContext';
import { MatchProvider } from './modules/MatchContext';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <MatchProvider>
        <App />
      </MatchProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
