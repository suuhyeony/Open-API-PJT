import React, {useState} from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

const InputField = styled.input`
    font-family:Noto Sans KR;
    font-weight:600;
    font-size:28px;
    background-color:white;
    border-radius:10px;
    border:2px solid white;
    padding:10px;
    margin:0.8vh;
    text-align: center;
`;
const EnterButton = styled.button`
    font-family:Noto Sans KR;
    font-weight:600;
    font-size:30px;
    background-color:white;
    border-radius: 13px;
    cursor:pointer;
    width:140px;
    height:50px;
    border:none;
`;

export default function Searchbar() {

    const [username, setUsername] = useState("");
    const onChangeField = e =>{
        setUsername(e.target.value);
    }
    const handleKeyPress = e =>{
        if( e.key === "Enter" ){
            const { href } = window.location;
            window.location.href = `${ href }${username}`;
        }
    }


    return (
        <>
        <div>
            <InputField 
            type="text"
            name="username"
            value={username}
            onChange={onChangeField}
            onKeyPress={handleKeyPress}
            placeholder="라이더명을 입력해주세요."
            ></InputField>
        </div>
        <div>
            <Link to ={`kart/${username}`}>
            <EnterButton>찾기!</EnterButton>
            </Link>
        </div>
        </>
    )
}
