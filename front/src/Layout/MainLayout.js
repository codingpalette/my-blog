import React from 'react';
import styled from 'styled-components';
import Aside from '../Components/Common/Aside';

const Section = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row-reverse;
  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;

const Content = styled.div`
  width: calc(100% - 255px);
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const MainLayout = ({ children }) => {
  return (
    <>
      <Section className="max_box">
        <Content>{children}</Content>
        <Aside />
      </Section>
    </>
  );
};

export default MainLayout;
