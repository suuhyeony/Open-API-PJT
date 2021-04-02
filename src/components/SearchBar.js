import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { getUser, useUserDispatch, useUserState } from '../modules/UserContext';
import SearchPreview from './SearchPreview';
import { MdSearch } from 'react-icons/md';
import { debounce } from '../modules/debounce';


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
    justify-content: space-around;
    border-bottom: 2px solid #dee2e6;
`;

function SearchBar() {
    const [text, setText] = useState('');
    const userState = useUserState();
    const userDispatch = useUserDispatch();
    const history = useHistory();
    
    const { data: user } = userState.user;

    const onChange = (e) => {
        setText(e.target.value);
        debounce(getUser(userDispatch, e.target.value), 800);
    };

    const handleSearch = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            if (!user) alert('존재하지 않는 유저입니다.')
            else {
                history.push({
                    pathname: '/about_user',
                    state: {id: user.accessId}
                });
                setText('');
            }
        };
    }
    // console.log(state);

    return (
        <>
            <InputContainer>
                <Input type='text' placeholder='구단주명을 입력해주세요.' value={text} onChange={onChange} autoFocus onKeyUp={handleSearch} />
                <Button onClick={handleSearch}><MdSearch /></Button>
            </InputContainer>
            {text ? <SearchPreview /> : null}
        </>
    );
}

export default SearchBar;