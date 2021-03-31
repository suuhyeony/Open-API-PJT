import React from 'react';
import { getUser, useUserDispatch, useUserState } from '../modules/UserContext';

function SearchPreview() {
    const state = useUserState();
    const { data: user, loading, error } = state.user;
    // const { user } = match.params;

    if (loading) return <div>loading</div>
    if (error) return <div>해당 유저가 없숴요</div>
    if (!user) return <></>

    return (
        <div>
            <p>{user.nickname}</p>
            <p>{user.level}</p>
            <p>{user.accessId}</p>
        </div>
    );
}

export default SearchPreview;