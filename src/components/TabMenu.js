import React from 'react';
import styled from 'styled-components';
import FifaLogo from './fifa/FifaLogo';
import KartLogo from './kart/KartLogo';

const Tab = styled.div`
    display: flex;
    height: 42px;
    background-color: #2e2e2e;
`;

function TabMenu() {
    return (
        <Tab>
            <FifaLogo />
            <KartLogo />
        </Tab>
    );
}

export default TabMenu;