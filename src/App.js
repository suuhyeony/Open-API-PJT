import React from 'react';
import { Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import AboutUser from './routes/AboutUser';
import Home from './routes/Home';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #000000;
    color: white;
  }
`;



function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Route path='/' exact={true} component={Home} />
        <Route path='/about_user' component={AboutUser} />
      </div>
    </>
  );
}

export default App;
