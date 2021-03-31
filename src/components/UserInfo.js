import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useUserDispatch, useUserState, getUserId } from '../modules/UserContext';

const UserInfoContainer = styled.div`
    width: 200px;
    height: 100px;
    background-color: gray;
    border-radius: 20px;
`;

function UserInfo({ accessId }) {
    const state = useUserState();
    const dispatch = useUserDispatch();
    // console.log(accessId);

    useEffect(() => {
        getUserId(dispatch, accessId);
        // console.log('hey');
    }, [accessId]);

    const { data: id } = state.id;
    // console.log(id);

    return (
        <UserInfoContainer>
            {id && <p>{id.level}</p>}
            {id && <p>{id.nickname}</p>}
        </UserInfoContainer>
    );
}

export default UserInfo;