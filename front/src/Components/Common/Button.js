import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const buttonStyle = css`
  display: inline-block;
  line-height: 1.5;
  font-size: 13px;
  transition: 0.2s;
  padding: 6px 16px;
  min-width: 64px;
  text-align: center;
  color: #fff;
  background-color: #6c63ff;
  &:focus {
    background-color: #5b54d8;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 -1px 0.5px 0 rgba(0, 0, 0, 0.09);
  }
  &:hover {
    background-color: #5b54d8;
  }
  &:active {
    background-color: #4e48b7;
  }
  ${props =>
    props.secondary &&
    css`
      background-color: #f50057;
      &:focus {
        background-color: #d6004b;
      }
      &:hover {
        background-color: #d6004b;
      }
      &:active {
        background-color: #b7003e;
      }
    `}
  ${props =>
    props.ghost &&
    css`
      color: #6c63ff;
      background-color: transparent;
      &:focus {
        background-color: rgba(0, 0, 0, 0.04);
        box-shadow: none;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
        color: #5b54d8;
      }
      &:active {
        background-color: transparent;
      }
    `}
  ${props =>
    props.disabled &&
    css`
      pointer-events: none;
      color: #8d8d8d;
      background-color: #c6c6c6;
      &:focus {
        background-color: #c6c6c6;
      }
      &:hover {
        background-color: #c6c6c6;
      }
      &:active {
        background-color: #c6c6c6;
      }
    `}
    ${props =>
      props.fullWidth &&
      css`
        width: 100%;
        display: block;
        & + & {
          margin-top: 15px;
        }
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
