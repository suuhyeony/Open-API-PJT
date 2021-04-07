import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import SearchPreview from './SearchPreview';
import { MdSearch } from 'react-icons/md';
import { getUserId } from '../../modules/fifa/api';


function SearchBar({ isHome }) {
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
                setPreview(null);
                console.log(error);
            }
        }, 300);
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
        <Box style={isHome ? {width: '500px'} : {width: '237.8px'}}>
            <InputContainer>
                <Input type='text' placeholder='구단주명을 입력해주세요.' value={text} onChange={onChange} autoFocus onKeyUp={handleSearch} />
                <Button onClick={handleSearch}><MdSearch /></Button>
            </InputContainer>
            {text ? <SearchPreview preview={preview} handleSearch={handleSearch} isHome={isHome} /> : null}
        </Box>
    );
}

export default SearchBar;

const Box = styled.div`
    position: absolute;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px;
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