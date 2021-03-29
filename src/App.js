import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Home from './routes/Home';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #000000;
  }
`;



function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;
