import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
    width: 300px;
    margin: 0 auto;
    font-size: 13px;
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