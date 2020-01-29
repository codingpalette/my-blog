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
  border: none;
  background-color: #edf2f7;
  width: 100%;
  display: block;
  padding: 8px 16px;
  box-sizing: border-box;
  outline: none;
  margin-bottom: 10px;
  &:focus {
    outline: 1px solid #6c63ff;
  }
  &::placeholder {
    color: #4a5568;
  }
  @media (prefers-color-scheme: dark) {
    background-color: #333;
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
              <Button ghost="true" to={'/signup'}>
                회원가입
              </Button>
            ) : (
              <Button ghost="true" to={'/login'}>
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
