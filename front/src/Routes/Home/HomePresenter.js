import React, { Suspense, lazy } from 'react';
import Header from '../../Components/Common/Header';
import HomeList from '../../Components/Home/HomeList';
const MainLayout = lazy(() => import('../../Layout/MainLayout'));

const HomePresenter = ({ listData }) => {
  return (
    <>
      <Suspense fallback={<Header />}>
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
      </Suspense>
    </>
  );
};

export default HomePresenter;
