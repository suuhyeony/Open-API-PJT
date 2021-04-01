import React from 'react';
import fifa_logo from '../img/fifa_logo.JPG';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import styled from 'styled-components';


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

const FooterContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 10px 0;
    text-align: center;
`;

function Home() {
    return (
        <>
            <LogoHome src={fifa_logo}></LogoHome>
            <SearchContainer>
                <SearchBar />
            </SearchContainer>
            <FooterContainer><Footer /></FooterContainer>
        </>
    );
}

export default Home;