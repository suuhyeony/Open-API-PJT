import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/fifa/SearchBar';
import styled from 'styled-components';
import UserInfo from '../components/fifa/UserInfo';
import UserTopLevel from '../components/fifa/UserTopLevel';
import RecentMatch from '../components/fifa/RecentMatch';
import TabMenu from '../components/TabMenu';


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
                        <SearchBar />
                    </InputContainer>
                </HeaderContainer>
                <SimpleInfo>
                    <UserInfo user={user}></UserInfo>
                    <UserTopLevel user={user}></UserTopLevel>
                </SimpleInfo>
                <RecentMatch user={user}></RecentMatch>
            </Container>
        </>
    );
}

export default FifaAboutUser;


const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    /* padding: 10px; */
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
`;

const InputContainer = styled.div`
    width: 250px;
    margin-top: 10px;
    margin-right: 20px;
    /* margin: 0 auto; */
    padding: 10px;
`;

const SimpleInfo = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 30px;
    margin-bottom: 20px;
    z-index: 1;
`;