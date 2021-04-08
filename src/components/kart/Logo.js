import React from 'react'
import styled from "styled-components";

const LogoImg = styled.img`
    width:50%
    margin: 0 auto
`;

function Logo() {
    return (
        <div>
            <LogoImg src={"/kart/kart_logo.png"}></LogoImg>
        </div>
    )
}

export default Logo
