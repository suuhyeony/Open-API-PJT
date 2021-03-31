import React from 'react';
import fifa_logo from '../img/fifa_logo.JPG';
import SearchBar from '../components/SearchBar';
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

function Home() {
    return (
        <div>
            <LogoHome src={fifa_logo}></LogoHome>
            <SearchContainer>
                <SearchBar />
            </SearchContainer>
        </div>
    );
}

export default Home;