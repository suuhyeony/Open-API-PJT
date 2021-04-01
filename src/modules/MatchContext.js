import React, { createContext, useReducer, useContext } from 'react';
import * as api from './api';
import { createAsyncDispatcher, createAsyncHandler, initialAsyncState } from './asyncActionUtils';

const initialState = {
    matches: initialAsyncState,
    match: initialAsyncState
};

const matchesHandler = createAsyncHandler('GET_MATCHES', 'matches');
const matchHandler = createAsyncHandler('GET_MATCH', 'match');

function matchReducer(state, action) {
    switch (action.type) {
        case 'GET_MATCHES':
        case 'GET_MATCHES_SUCCESS':
        case 'GET_MATCHES_ERROR':
            return matchesHandler(state, action);
        case 'GET_MATCH':
        case 'GET_MATCH_SUCCESS':
        case 'GET_MATCH_ERROR':
            return matchHandler(state, action);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

// state용과 dispatch용 context를 따로 만들기
const MatchStateContext = createContext(null);
const MatchDispatchContext = createContext(null);

export function MatchProvider({ children }) {
    const [state, dispatch] = useReducer(matchReducer, initialState);
    return (
        <MatchStateContext.Provider value={state}>
            <MatchDispatchContext.Provider value={dispatch}>
                {children}
            </MatchDispatchContext.Provider>
        </MatchStateContext.Provider>
    );
}

// state를 쉽게 조회할 수 있게 해주는 커스텀hook
export function useMatchState() {
    const state = useContext(MatchStateContext);
    if (!state) {
        throw new Error('Cannot find MatchProvider');
    }
    return state;
}

// dispatch를 쉽게 사용할 수 있게 해주는 커스텀hook
export function useMatchDispatch() {
    const dispatch = useContext(MatchDispatchContext);
    if (!dispatch) {
        throw new Error('Cannot find MatchProvider');
    }
    return dispatch;
}

export const getMatches = createAsyncDispatcher('GET_MATCHES', api.getRecentMatch);
export const getMatch = createAsyncDispatcher('GET_MATCH', api.getMatchDetail);
