import React from 'react';
import styled from 'styled-components';

const PageUl = styled.ul`
  float:left;
  list-style: none;
  text-align:center;
  border-radius:5px;
  color:white;
  padding:1px;
  background-color: rgba( 0, 0, 0, 0.2 );
`;

const PageLi = styled.li`
  display:inline-block;
  font-size:17px;
  font-weight:600;
  padding:5px;
  border-radius:5px;
  width:25px;
  &:hover{
    cursor:pointer;
    color: black;
    background-color:rgba( 0, 0, 0, 0.2 );
  }
`;


const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
      <nav style={{ display: 'inline-block' }}>
        <PageUl>
          {pageNumbers.map(number => (
            <PageLi onClick={() => paginate(number)} key={number} >
              <span onClick={() => paginate(number)} >
                {number}
              </span>
            </PageLi>
          ))}
        </PageUl>
      </nav>
    </div>
  );
};

export default Pagination;