import React from 'react';
import styled from 'styled-components';
import TabMenu from '../components/TabMenu';

const Container = styled.div`
    
`;

function KartHome() {
    document.querySelector('body').style.background = '#5383E8';

    return (
        <Container>
            <TabMenu />
            <h1>여기에 코드를 옮겨주세요</h1>
            <p>홀랭랭랭랭..............................</p>
        </Container>
    );
}

export default KartHome;