import React from 'react';
import styled from 'styled-components';


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

const Table = styled.table`
    width: 100%;
    margin: 0 auto;
    border-collapse: collapse;
    text-align: center;
    border-bottom: 2px solid black;
    th, td {
        border: 1px solid white;
        border-bottom: 1px solid black;
        margin: 5px;
        padding: 8px;
    }

    tr td:nth-child(1) {
        width: 35%;
    }

    tr td:nth-child(2) {
        background-color: lavender;
        width: 30%;
    }

    tr td:nth-child(3) {
        width: 35%;
    }
`;

function MatchDetail({ visible, onClose, match }) {
    if (!visible) return null;
    return (
        <DarkBackground>
            <DialogBlock>
                <Header>
                    <h3>경기 상세정보</h3>
                    <Button onClick={onClose}>닫기</Button>
                </Header>
                <p>경기일자 : {match.matchDate}</p>
                <Table>
                    <tr style={{borderBottom: '2px solid black'}}>
                        <th>{match.matchInfo[0].nickname}</th>
                        <th>항목</th>
                        <th>{match.matchInfo[1].nickname}</th>
                    </tr>
                    <tr>
                        <td>{match.matchInfo[0].shoot.goalTotal}</td>
                        <td>골</td>
                        <td>{match.matchInfo[1].shoot.goalTotal}</td>
                    </tr>
                    <tr>
                        <td>{match.matchInfo[0].shoot.shootTotal}</td>
                        <td>슛</td>
                        <td>{match.matchInfo[1].shoot.shootTotal}</td>
                    </tr>
                    <tr>
                        <td>{match.matchInfo[0].shoot.effectiveShootTotal}</td>
                        <td>유효슛</td>
                        <td>{match.matchInfo[1].shoot.effectiveShootTotal}</td>
                    </tr>
                    <tr>
                        <td>{match.matchInfo[0].shoot.shootTotal === 0 ? 0 : parseInt((match.matchInfo[0].shoot.goalTotal/match.matchInfo[0].shoot.shootTotal)*100)}</td>
                        <td>공격 성공률(%)</td>
                        <td>{match.matchInfo[1].shoot.shootTotal === 0 ? 0 : parseInt((match.matchInfo[1].shoot.goalTotal/match.matchInfo[1].shoot.shootTotal)*100)}</td>
                    </tr>
                    <tr>
                        <td>{match.matchInfo[0].pass.passSuccess}</td>
                        <td>패스 성공률(%)</td>
                        <td>{match.matchInfo[1].pass.passSuccess}</td>
                    </tr>
                    <tr>
                        <td>{match.matchInfo[0].matchDetail.cornerKick}</td>
                        <td>코너킥</td>
                        <td>{match.matchInfo[1].matchDetail.cornerKick}</td>
                    </tr>
                    <tr>
                        <td>{match.matchInfo[0].defence.tackleSuccess}</td>
                        <td>태클</td>
                        <td>{match.matchInfo[1].defence.tackleSuccess}</td>
                    </tr>
                    <tr>
                        <td>{match.matchInfo[0].matchDetail.foul}</td>
                        <td>파울</td>
                        <td>{match.matchInfo[1].matchDetail.foul}</td>
                    </tr>
                    <tr>
                        <td>{match.matchInfo[0].matchDetail.yellowCards}</td>
                        <td>경고</td>
                        <td>{match.matchInfo[1].matchDetail.yellowCards}</td>
                    </tr>
                    <tr>
                        <td>{match.matchInfo[0].matchDetail.redCards}</td>
                        <td>퇴장</td>
                        <td>{match.matchInfo[1].matchDetail.redCards}</td>
                    </tr>
                    <tr>
                        <td>{match.matchInfo[0].matchDetail.injury}</td>
                        <td>부상</td>
                        <td>{match.matchInfo[1].matchDetail.injury}</td>
                    </tr>
                </Table>
            </DialogBlock>
        </DarkBackground>
    );
}

export default MatchDetail;