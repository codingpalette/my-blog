import React from 'react';
import styled from 'styled-components';
import EditorBox from '../Components/Post/EditorBox';

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
      </Section>
    </>
  );
};

export default PostCreateLayout;
