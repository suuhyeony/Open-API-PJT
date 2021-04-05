import React, { useState, useEffect } from 'react';
import { getMatchDetail } from '../../modules/fifa/api';
import styled from 'styled-components';
import MatchDetail from './MatchDetail';
import { AiFillSkin } from 'react-icons/ai';
import { GiSoccerBall } from 'react-icons/gi';
import PlayerDetail from './PlayerDetail';

const Content = styled.tr`
    /* cursor: pointer; */
`;

const Cell = styled.td`
    /* cursor: pointer; */
`;

function MatchTableRow({ matchid, accessId }) {
    const [match, setMatch] = useState(null);
    const [matchModal, setMatchModal] = useState(false);
    const [playerModal, setPlayerModal] = useState(false); 


    useEffect(() => {
        getMatchDetail(matchid).then((res) => setMatch(res));
    }, []);
    // console.log('row', match);

    const openMatchModal = () => {
        setMatchModal(true);
    };

    const openPlayerModal = () => {
        setPlayerModal(true);
    };

    const closeMatchModal = () => {
        // console.log('닫기');
        setMatchModal(false);
    };

    const closePlayerModal = () => {
        setPlayerModal(false);
    };

    if (!match || match.matchInfo.length === 1) return <></>;

    match.matchInfo.sort((a,b) => {
        if (a.accessId===accessId) return -1
        if (b.accessId===accessId) return 1
    })
    // console.log(match.matchInfo)
    
    return (
        <>
            <Content>
                <Cell>{match.matchDate}</Cell>
                <Cell>{(!match.matchInfo[0].matchDetail.matchEndType && match.matchInfo[0].matchDetail.matchResult) ||
                    (match.matchInfo[0].matchDetail.matchEndType === 1 && '몰수승') ||
                    (match.matchInfo[0].matchDetail.matchEndType === 2 && '몰수패')
                }</Cell>
                <Cell>{match.matchInfo[0].shoot.goalTotal} : {match.matchInfo[1].shoot.goalTotal}</Cell>
                <Cell>{match.matchInfo[1].nickname}</Cell>
                <Cell>{Math.round(parseFloat(match.matchInfo[0].matchDetail.averageRating)*100)/100}</Cell>
                <Cell onClick={openMatchModal} style={{cursor: 'pointer'}}><GiSoccerBall /></Cell>
                <Cell onClick={openPlayerModal} style={{cursor: 'pointer'}}><AiFillSkin /></Cell>
            </Content>
                <MatchDetail visible={matchModal} onClose={closeMatchModal} accessId={accessId} match={match} />
                <PlayerDetail visible={playerModal} onClose={closePlayerModal} accessId={accessId} match={match} />
        </>
    );
}

export default MatchTableRow;