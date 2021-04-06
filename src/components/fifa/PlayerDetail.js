import React from 'react';
import styled from 'styled-components';


function PlayerDetail({ visible, onClose, accessId, match }) {
    if (!visible) return null;
    return (
        <DarkBackground>
            <DialogBlock>
                <Header>
                    <h3>선수 상세정보</h3>
                    <Button onClick={onClose}>닫기</Button>
                </Header>
                <p>경기일자 : {match.matchDate}</p>
                
            </DialogBlock>
        </DarkBackground>
    );
}

export default PlayerDetail;


const DarkBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.8);
    color: black;
`;

const DialogBlock = styled.div`
    width: 500px;
    padding: 1.5rem;
    background: white;
    border-radius: 2px;
    h3 {
        margin: 0;
        font-size: 1.5rem;
    }
    p {
        font-size: 1rem;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #344252;
    padding: 10px;
`;

const Button = styled.button`
    background-color: #344252;
    border-radius: 3px;
    padding: 5px;
    color: white;
    cursor: pointer;
`;