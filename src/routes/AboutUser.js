import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
import UserInfo from '../components/UserInfo';
import UserTopLevel from '../components/UserTopLevel';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const InputContainer = styled.div`
    width: 250px;
    display: inline;
    margin-top: 10px;
    margin-right: 20px;
    padding: 10px;
`;

function AboutUser() {
    const location = useLocation();
    const id = location.state.id;
    // console.log(id);
    return (
        <>
            <HeaderContainer>
                <Link to='/'><Logo></Logo></Link>
                <InputContainer>
                    <SearchBar />
                </InputContainer>
            </HeaderContainer>
            <h1>유저 상세페이지</h1>
            <UserInfo accessId={id}></UserInfo>
            <UserTopLevel accessId={id}></UserTopLevel>
        </>
    );
}

export default AboutUser;