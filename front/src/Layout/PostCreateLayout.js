import React from 'react';
import styled from 'styled-components';
import EditorBox from '../Components/Post/EditorBox';
import PostBtnBox from '../Components/Post/PostBtnBox';

const Section = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  box-sizing: border-box;
`;

const PostCreateLayout = () => {
  return (
    <>
      <Section className="max_box">
        <EditorBox />
        <PostBtnBox />
      </Section>
    </>
  );
};

export default PostCreateLayout;
