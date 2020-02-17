import React, { Suspense, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../Components/Common/Header';
const PostCreateLayout = lazy(() => import('../../Layout/PostCreateLayout'));

const PostCreatePresenter = () => {
  return (
    <>
      <Suspense fallback={<Header />}>
        <Header />
        <PostCreateLayout></PostCreateLayout>
      </Suspense>
    </>
  );
};

export default PostCreatePresenter;
