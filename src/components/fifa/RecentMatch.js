import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getRecentMatch } from '../../modules/fifa/api';
import MatchTableRow from './MatchTableRow';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


function RecentMatch({ user }) {
    const [matchType, setMatchType] = useState(50);
    const [matches, setMatches] = useState(null);
    const [count, setCount] = useState(0);

    const typeChange = async (e) => {
        await setMatchType(parseInt(e.target.value));
    };

    const PrevSearch = async() => {
        if (count === 0) {
            alert('이전 경기가 없습니다!');
        } else {
            setMatches(await getRecentMatch(user.accessId, matchType, count-10, 10));
            await setCount(count - 10);
            // console.log(count);
        }
    } 

    const NextSearch = async() => {
        setMatches(await getRecentMatch(user.accessId, matchType, count+10, 10));
        await setCount(count + 10);
        // console.log(count);
    }

    useEffect(async() => {
        setCount(0);
        setMatches(await getRecentMatch(user.accessId, matchType, count, 10));
    }, [matchType, user]);

    // console.log(matchType, matches, 'm');
    
    return (
        <RecentMatchContainer>
            <Title>
                <h2 style={{marginRight: '10px'}}>최근 경기</h2>
                <Select name="matchtype" id="dropDown" value={matchType} onChange={typeChange}>
                    {matchTypeList.map(type => (<option key={type.matchtype} value={type.matchtype}>{type.desc}</option>))}
                </Select>
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
                    {matches && matches.map(matchid => (<MatchTableRow key={matchid} matchid={matchid} accessId={user.accessId} />))}
                </tbody>
                <ButtonContainer>
                    <PrevButton onClick={PrevSearch}><IoIosArrowBack /></PrevButton>
                    <NextButton onClick={NextSearch}><IoIosArrowForward /></NextButton>
                </ButtonContainer>
            </Table>
        </RecentMatchContainer>
    );
}

export default RecentMatch;


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

const PrevButton = styled.button`
    border: none;
    outline: none;
    background-color: black;
    color: white;
    cursor: pointer;
    font-size: 2rem;
    position: relative;
    left: -600px;
    top: -250px;
`;

const NextButton = styled.button`
    border: none;
    outline: none;
    background-color: black;
    color: white;
    cursor: pointer;
    font-size: 2rem;
    position: relative;
    right: -600px;
    top: -250px;
`;

const RecentMatchContainer = styled.div`
    margin: 0 auto;
    padding: 10px;
`;

const Title = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Select = styled.select`
    border-radius: 3px;
    padding: 3px;
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