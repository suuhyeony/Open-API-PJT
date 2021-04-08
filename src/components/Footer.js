import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
    position: absolute;   
    bottom: 10px; 
    font-size: 13px;
    padding: 5px;
`;

function Footer() {
    return (
        <Text>
            <p>Data based on NEXON DEVELOPERS</p>
            {/* <p>Made by suuhyeony</p> */}
        </Text>
    );
}

export default Footer;