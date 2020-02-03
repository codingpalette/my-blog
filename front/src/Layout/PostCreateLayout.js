import React from 'react';
import styled from 'styled-components';
import EditorForm from '../Components/Post/EditorForm';

const Section = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  box-sizing: border-box;
`;

const PostCreateLayout = () => {
  return (
    <>
      <Section className="max_box">
        <EditorForm />
      </Section>
    </>
  );
};

export default PostCreateLayout;
