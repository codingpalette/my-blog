import React, { Suspense } from 'react';

const PostPresenter = () => {
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <div>post</div>
      </Suspense>
    </>
  );
};

export default PostPresenter;
