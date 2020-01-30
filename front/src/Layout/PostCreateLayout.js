import React from 'react';
import styled from 'styled-components';
import EditorForm from '../Components/Post/EditorForm';

const Section = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
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
