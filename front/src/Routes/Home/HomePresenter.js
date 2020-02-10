import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import Header from '../../Components/Common/Header';
import HomeList from '../../Components/Home/HomeList';
import { Oval } from 'svg-loaders-react';
const MainLayout = lazy(() => import('../../Layout/MainLayout'));

const LoadingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
`;

const HomePresenter = ({ listData }) => {
  return (
    <>
      <Suspense fallback={<Header />}>
        <Header />
        <MainLayout>
          {listData && listData.length > 0 ? (
            listData.map(item => (
              <HomeList
                key={item.id}
                title={item.title}
                category={item.category}
                name={item.name}
                date={item.date}
                description={item.description}
              />
            ))
          ) : (
            <LoadingBox>
              <Oval stroke="#6c63ff" strokeWidth="2" width="50" height="50" />
            </LoadingBox>
          )}
        </MainLayout>
      </Suspense>
    </>
  );
};

export default HomePresenter;
