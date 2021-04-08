import React from 'react';
import SearchBar from '../components/fifa/SearchBar';
import styled from 'styled-components';
import TabMenu from '../components/TabMenu';
import Footer from '../components/Footer';


function FifaHome() {
    document.querySelector('body').style.background = '#000000';

    return (
        <>
            <TabMenu />
            <Container>
                <LogoHome src='/fifa/fifa_logo.JPG'></LogoHome>
                <SearchContainer>
                    <SearchBar isHome={true} />
                </SearchContainer>
            </Container>
            <FooterContainer><Footer /></FooterContainer>
        </>
    );
}

export default FifaHome;

const FooterContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    margin-top: 100px;
    text-align: center;
    color: #ffffff;
`;

const Container = styled.div`
    margin-top: 100px;
`;

const LogoHome = styled.img`
    width: 400px;
    display: block;
    margin: 0 auto;
    margin-top: 30px;
    padding: 10px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    width: 500px;
    height: 200px;
    margin: 0 auto;
    padding: 30px;
`;