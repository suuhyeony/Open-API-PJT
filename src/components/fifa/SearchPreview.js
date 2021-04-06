import React from 'react';
import styled from 'styled-components';


function SearchPreview({ preview, handleSearch }) {
    if (!preview) 
    return <PreviewContainer><p style={{ marginLeft: '15px'}}>해당 구단주님이 없네요!</p></PreviewContainer>;
    // console.log(preview)

    return (
        <>
            <PreviewContainer onClick={handleSearch}>
                <p style={{ marginLeft: '15px'}}><b>구단주명:</b> {preview.nickname}</p>
                <p style={{ marginLeft: '15px'}}><b>Lv:</b> {preview.level}</p>
            </PreviewContainer>
        </>
    );
}

export default SearchPreview;


const PreviewContainer = styled.div`
    width: 500px;
    height: 110px;
    border-radius: 10px;
    margin-top: 5px;
    /* padding: 10px; */
    box-sizing: border-box;
    background-color: #787979;
    position: absolute;
    z-index: 2;
    /* display: inline-block; */

    &:hover {
        cursor: pointer;
        background-color: #6da8f7;
    }
`;