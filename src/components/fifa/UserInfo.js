import React from 'react';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import { Avatar } from '@material-ui/core'


function UserInfo({ user }) {
    return (
        <UserInfoContainer>
            <Contents>
                <Avatar><CgProfile style={{color:'black'}} /></Avatar>
                <Text>
                    {user && <p style={{fontSize: '20px', marginBottom: '0px'}}>Lv.{user.level}</p>}
                    {user && <p style={{marginTop: '1px'}}><b>"{user.nickname}"</b> 구단주님</p>}
                </Text>
            </Contents>
        </UserInfoContainer>
    );
}

export default UserInfo;


const UserInfoContainer = styled.div`
    width: 350px;
    height: 130px;
    /* background-color: #5B5C5D; */
    border: 1px solid gray;
    border-radius: 10px;
    box-shadow: 0 0 10px 2px rgba(218, 218, 218, 0.3);
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

const Contents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 10px; */
`;

const Profile = styled.div`
    font-size: 60px;
    color: #c2c3c5;
    padding: 8px;
    margin-left: 5px;
    margin-right: 20px;
`;

const Text = styled.div`
    padding: 10px;
`;