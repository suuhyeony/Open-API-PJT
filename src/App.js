import React from 'react';
import { Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import FifaAboutUser from './routes/FifaAboutUser';
import FifaHome from './routes/FifaHome';
import styled from 'styled-components';
import KartHome from './routes/KartHome';
import KartAboutUser from './routes/KartAboutUser'


function App() {
  return (
    <>
      <GlobalStyle />
      <Route path='/' exact={true} component={FifaHome} />
      <Route path='/fifa_about_user' component={FifaAboutUser} />
      <Route path='/kart/' exact={true} component={KartHome} />
      <Route path='/kart/:usrName' component={KartAboutUser} />
    </>
  );
}

export default App;


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    /* background: #000000; */
    color: #ffffff;
  }
`;
