import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import fifa_logo from '../img/fifa_logo.JPG';

const Logo = styled.img`
    width: 400px;
    display: block;
    margin: 0 auto;
    margin-top: 30px;
    padding: 10px;
    cursor: pointer;
`;

function Home() {
    return (
        <div>
            <Logo src={fifa_logo}></Logo>
            <SearchBar />
        </div>
    );
}

export default Home;