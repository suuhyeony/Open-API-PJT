import React from 'react';
import styled from 'styled-components';


function SearchPreview({ preview, handleSearch, isHome, isKey }) {
    if (!preview) 
    return (
        <>
            <Container>
                <p style={{ marginLeft: '15px', padding: '10px', marginTop: '10px'}}>해당 구단주님이 없네요!</p>
            </Container>
        </>
    );
    // console.log(preview)

    return (
        <>
            <PreviewContainer onClick={handleSearch} style={isHome ? {width: '500px'} : {width: '237.8px'}, isKey ? {backgroundColor: '#6da8f7'} : {}}>
                <div style={{ padding: '10px', marginTop: '10px'}}>
                    <p style={{ marginLeft: '15px'}}><b>구단주명:</b> {preview.nickname}</p>
                    <p style={{ marginLeft: '15px'}}><b>Lv:</b> {preview.level}</p>
                </div>
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

const Container = styled.div`
    /* width: 100%; */
    height: 110px;
    border-radius: 10px;
    /* margin-top: 5px; */
    box-sizing: border-box;
    background-color: #787979;
    position: relative;
    z-index: 2;
`;