import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { LOGOUT_REQUEST } from '../../modules/auths';
import Button from '../Common/Button';

const BtnContainer = styled.div`
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  justify-content: flex-end;
  button {
    margin: 0 10px;
  }
`;

const BtnBox = ({ location: { pathname } }) => {
  const dispatch = useDispatch();
  const logoutEvnet = () => {
    dispatch({
      type: LOGOUT_REQUEST,
    });
  };

  return (
    <>
      <BtnContainer>
        <Button secondary onClick={logoutEvnet}>
          로그아웃
        </Button>
        {pathname === '/' ? (
          <Button to="/create" color="#6c63ff">
            포스트 작성
          </Button>
        ) : (
          <Button to="/post" color="#6c63ff">
            포스트 수정
          </Button>
        )}
      </BtnContainer>
    </>
  );
};

export default withRouter(BtnBox);
