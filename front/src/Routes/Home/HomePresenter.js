import React from 'react';
import Header from '../../Components/Common/Header';
import MainSection from '../../Components/Common/MainSection';
import HomeList from '../../Components/Home/HomeList';

const HomePresenter = () => {
  return (
    <>
      <Header />
      <MainSection>
        <HomeList />
      </MainSection>
    </>
  );
};

export default HomePresenter;
