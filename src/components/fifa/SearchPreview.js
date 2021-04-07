import React from 'react';
import styled from 'styled-components';


function SearchPreview({ preview, handleSearch, isHome }) {
    if (!preview) 
    return (
        <>
            <PreviewContainer><p style={{ marginLeft: '15px'}}>해당 구단주님이 없네요!</p></PreviewContainer>
        </>
    );
    // console.log(preview)

    return (
        <>
            <PreviewContainer onClick={handleSearch} style={isHome ? {width: '500px'} : {width: '237.8px'}}>
                <p style={{ marginLeft: '15px'}}><b>구단주명:</b> {preview.nickname}</p>
                <p style={{ marginLeft: '15px'}}><b>Lv:</b> {preview.level}</p>
            </PreviewContainer>
        </>
    );
}

export default SearchPreview;


const PreviewContainer = styled.div`
    /* width: 100%; */
    height: 110px;
    border-radius: 10px;
    /* margin-top: 5px; */
    box-sizing: border-box;
    background-color: #787979;
    position: relative;
    z-index: 2;

    &:hover {
        cursor: pointer;
        background-color: #6da8f7;
    }
`;