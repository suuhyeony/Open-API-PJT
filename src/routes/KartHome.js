import React from "react";
import styled from "styled-components";
import Searchbar from "../components/kart/Searchbar";
import Logo from "../components/kart/Logo"
import TabMenu from '../components/TabMenu';
import Footer from '../components/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #5383E8 ;
  width: 100vw;
  height: 96vh;
`;
const Header = styled.header`
  
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 20px;
  background-color: rgba(0,0,0, 0.8);
  padding: 1vh;
  border-radius: 13px;
  }
`;
const Subtitle = styled.h3`
  margin-top:7vh;
  font-size: 20px;
`;
function KartHome() {
    return(
    <div style={{margin :0}}>
    <TabMenu /> 
    <Container>
      <Header>
        <Logo />
        <Title>KartRider 전적검색</Title>
        <Subtitle>라이더명을 입력하세요!</Subtitle>
        <Searchbar />
      </Header>   
      <Footer />
    </Container>
    
    </div>
)
};

export default KartHome;