import React from 'react';
import styled from 'styled-components';
import Button from '../Common/Button';

const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  button,
  a {
    margin: 0 5px;
  }
`;

const PostBtnBox = ({ popupOpenEvent, path, postDeleteEvent }) => {
  const onClick = () => {
    popupOpenEvent();
  };
  const deleteClick = () => {
    postDeleteEvent();
  };
  return (
    <>
      <BtnBox>
        <Button to="/" ghost="true">
          취소
        </Button>
        <Button type="button" onClick={onClick}>
          {path.length > 2 ? '포스트 수정' : '포스트 작성'}
        </Button>
        {path.length > 2 && (
          <Button type="button" secondary onClick={deleteClick}>
            포스트 삭제
          </Button>
        )}
      </BtnBox>
    </>
  );
};

export default PostBtnBox;
