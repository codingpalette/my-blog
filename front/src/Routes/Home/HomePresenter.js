import React from 'react';
import Header from '../../Components/Common/Header';
import MainSection from '../../Components/Common/MainSection';
import HomeList from '../../Components/Home/HomeList';

const HomePresenter = ({ listData }) => {
  return (
    <>
      <Header />
      <MainSection>
        {listData &&
          listData.length > 0 &&
          listData.map(item => (
            <HomeList
              key={item.id}
              title={item.title}
              link={item.link}
              date={item.date}
              text={item.text}
            />
          ))}
      </MainSection>
    </>
  );
};

export default HomePresenter;
