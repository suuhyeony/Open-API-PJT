import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { getUser, useUserDispatch, useUserState } from '../modules/UserContext';
import SearchPreview from './SearchPreview';
import { MdSearch } from 'react-icons/md';

const SearchContainer = styled.div`
    width: 500px;
    height: 200px;
    margin: 0 auto;
    padding: 30px;
`;

const Input = styled.input`
    padding: 12px;
    width: 100%;
    outline: none;
    border: none;
    font-size: 15px;
    color: #dee2e6;
    box-sizing: border-box;
    background: #000000;
`;

const Button = styled.button`
    border: none;
    outline: none;
    font-size: 25px;
    background: #000000;
    color: #dee2e6;
    cursor: pointer;
`;

const InputContainer = styled.div`
    display: flex;
    border-bottom: 2px solid #dee2e6;
`;

function SearchBar() {
    const [text, setText] = useState('');
    // const state = useUserState();
    const dispatch = useUserDispatch();
    const history = useHistory();
    
    const onChange = async (e) => {
        await setText(e.target.value);
        getUser(dispatch, e.target.value)
    };

    const handleSearch = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            // history.push('/about_user');
            setText('');
        };
    }

    return (
        <SearchContainer>
            <InputContainer>
                <Input type='text' placeholder='구단주명을 입력해주세요.' value={text} onChange={onChange} autoFocus onKeyUp={handleSearch} />
                <Button onClick={handleSearch}><MdSearch /></Button>
            </InputContainer>
            <SearchPreview></SearchPreview>
        </SearchContainer>
    );
}

export default SearchBar;