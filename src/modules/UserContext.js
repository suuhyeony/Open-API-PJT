import React, { createContext, useReducer, useContext } from 'react';
import * as api from './api';
import { createAsyncDispatcher, createAsyncHandler, initialAsyncState } from './asyncActionUtils';

const initialState = {
    user: initialAsyncState
};

const userHandler = createAsyncHandler('GET_USER', 'user');

function userReducer(state, action) {
    switch (action.type) {
        case 'GET_USER':
        case 'GET_USER_SUCCESS':
        case 'GET_USER_ERROR':
            return userHandler(state, action);
        default:
            throw new Error('Unhandled action type', action.type);
    }
}

// state용과 dispatch용 context를 따로 만들기
const UserStateContext = createContext(null);
const UserDispatchContext = createContext(null);

export function UserProvider({ children }) {
    const [state, dispatch] = useReducer(userReducer, initialState);
    return (
        <UserStateContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    );
}

// state를 쉽게 조회할 수 있게 해주는 커스텀hook
export function useUserState() {
    const state = useContext(UserStateContext);
    if (!state) {
        throw new Error('Cannot find UserProvider');
    }
    return state;
}

// dispatch를 쉽게 사용할 수 있게 해주는 커스텀hook
export function useUserDispatch() {
    const dispatch = useContext(UserDispatchContext);
    if (!dispatch) {
        throw new Error('Cannot find UserProvider');
    }
    return dispatch;
}

export const getUser = createAsyncDispatcher('GET_USER', api.getUserId);
