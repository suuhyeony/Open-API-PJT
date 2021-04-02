import React from 'react';
import { Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import AboutUser from './routes/AboutUser';
import Home from './routes/Home';
import styled from 'styled-components';
import Footer from './components/Footer';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #000000;
    color: white;
  }
`;

const FooterContainer = styled.div`
  /* position: fixed; */
  /* bottom: 0; */
  width: 100%;
  padding: 10px 0;
  margin-top: 100px;
  text-align: center;
`;


function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Route path='/' exact={true} component={Home} />
        <Route path='/about_user' component={AboutUser} />
        <FooterContainer><Footer /></FooterContainer>
      </div>
    </>
  );
}

export default App;
