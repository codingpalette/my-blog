import React from 'react';
import styled from 'styled-components';
import Aside from './Aside';

const Section = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row-reverse;
  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;

const Content = styled.div`
  width: calc(100% - 255px);
`;

const MainSection = ({ children }) => {
  return (
    <>
      <Section className="max_box">
        <Content>{children}</Content>
        <Aside />
      </Section>
    </>
  );
};

export default MainSection;
