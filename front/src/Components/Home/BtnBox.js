import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Common/Button';

const BtnContainer = styled.div`
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  justify-content: flex-end;
`;

const BtnBox = ({ location: { pathname } }) => {
  return (
    <>
      <BtnContainer>
        {pathname === '/' ? (
          <Button to="/" color="#6c63ff">
            포스트 작성
          </Button>
        ) : (
          <Button to="/post" color="#6c63ff">
            포스트 수정
          </Button>
        )}
        <Button>포스트 수정</Button>
        <Button secondary>포스트 수정</Button>
        <Button ghost>포스트 수정</Button>
        <Button disabled>포스트 수정</Button>
      </BtnContainer>
    </>
  );
};

export default withRouter(BtnBox);
