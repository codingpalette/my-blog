import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';

const up = keyframes`
  0%{
    transform:translate(-50% , 50%);
    opacity: 0;
  }
  100%{
    transform:translate(-50% , 0);
    opacity: 1;
  }
`;

const Alert = styled.div`
  position: fixed;
  z-index: 2000;
  left: 50%;
  bottom: 5%;
  min-width: 150px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  background-color: rgb(253, 236, 234);
  color: #f50057;
  padding: 6px 16px;
  font-size: 13px;
  transform: translateX(-50%);
  transition: opacity 0.3s;
  animation: ${up} 0.5s;
`;

const AlertBox = ({ children }) => {
  const { isError } = useSelector(state => state.alerts);
  return <>{isError === 'on' && <Alert error={isError}>{children}</Alert>}</>;
};

export default AlertBox;
