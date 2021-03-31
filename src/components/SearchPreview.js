import React from 'react';
import styled from 'styled-components';
import { getUser, useUserDispatch, useUserState } from '../modules/UserContext';

const PreviewContainer = styled.div`
    width: 500px;
    height: 100px;
    border-radius: 10px;
    margin-top: 5px;
    padding: 10px;
    box-sizing: border-box;
    background-color: gray;
`;

function SearchPreview() {
    const state = useUserState();
    const { data: user, loading, error } = state.user;
    // const { user } = match.params;

    if (loading) return <PreviewContainer>loading</PreviewContainer>;
    if (error) return <PreviewContainer>해당 구단주님이 없네요!</PreviewContainer>;
    if (!user) return null;

    return (
        <PreviewContainer>
            <p><b>닉네임:</b> {user.nickname}</p>
            <p><b>Lv:</b> {user.level}</p>
            {/* <p>accessId: {user.accessId}</p> */}
        </PreviewContainer>
    );
}

export default SearchPreview;