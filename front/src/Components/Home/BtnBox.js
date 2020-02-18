import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { LOGOUT_REQUEST } from '../../modules/auths';
import Button from '../Common/Button';
import { testApi } from '../../api';

const BtnContainer = styled.div`
  width: 100%;
  /* margin-top: 15px; */
  margin-bottom: 15px;
  display: flex;
  justify-content: flex-end;
  button {
    margin: 0 10px;
  }
`;

const BtnBox = ({ location: { pathname } }) => {
  const setpathname = pathname.split('/');

  const dispatch = useDispatch();
  const logoutEvnet = () => {
    dispatch({
      type: LOGOUT_REQUEST,
    });
  };
  const apiEvent = async () => {
    try {
      // const res = await testApi.testGet();
      const { data } = await testApi.testGet();
      // console.log(res);
      console.log(data);
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  return (
    <>
      <BtnContainer>
        <Button secondary onClick={logoutEvnet}>
          로그아웃
        </Button>
        {pathname === '/' ? (
          <Button to="/write" color="#6c63ff">
            포스트 작성
          </Button>
        ) : (
          <Button
            to={`/write?id=${setpathname[2]}_${setpathname[3]}`}
            color="#6c63ff"
          >
            포스트 수정
          </Button>
        )}
        <Button onClick={apiEvent}>API 테스트</Button>
      </BtnContainer>
    </>
  );
};

export default withRouter(BtnBox);
