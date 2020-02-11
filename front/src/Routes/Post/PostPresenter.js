import React, { Suspense } from 'react';
import styled from 'styled-components';
import Header from '../../Components/Common/Header';
import { Oval } from 'svg-loaders-react';
import MainLayout from '../../Layout/MainLayout';
import PostView from '../../Components/Post/PostView';

const LoadingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
`;

const PostPresenter = ({ viewLoding }) => {
  return (
    <>
      <Suspense fallback={<Header />}>
        <Header />
        <MainLayout>
          {viewLoding ? (
            <LoadingBox>
              <Oval stroke="#6c63ff" strokeWidth="2" width="50" height="50" />
            </LoadingBox>
          ) : (
            <div className="content_box">
              <PostView />
            </div>
          )}
        </MainLayout>
      </Suspense>
    </>
  );
};

export default PostPresenter;
