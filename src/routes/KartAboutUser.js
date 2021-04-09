import React , {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from "styled-components";
import {useParams} from 'react-router-dom'
import {getUserId} from '../modules/kart/api'
import UserInfo from '../components/kart/UserInfo'
import TabMenu from '../components/TabMenu';
import Footer from '../components/Footer';

const Contents = styled.div`
    position: relative;
    background-color: #5383E8;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Subtitle = styled.div`
    font-size: 16px;
    padding:12px;
    background-color:#284C7D;
    color:white;
    font-weight: 500;
`;

const NickName = styled.span`
    margin-left:5%;
    font-weight:700;
`;
const Span = styled.span`
    font-weight:300;
`;

const HomeButton = styled.button`
    position: relative;
    margin-right:10%;
    float:right;
    border:none;
    outline:none;
    background:none;
    color:white;
    cursor:pointer;
    font-weight:700;
    font-size:14px;
    margin-bottom:3px;
`;


export default () => {

    const { usrName } = useParams(); 
    const [userId, setUserId] = useState('')
    const [loading, setLoading] = useState(null)
    
    useEffect(async () => {
            setUserId(await getUserId(usrName))
    }, [])
    
    //console.log(userId)
    const usrId = userId.accessId
    //console.log(usrId)

    return (
        <>
        <TabMenu />
        <Subtitle>
        <NickName style={{ color: '#57E7FA' }}>{usrName}</NickName>
        <Span color={'white'}>님 검색결과(최근 100경기)</Span>
        <Link to={'/kart/'}>
            <HomeButton>홈으로</HomeButton>
        </Link>
        </Subtitle>
        <Contents>
        <div>
            { loading && (
                <>
                    <p> 로딩 중 ...</p>
                </>
            )}
            { usrId && (
                <>
                    <UserInfo usrId={usrId} nickname={usrName}></UserInfo>
                </>
            )}
            { !usrId &&(
                <>
                    <h1> 사용자가 없습니다 </h1>
                </>
            )}

            
        </div>
        <Footer />
        </Contents>
        </>
        )
    }


