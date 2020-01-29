import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPresenter from './LoginPresenter';

const LoginContainer = ({ history }) => {
  const { isUser } = useSelector(state => state.auths);
  // 로그인 여부
  useEffect(() => {
    if (isUser !== '') {
      history.push('/'); // 메인 화면으로 이동
    }
  }, [isUser, history]);
  return (
    <>
      <LoginPresenter></LoginPresenter>
    </>
  );
};

export default withRouter(LoginContainer);
