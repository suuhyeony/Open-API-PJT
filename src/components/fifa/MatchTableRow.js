import React, { useState, useEffect } from 'react';
import { getMatchDetail } from '../../modules/fifa/api';
import styled from 'styled-components';
import MatchDetail from './MatchDetail';
import { AiFillSkin } from 'react-icons/ai';
import { GiSoccerBall } from 'react-icons/gi';
import PlayerDetail from './PlayerDetail';


function MatchTableRow({ matchid, accessId }) {
    const [match, setMatch] = useState(null);
    const [matchModal, setMatchModal] = useState(false);
    const [playerModal, setPlayerModal] = useState(false); 


    useEffect(() => {
        getMatchDetail(matchid).then((res) => setMatch(res));
    }, [matchid]);
    // console.log('row', match);

    const openMatchModal = () => {
        setMatchModal(true);
    };

    const closeMatchModal = () => {
        // console.log('닫기');
        setMatchModal(false);
    };

    const openPlayerModal = () => {
        setPlayerModal(true);
    };

    const closePlayerModal = () => {
        setPlayerModal(false);
    };

    if (!match || match.matchInfo.length === 1) return <></>;

    match.matchInfo.sort((a,b) => {
        if (a.accessId===accessId) return -1
        if (b.accessId===accessId) return 1
        return 0
    })
    // console.log(match.matchInfo)
    
    return (
        <>
            <MainTr>
                <MainTd>{match.matchDate}</MainTd>
                <MainTd>{(!match.matchInfo[0].matchDetail.matchEndType && match.matchInfo[0].matchDetail.matchResult) ||
                    (match.matchInfo[0].matchDetail.matchEndType === 1 && '몰수승') ||
                    (match.matchInfo[0].matchDetail.matchEndType === 2 && '몰수패')
                }</MainTd>
                <MainTd>{match.matchInfo[0].shoot.goalTotal} : {match.matchInfo[1].shoot.goalTotal}</MainTd>
                <MainTd>{match.matchInfo[1].nickname}</MainTd>
                <MainTd>{Math.round(parseFloat(match.matchInfo[0].matchDetail.averageRating)*100)/100}</MainTd>
                <MainTd onClick={openMatchModal} style={{cursor: 'pointer'}}><GiSoccerBall style={{ fontSize: '20px' }} /></MainTd>
                <MainTd onClick={openPlayerModal} style={{cursor: 'pointer'}}><AiFillSkin style={{ fontSize: '20px' }} /></MainTd>
            </MainTr>
                <MatchDetail visible={matchModal} onClose={closeMatchModal} match={match} />
                <PlayerDetail visible={playerModal} onClose={closePlayerModal} match={match} />
        </>
    );
}

export default MatchTableRow;


const MainTr = styled.tr`
    color: #ebe8e8;
    :nth-child(2n+1) {
        background-color: #131212;
    }
    &:hover {
        opacity: 0.7;
    }
    opacity: 1;  
`;

const MainTd = styled.td`
    border: none;
    padding: 10px;
`;