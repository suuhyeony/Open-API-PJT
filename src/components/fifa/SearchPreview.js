import React from 'react';
import styled from 'styled-components';


function SearchPreview({ preview }) {
    if (!preview) return <PreviewContainer>해당 구단주님이 없네요!</PreviewContainer>;
    // console.log(preview)

    return (
        <PreviewContainer>
            <p><b>구단주명:</b> {preview.nickname}</p>
            <p><b>Lv:</b> {preview.level}</p>
        </PreviewContainer>
    );
}

export default SearchPreview;


const PreviewContainer = styled.div`
    width: 500px;
    height: 100px;
    border-radius: 10px;
    margin-top: 5px;
    padding: 10px;
    box-sizing: border-box;
    background-color: #787979;
    /* border: 1px solid gray; */
    position: fixed;
    z-index: 1;
`;