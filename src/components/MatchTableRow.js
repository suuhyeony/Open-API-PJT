import React, { useState, useEffect } from 'react';
import { getMatchDetail } from '../modules/api';
import { useMatchDispatch, useMatchState } from '../modules/MatchContext';
import styled from 'styled-components';



const MatchRow = styled.td`

`;

function MatchTableRow({ matchid, accessId }) {
    const [match, setMatch] = useState(null);
    // const matchState = useMatchState();
    // const matchDispatch = useMatchDispatch();
    useEffect(() => {
        getMatchDetail(matchid).then((res) => setMatch(res));
        // console.log(match)
    }, [match])
    // const { data: match } = matchState.match;
    // getMatchDetail(matchDispatch, matchid);
    // let match = null
    // console.log(match)
    if (!match) return <></>
    return (
        <>
            <MatchRow>
                {match.matchDate}
            </MatchRow>
            <MatchRow>
                {match.matchInfo[0].accessId === accessId ? <p> 승 </p> : <p> 패 </p>}
            </MatchRow>
        </>
    );
}

export default MatchTableRow;