import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { LOGOUT_REQUEST } from '../../modules/auths';
import { ALERT_SUCCESS, ALERT_FAILURE } from '../../modules/alerts';
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

  const onClick = () => {
    dispatch({
      type: ALERT_SUCCESS,
    });
    setTimeout(() => {
      dispatch({
        type: ALERT_FAILURE,
      });
    }, 3000);
  };
  return (
    <>
      <BtnContainer>
        <Button secondary onClick={logoutEvnet}>
          로그아웃
        </Button>
        {pathname === '/' ? (
          <Button to="/" color="#6c63ff" onClick={onClick}>
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
