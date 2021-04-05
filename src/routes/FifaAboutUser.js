import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/fifa/SearchBar';
import styled from 'styled-components';
import UserInfo from '../components/fifa/UserInfo';
import UserTopLevel from '../components/fifa/UserTopLevel';
import RecentMatch from '../components/fifa/RecentMatch';
import TabMenu from '../components/TabMenu';


const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    /* padding: 10px; */
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
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
    margin-bottom: 20px;
`;


function FifaAboutUser() {
    const location = useLocation();
    const id = location.state.id;
    console.log(id);
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
                    <UserInfo accessId={id}></UserInfo>
                    <UserTopLevel accessId={id}></UserTopLevel>
                </SimpleInfo>
                <RecentMatch accessId={id}></RecentMatch>
            </Container>
        </>
    );
}

export default FifaAboutUser;