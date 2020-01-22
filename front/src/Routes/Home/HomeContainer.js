import React from 'react';
import HomePresenter from './HomePresenter';

const listData = [
  {
    id: 1,
    title: '제목라인1',
    link: '/',
    date: '2020-45-56',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
  },
  {
    id: 2,
    title: '제목라인2',
    link: '/',
    date: '2020-45-56',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
  },
  {
    id: 3,
    title: '제목라인3',
    link: '/',
    date: '2020-45-56',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
  },
];

const HomeContainer = () => {
  return (
    <>
      <HomePresenter listData={listData}></HomePresenter>
    </>
  );
};

export default HomeContainer;
