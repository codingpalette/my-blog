import React from 'react';
import styled from 'styled-components';
import AuthForm from '../Components/Auth/AuthForm';

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AuthLayout = () => {
  return (
    <>
      <Container>
        <AuthForm />
      </Container>
    </>
  );
};

export default AuthLayout;
