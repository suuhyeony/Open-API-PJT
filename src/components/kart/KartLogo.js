import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoImg = styled.img`
    width: 120px;
    height: 42px;
    display: inline;
    cursor: pointer;
    background-color: #5383E8;
`;

function KartLogo() {
    return (
        <div>
            <Link to='/kart'><LogoImg src='/kart/kart_logo.png'></LogoImg></Link>
        </div>
    );
}

export default KartLogo;