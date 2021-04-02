import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useUserDispatch, useUserState, getUserId } from '../modules/UserContext';
import { CgProfile } from 'react-icons/cg';

const UserInfoContainer = styled.div`
    width: 350px;
    height: 130px;
    /* background-color: #5B5C5D; */
    border: 1px solid gray;
    border-radius: 20px;
    box-shadow: 0 0 10px 2px rgba(218, 218, 218, 0.3);
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
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

function UserInfo({ accessId }) {
    const userState = useUserState();
    const userDispatch = useUserDispatch();
    // console.log(accessId);

    useEffect(() => {
        getUserId(userDispatch, accessId);
        // console.log('hey');
    }, [accessId]);

    const { data: id } = userState.id;
    // console.log(id);

    return (
        <UserInfoContainer>
            <Contents>
                <Profile><CgProfile /></Profile>
                <Text>
                    {id && <p style={{fontSize: '20px', marginBottom: '0px'}}>Lv.{id.level}</p>}
                    {id && <p style={{marginTop: '1px'}}><b>"{id.nickname}"</b> 구단주님</p>}
                </Text>
            </Contents>
        </UserInfoContainer>
    );
}

export default UserInfo;