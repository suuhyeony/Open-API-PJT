import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/fifa/SearchBar';
import styled from 'styled-components';
import UserInfo from '../components/fifa/UserInfo';
import UserTopLevel from '../components/fifa/UserTopLevel';
import RecentMatch from '../components/fifa/RecentMatch';
import TabMenu from '../components/TabMenu';
import Footer from '../components/Footer';


function FifaAboutUser() {
    const location = useLocation();
    const user = location.state.user;


    if (!user) return <SimpleInfo>해당 구단주님이 없네요!</SimpleInfo>;
    return (
        <>
            <TabMenu />
            <Container>
                <HeaderContainer>
                    <InputContainer>
                        <SearchBar isHome={false} />
                    </InputContainer>
                </HeaderContainer>
                <SimpleInfo>
                    <UserInfo user={user}></UserInfo>
                    <UserTopLevel user={user}></UserTopLevel>
                </SimpleInfo>
                <RecentMatch user={user}></RecentMatch>
            </Container>
            <FooterContainer><Footer /></FooterContainer>
        </>
    );
}

export default FifaAboutUser;


const FooterContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    margin-top: 100px;
    text-align: center;
    color: #ffffff;
`;

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    color: #e9e6e6;
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 30px;
`;

const InputContainer = styled.div`
    width: 250px;
    margin-right: 20px;
    padding: 10px;
`;

const SimpleInfo = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 30px;
    /* margin-top: 30px; */
    margin-bottom: 10px;
    z-index: 1;
`;