import React, { useState } from 'react';
import styled from 'styled-components';
import fifa_spid from '../../metadata/fifa_spid.json';
import PlayerInfo from './PlayerInfo';


function PlayerDetail({ visible, onClose, match }) {
    const [infoModal, setInfoModal] = useState(false);
    const [curPlayer, setCurPlayer] = useState(null);

    const openInfoModal = (data) => {
        setCurPlayer(data);
        // console.log(data)
        setInfoModal(true);
    };

    const closeInfoModal = () => {
        setInfoModal(false);
    };

    if (!visible) return null;

    const playerList = match.matchInfo[0].player.map(p => {
        p.nickname = fifa_spid.filter((sp) => p.spId === sp.id)[0].name;
        return p
    });

    playerList.sort((a, b) => {
        if (b.status.spRating > a.status.spRating) return 1
        if (b.status.spRating === a.status.spRating) return 0
        if (b.status.spRating < a.status.spRating) return -1
    });

    // console.log(playerList)

    return (
        <>
            <DarkBackground>
                <DialogBlock>
                    <Header>
                        <h3>선수 상세정보</h3>
                        <Button onClick={onClose}>닫기</Button>
                    </Header>
                    {/* <p>경기일자 : {match.matchDate}</p> */}
                    <Table>
                        <tr>
                            <th>선수명</th>
                            <th>평점</th>
                            <th>득점</th>
                            <th>도움</th>
                            <th>유효슛</th>
                            <th>일반슈팅</th>
                            <th>패스 성공률(%)</th>
                            <th>드리블 성공률(%)</th>
                            <th>태클 성공률(%)</th>
                            <th>차단 성공률(%)</th>
                        </tr>
                        {playerList.map(player => (
                            <tr>
                                <td onClick={openInfoModal.bind(this, player)}>{player.nickname}</td>
                                <td>{player.status.spRating}</td>
                                <td>{player.status.goal}</td>
                                <td>{player.status.assist}</td>
                                <td>{player.status.effectiveShoot}</td>
                                <td>{player.status.shoot}</td>
                                <td>{player.status.passTry === 0 ? 0 : parseInt((player.status.passSuccess/player.status.passTry)*100)}</td>
                                <td>{player.status.dribbleTry === 0 ? 0 : parseInt((player.status.dribbleSuccess/player.status.dribbleTry)*100)}</td>
                                <td>{player.status.tackleTry === 0 ? 0 : parseInt((player.status.tackle/player.status.tackleTry)*100)}</td>
                                <td>{player.status.blockTry === 0 ? 0 : parseInt((player.status.block/player.status.blockTry)*100)}</td>
                            </tr>))}
                    </Table>
                </DialogBlock>
            </DarkBackground>
            <PlayerInfo visible={infoModal} onClose={closeInfoModal} curPlayer={curPlayer} />
        </>
    );
}

export default PlayerDetail;


const Table = styled.table`
    width: 100%;
    margin: 0 auto;
    border-collapse: collapse;
    text-align: center;
    th {
        font-size: 0.8rem;
        font-weight: 2000;
        border-bottom: 2px solid black;
    }
    td {
        font-size: 0.9rem;
    }
    td:nth-child(1):hover {
        cursor: pointer;
        background-color: #d5f19d;
    }
    
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
    width: 800px;
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
    /* border-bottom: 1px solid #344252; */
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