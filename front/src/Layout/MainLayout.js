import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Aside from '../Components/Common/Aside';
import BtnBox from '../Components/Home/BtnBox';

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
  const { isUser } = useSelector(state => state.auths);
  return (
    <>
      <Section className="max_box">
        {isUser !== '' && <BtnBox />}
        <Content>{children}</Content>
        <Aside />
      </Section>
    </>
  );
};

export default MainLayout;
