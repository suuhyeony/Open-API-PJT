import React from 'react';
import { createGlobalStyle } from 'styled-components';
import SearchBar from './components/SearchBar';

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
        <SearchBar />
      </div>
    </>
  );
}

export default App;
