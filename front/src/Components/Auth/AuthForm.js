import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import Button from '../Common/Button';

const FormContainer = styled.div`
  max-width: 360px;
  width: 100%;
  h1 {
    text-align: center;
    margin-bottom: 15px;
  }
`;

const Input = styled.input`
  display: block;
  border: 1px solid #555;
  outline: none;
  padding: 5px;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 10px;
  @media (prefers-color-scheme: dark) {
    border: 1px solid #fff;
    background-color: #1f2023;
  }
`;

const AuthForm = ({ location: { pathname } }) => {
  return (
    <>
      <FormContainer className="content_box">
        <h1>
          <Link to="/">로고</Link>
        </h1>
        <form>
          <Input type="text" placeholder="아이디" />
          <Input type="password" placeholder="비밀번호" />
          {pathname === '/signup' && (
            <Input type="password" placeholder="비밀번호 확인" />
          )}
          <div style={{ textAlign: 'right' }}>
            {pathname === '/login' ? (
              <Button ghost to={'/signup'}>
                회원가입
              </Button>
            ) : (
              <Button ghost to={'/login'}>
                로그인
              </Button>
            )}
          </div>
          {pathname === '/login' ? (
            <Button fullWidth style={{ marginTop: '10px' }}>
              로그인
            </Button>
          ) : (
            <Button fullWidth style={{ marginTop: '10px' }}>
              회원가입
            </Button>
          )}
        </form>
      </FormContainer>
    </>
  );
};

export default withRouter(AuthForm);
