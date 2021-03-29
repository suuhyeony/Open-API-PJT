import React from 'react';
import styled from 'styled-components';
import fifa_logo from '../img/fifa_logo.JPG';
import { MdSearch } from 'react-icons/md';

const SearchContainer = styled.div`
    width: 500px;
    height: 400px;
    margin: 0 auto;
    padding: 60px;
`;

const Logo = styled.img`
    width: 80%;
    display: block;
    margin: 0 auto;
    padding: 10px;
    cursor: pointer;
`;

const Input = styled.input`
    padding: 12px;
    /* border-radius: 4px; */
    /* border: 1px solid #dee2e6; */
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
    return (
        <SearchContainer>
            <Logo src={fifa_logo}></Logo>
            <InputContainer>
                <Input type='text' placeholder='구단주명을 입력해주세요.' autoFocus></Input>
                <Button><MdSearch /></Button>
            </InputContainer>
        </SearchContainer>
    );
}

export default SearchBar;