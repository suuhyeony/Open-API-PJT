import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getRecentMatch } from '../../modules/fifa/api';
import MatchTableRow from './MatchTableRow';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
// import { CircularProgress } from '@material-ui/core';


function RecentMatch({ user }) {
    const [matchType, setMatchType] = useState(50);
    const [matches, setMatches] = useState(null);
    const [count, setCount] = useState(0);

    const typeChange = async (e) => {
        await setMatchType(parseInt(e.target.value));
    };

    const update = async (num) => {
        setMatches(await getRecentMatch(user.accessId, matchType, count+num, 10))
    }

    const PrevSearch = () => {
        if (count === 0) {
            alert('이전 경기가 없습니다!');
        } else {
            update(-10)
            setCount(count - 10);
        }
    } 

    const NextSearch = () => {
        update(10);
        setCount(count + 10);
    }

    useEffect(() => {
        setCount(0);
        update(0);
    }, [matchType, user]);

    return (
        <RecentMatchContainer>
            <Title>
                <h2 style={{marginRight: '20px', marginLeft: '70px'}}>최근 경기</h2>
                <Select name="matchtype" id="dropDown" value={matchType} onChange={typeChange}>
                    {matchTypeList.map(type => (<option key={type.matchtype} value={type.matchtype}>{type.desc}</option>))}
                </Select>
            </Title>
            {(!matches||!matches.length) ? 
            <div style={{height:'60px'}}>
                <p style={{textAlign:'center', marginTop: '100px'}}>매치 기록이 없습니다</p>
            </div> :
            <Table>
                <thead>
                    <tr>
                        <MainTh>경기날짜</MainTh>
                        <MainTh>결과</MainTh>
                        <MainTh>스코어</MainTh>
                        <MainTh>상대팀</MainTh>
                        <MainTh>경기 평점</MainTh>
                        <MainTh>기록 보기</MainTh>
                        <MainTh>선수 보기</MainTh>
                    </tr>
                </thead>
                <tbody>
                    {matches && matches.map(matchid => (<MatchTableRow key={matchid} matchid={matchid} accessId={user.accessId} />))}
                </tbody>    
                <ButtonContainer>
                    <PrevButton onClick={PrevSearch}><IoIosArrowBack /></PrevButton>
                    <NextButton onClick={NextSearch}><IoIosArrowForward /></NextButton>
                </ButtonContainer>
            </Table>}
            {(!matches||!matches.length) ? <></> : <p style={{textAlign:'center', marginTop:'30px'}}>{parseInt((count+10)/10)} page</p>}   
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
    height:30px;
    padding: 3px;
    color: #ebe8e8;
    background-color: #1d1e1f;
    &:hover {
        background-color: #2b2d30;
    }
`;

const Table = styled.table`
    width: 100%;
    margin: 0 auto;
    border-collapse: collapse;
    text-align: center;
    border: none;
`;

const MainTh = styled.th`
    border: none;
    padding: 10px;
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