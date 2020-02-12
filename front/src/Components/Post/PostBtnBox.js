import React from 'react';
import styled from 'styled-components';
import Button from '../Common/Button';

const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  button {
    margin: 0 10px;
  }
`;

const PostBtnBox = ({ popupOpenEvent }) => {
  const onClick = () => {
    popupOpenEvent();
  };
  return (
    <>
      <BtnBox>
        <Button to="/" ghost="true">
          취소
        </Button>
        <Button type="button" onClick={onClick}>
          포스트 작성
        </Button>
      </BtnBox>
    </>
  );
};

export default PostBtnBox;
