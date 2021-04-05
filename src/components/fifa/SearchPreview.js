import React from 'react';
import styled from 'styled-components';
import { getUser, useUserDispatch, useUserState } from '../../modules/fifa/UserContext';

const PreviewContainer = styled.div`
    width: 500px;
    height: 100px;
    border-radius: 10px;
    margin-top: 5px;
    padding: 10px;
    box-sizing: border-box;
    background-color: #787979;
    /* border: 1px solid gray; */
    position: fixed;
    z-index: 1;
`;

function SearchPreview() {
    const userState = useUserState();
    const { data: user, loading, error } = userState.user;
    // const { user } = match.params;

    if (loading) return <PreviewContainer>로딩중..</PreviewContainer>;
    if (error) return <PreviewContainer>해당 구단주님이 없네요!</PreviewContainer>;
    if (!user) return null;

    return (
        <PreviewContainer>
            <p><b>구단주명:</b> {user.nickname}</p>
            <p><b>Lv:</b> {user.level}</p>
        </PreviewContainer>
    );
}

export default SearchPreview;