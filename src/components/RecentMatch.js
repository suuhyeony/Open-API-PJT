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

const RecentMatchContainer = styled.div`
    margin: 0 auto;
    padding: 10px;
`;

const Title = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Table = styled.table`
    width: 100%;
    margin: 0 auto;
    border-collapse: collapse;
    text-align: center;
    th, td {
        border: 1px solid gray;
        padding: 5px;
    }
`;

const ButtonContainer = styled.div`
    width: 20%;
    /* bottom: 60px; */
    margin: 20px 0 auto;
    position: absolute;
    right: 40%;
    button {
        border-radius: 2px;
    }
`;

function RecentMatch({ accessId }) {
    const [matchType, setMatchType] = useState(50);
    const [count, setCount] = useState(10);
    const matchState = useMatchState();
    const matchDispatch = useMatchDispatch();

    const { data: matches} = matchState.matches;

    const typeChange = async (e) => {
        await setMatchType(parseInt(e.target.value));
        // getMatches(matchDispatch, accessId, e.target.value, 0);
    };

    const PrevSearch = () => {
        setCount(count - 10);
        console.log(count);
        getMatches(matchDispatch, accessId, matchType, count, 10);
    } 

    const NextSearch = () => {
        setCount(count + 10);
        console.log(count);
        getMatches(matchDispatch, accessId, matchType, count, 10);
    }

    useEffect(() => {
        setCount(0);
        getMatches(matchDispatch, accessId, matchType, count, 10);
    }, [matchType]);

    console.log(matchType, matches, 'm');
    
    return (
        <RecentMatchContainer>
            <Title>
                <h3 style={{marginRight: '10px'}}>최근 경기</h3>
                <select name="matchtype" id="dropDown" value={matchType} onChange={typeChange}>
                    {matchTypeList.map(type => (<option key={type.matchtype} value={type.matchtype}>{type.desc}</option>))}
                </select>
            </Title>
            <Table>
                <thead>
                    <tr>
                        <th>경기날짜</th>
                        <th>결과</th>
                        <th>스코어</th>
                        <th>상대팀</th>
                        <th>경기 평점</th>
                        <th>기록 보기</th>
                        <th>선수 보기</th>
                    </tr>
                </thead>
                <tbody>
                    {matches && matches.map(matchid => (<MatchTableRow key={matchid} matchid={matchid} accessId={accessId} />))}
                </tbody>
                <ButtonContainer>
                    {count>0 && <button onClick={PrevSearch}>이전</button>}
                    <button onClick={NextSearch}>다음</button>
                </ButtonContainer>
            </Table>
        </RecentMatchContainer>
    );
}

export default RecentMatch;