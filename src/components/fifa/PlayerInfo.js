import React from 'react';
import styled from 'styled-components';
import fifa_class from '../../metadata/fifa_class.json';
import fifa_position from '../../metadata/fifa_position.json';

function PlayerInfo({ onClose, visible, curPlayer }) {
    if (!visible) return null;

    const seasonId = Number(String(curPlayer.spId).slice(0, 3));
    const pId = Number(String(curPlayer.spId).slice(3));

    // console.log(curPlayer)
    // console.log(seasonId, pId)
    return (
        <DarkBackground>
            <DialogBlock>
                <Header>
                    <h3>선수 정보</h3>
                    <Button onClick={onClose}>닫기</Button>
                </Header>
                <Player>
                    <img src={'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p'+parseInt(pId)+'.png'} alt={pId} />
                    <div style={{ padding: '15px'}}>
                        <div style={{ display: 'flex', marginTop: '10px' }}>
                            <img src={fifa_class.filter((cls) => cls.seasonId === seasonId)[0].seasonImg} />
                            <h3 style={{ marginLeft: '10px'}}>{curPlayer.nickname}</h3>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <p>{fifa_class.filter((cls) => cls.seasonId === seasonId)[0].className} |</p>
                            <p>| <b>{fifa_position.filter(pos => pos.spposition === curPlayer.spPosition)[0].desc}</b></p>
                        </div>
                    </div>
                </Player>

            </DialogBlock>
        </DarkBackground>
    );
}

export default PlayerInfo;


const Player = styled.div`
    display: flex;
    padding: 10px;
`;

const Button = styled.button`
    border: none;
    outline: none;
    background-color: #505e6d;
    border-radius: 3px;
    padding: 8px;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: #3f4b58;
    }
    &:active {
        background-color: #171f29;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #344252;
    padding: 10px;
`;

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
    width: 530px;
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