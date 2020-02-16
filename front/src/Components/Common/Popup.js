import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const PopupBox = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  box-sizing: border-box;
`;

const PopupBack = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const PopupContainer = styled.div`
  max-width: 768px;
  max-height: calc(100% - 30px);
  width: 100%;
  overflow: auto;
  margin: auto;
  background-color: #fff;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  z-index: 100;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const PopupContent = styled.div``;

const Title = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
`;

const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    margin: 0 5px;
  }
`;

const Explanation = styled.div`
  padding: 15px 0;
  text-align: center;
`;

const PostPopupBox = styled.div`
  margin-top: 15px;
`;

const TextareaBox = styled.textarea`
  display: block;
  width: 100%;
  background-color: #e9ecef;
  padding: 10px;
  box-sizing: border-box;
  height: 100px;
`;

const UrlBox = styled.div`
  margin-bottom: 15px;
`;

const UrlStrong = styled.strong`
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
`;

const UrlInputBox = styled.div`
  display: flex;
  padding: 10px;
  background-color: #e9ecef;
`;

const UrlInputSpan = styled.span`
  color: rgb(134, 142, 150);
`;

const UrlInput = styled.input``;

const Popup = ({
  title,
  popupCloseEvent,
  children,
  postPopup,
  category,
  urlChange,
  descriptionChange,
  description,
  url,
}) => {
  const closeClickEvnet = () => {
    popupCloseEvent();
  };

  const setUrlChange = e => {
    urlChange(e);
  };

  const setDescriptionChange = e => {
    descriptionChange(e);
  };

  return (
    <>
      <PopupBox>
        <PopupBack />
        <PopupContainer>
          <PopupContent>
            <Title>{title}</Title>
            {postPopup && (
              <PostPopupBox>
                <UrlBox>
                  <UrlStrong>URL 설정</UrlStrong>
                  <UrlInputBox>
                    <UrlInputSpan>/{category}/</UrlInputSpan>
                    <UrlInput onChange={setUrlChange} value={url} />
                  </UrlInputBox>
                </UrlBox>
                <TextareaBox
                  maxLength="150"
                  placeholder="포스트를 짧게 소개해보세요."
                  onChange={setDescriptionChange}
                  value={description}
                />
              </PostPopupBox>
            )}
            <Explanation>{children}</Explanation>
            <BtnBox>
              <Button type="button" secondary onClick={closeClickEvnet}>
                취소
              </Button>
              <Button type="submit">저장</Button>
            </BtnBox>
          </PopupContent>
        </PopupContainer>
      </PopupBox>
    </>
  );
};

export default Popup;
