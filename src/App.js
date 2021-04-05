import React from 'react';
import { Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import FifaAboutUser from './routes/FifaAboutUser';
import FifaHome from './routes/FifaHome';
import styled from 'styled-components';
import Footer from './components/Footer';
import KartHome from './routes/KartHome';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    /* background: #000000; */
    color: #ffffff;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  margin-top: 100px;
  text-align: center;
  color: #ffffff;
`;


function App() {
  return (
    <>
      <GlobalStyle />
      <Route path='/' exact={true} component={FifaHome} />
      <Route path='/about_user' component={FifaAboutUser} />
      <Route path='/kart' component={KartHome} />
      <FooterContainer><Footer /></FooterContainer>
    </>
  );
}

export default App;
