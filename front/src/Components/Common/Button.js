import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const buttonStyle = css`
  display: inline-block;
  line-height: 1.5;
  font-size: 14px;
  transition: 0.2s;
  padding: 10px 16px;
  min-width: 64px;
  text-align: center;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: #efeeee;
  box-shadow: 3px 3px 6px #cbcaca, -3px -3px 6px #ffffff;
  &:hover {
    box-shadow: inset 3px 3px 6px #cbcaca, inset -3px -3px 6px #ffffff;
  }
  @media (prefers-color-scheme: dark) {
    background-color: #262a3c;
    box-shadow: 4px 4px 7px #171924, -2px -2px 5px #353b54;
    &:hover {
      box-shadow: inset 4px 4px 7px #171924, inset -2px -2px 5px #353b54;
    }
  }

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      display: block;
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = props => {
  return (
    <>{props.to ? <StyledLink {...props} /> : <StyledButton {...props} />}</>
  );
};

export default Button;
