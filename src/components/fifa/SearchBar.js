import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import SearchPreview from './SearchPreview';
import { MdSearch } from 'react-icons/md';
import { getUserId } from '../../modules/fifa/api';


function SearchBar() {
    const [text, setText] = useState('');
    const [timer, setTimer] = useState(0);
    const [preview, setPreview] = useState(null);
    const history = useHistory();
    
    const onChange = async (e) => {
        await setText(e.target.value);
        // checkUsername(e.target.value)
        if (timer) {
            clearTimeout(timer);
        }
        const newTimer = setTimeout(async () => {
            try {
                setPreview(await getUserId(e.target.value));
            } catch (error) {
                console.log(error);
            }
        }, 500);
        setTimer(newTimer);
    };
    
    const handleSearch = async (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            await getUserId(text);
            history.push({
                pathname: '/fifa_about_user',
                state: {user: preview}
            });
            setText('');
        };
    }


    return (
        <>
            <InputContainer>
                <Input type='text' placeholder='구단주명을 입력해주세요.' value={text} onChange={onChange} autoFocus onKeyUp={handleSearch} />
                <Button onClick={handleSearch}><MdSearch /></Button>
            </InputContainer>
            {text ? <SearchPreview preview={preview} /> : null}
        </>
    );
}

export default SearchBar;


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