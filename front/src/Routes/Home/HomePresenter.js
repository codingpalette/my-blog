import React from 'react';
import Header from '../../Components/Common/Header';
import MainLayout from '../../Layout/MainLayout';
import HomeList from '../../Components/Home/HomeList';

const HomePresenter = ({ listData }) => {
  return (
    <>
      <Header />
      <MainLayout>
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
      </MainLayout>
    </>
  );
};

export default HomePresenter;
