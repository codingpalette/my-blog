import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const buttonStyle = css`
  border: 1px solid #555;
  padding: 5px 8px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1;
  display: inline-block;
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      display: block;
    `}
  @media (prefers-color-scheme: dark) {
    border: 1px solid #fff;
    background-color: #1f2023;
  }
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = props => {
  return (
    <>
      {console.log(props)}
      {props.to ? <StyledLink {...props} /> : <StyledButton {...props} />}
    </>
  );
};

export default Button;
