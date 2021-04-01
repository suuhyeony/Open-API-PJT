import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
    display: flex;
    justify-content: space-between;
`;

function Footer() {
    return (
        <Text>
            <button>FIFA 공식홈</button>
            <p>Data based on NEXON DEVELOPERS</p>
            <p>made by suuhyeony</p>
        </Text>
    );
}

export default Footer;