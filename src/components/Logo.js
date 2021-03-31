import React from 'react';
import styled from 'styled-components';
import fifa_logo from '../img/fifa_logo.JPG';


const LogoImg = styled.img`
    width: 200px;
    display: inline;
    margin-top: 10px;
    margin-left: 20px;
    padding: 10px;
    cursor: pointer;
`;

function Logo() {
    return (
        <div>
            <LogoImg src={fifa_logo}></LogoImg>
        </div>
    );
}

export default Logo;