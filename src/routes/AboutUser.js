import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
import UserInfo from '../components/UserInfo';
import UserTopLevel from '../components/UserTopLevel';
import RecentMatch from '../components/RecentMatch';
import Footer from '../components/Footer';

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

const SimpleInfo = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 30px;
`;

const FooterContainer = styled.div`
    bottom: 0;
    width: 100%;
    padding: 10px 0;
    text-align: center;
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
            <SimpleInfo>
                <UserInfo accessId={id}></UserInfo>
                <UserTopLevel accessId={id}></UserTopLevel>
            </SimpleInfo>
            <RecentMatch accessId={id}></RecentMatch>
            <FooterContainer><Footer /></FooterContainer>
        </>
    );
}

export default AboutUser;