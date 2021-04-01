import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getMatches, useMatchDispatch, useMatchState } from '../modules/MatchContext';
import MatchTableRow from './MatchTableRow';


const matchTypeList = [
    {
        "matchtype": 30,
        "desc": "리그 친선"
    },{
        "matchtype": 40,
        "desc": "클래식 1on1"
    },{
        "matchtype": 50,
        "desc": "공식경기"
    },{
        "matchtype": 52,
        "desc": "감독모드"
    },{
        "matchtype": 60,
        "desc": "공식 친선"
    },{
        "matchtype": 204,
        "desc": "볼타 친선"
    },{
        "matchtype": 214,
        "desc": "볼타 공식"
    },{
        "matchtype": 224,
        "desc": "볼타 AI대전"
    },{
        "matchtype": 234,
        "desc": "볼타 커스텀"
    }
]


function RecentMatch({ accessId }) {
    const [matchType, setMatchType] = useState(parseInt(50));
    const matchState = useMatchState();
    const matchDispatch = useMatchDispatch();

    const { data: matches} = matchState.matches;

    const typeChange = async (e) => {
        await setMatchType(parseInt(e.target.value));
        // getMatches(matchDispatch, accessId, e.target.value, 0);
    };

    useEffect(() => {
        getMatches(matchDispatch, accessId, matchType, 0);
    }, [matchType]);

    console.log(matchType, matches, 'm');
    
    return (
        <div>
            <h3>최근 경기 기록</h3>
            <select name="matchtype" id="dropDown" value={matchType} onChange={typeChange}>
                {matchTypeList.map(type => (<option key={type.matchtype} value={type.matchtype}>{type.desc}</option>))}
            </select>
            <table border='2'>
                <tr>
                    <th>경기날짜</th>
                    <th>결과</th>
                    <th>상대팀</th>
                </tr>
                {matches && matches.map(matchid => (<tr><MatchTableRow matchid={matchid} accessId={accessId} /></tr>))}
            </table>
        </div>
    );
}

export default RecentMatch;