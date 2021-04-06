import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const LogoImg = styled.img`
    width: 190px;
    height: 45px;
    display: inline;
    cursor: pointer;
`;

function FifaLogo() {
    return (
        <div>
            <Link to='/'><LogoImg src='/fifa/fifa_logo.JPG'></LogoImg></Link>
        </div>
    );
}

export default FifaLogo;