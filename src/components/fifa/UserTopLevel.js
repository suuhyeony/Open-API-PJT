import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineTrophy } from 'react-icons/ai';
import { getUserTopLevel } from '../../modules/fifa/api';
import { Avatar } from '@material-ui/core'


function UserTopLevel({ user }) {
    const [top, setTop] = useState(null);
    
    useEffect(async () => {
        setTop(await getUserTopLevel(user.accessId));
    }, [user.accessId]);
    
    if (!top) return <></>;
    if (Array.isArray(top) && top.length === 0) 
    return (
        <UserTopContainer>
            <Contents>
                <Avatar><AiOutlineTrophy /></Avatar>
                <Text>
                    <p style={{marginBottom: '0px', fontSize: '13px'}}><b>역대 최고등급</b></p>
                    <p style={{marginTop: '1px'}}>"최고등급 미달성"</p>
                </Text>
            </Contents>
        </UserTopContainer>);
    // console.log(top);
    
    return (
        <UserTopContainer>
            <Contents>
                <Avatar><AiOutlineTrophy style={{color:'black'}} /></Avatar>
                <Text>
                    <p style={{marginBottom: '0px', fontSize: '13px'}}><b>역대 최고등급</b></p>
                    {top && 
                    <p style={{marginTop: '1px'}}>
                        <b>"{divisionNameList.filter(dvName => dvName.divisionId === top[0].division)[0].divisionName}"</b>
                    </p>}
                </Text>
            </Contents>
        </UserTopContainer>
    );
}

export default UserTopLevel;


const UserTopContainer = styled.div`
    width: 350px;
    height: 130px;
    /* background-color: #5B5C5D; */
    border: 1px solid gray;
    border-radius: 10px;
    box-shadow: 0 0 10px 2px rgba(218, 218, 218, 0.3);
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
    align-items: center;
`;

const Contents = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const Text = styled.div`
    padding: 10px;
`;

const divisionNameList = [
    {
        "divisionId": 800,
        "divisionName": "슈퍼챔피언스"
    },{
        "divisionId": 900,
        "divisionName": "챔피언스"
    },{
        "divisionId": 1000,
        "divisionName": "슈퍼챌린지"
    },{
        "divisionId": 1100,
        "divisionName": "챌린지1"
    },{
        "divisionId": 1200,
        "divisionName": "챌린지2"
    },{
        "divisionId": 1300,
        "divisionName": "챌린지3"
    },{
        "divisionId": 2000,
        "divisionName": "월드클래스1"
    },{
        "divisionId": 2100,
        "divisionName": "월드클래스2"
    },{
        "divisionId": 2200,
        "divisionName": "월드클래스3"
    },{
        "divisionId": 2300,
        "divisionName": "프로1"
    },{
        "divisionId": 2400,
        "divisionName": "프로2"
    },{
        "divisionId": 2500,
        "divisionName": "프로3"
    },{
        "divisionId": 2600,
        "divisionName": "세미프로1"
    },{
        "divisionId": 2700,
        "divisionName": "세미프로2"
    },{
        "divisionId": 2800,
        "divisionName": "세미프로3"
    },{
        "divisionId": 2900,
        "divisionName": "유망주1"
    },{
        "divisionId": 3000,
        "divisionName": "유망주2"
    },{
        "divisionId": 3100,
        "divisionName": "유망주3"
    }
]