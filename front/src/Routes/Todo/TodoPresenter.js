import React, { Suspense, lazy } from 'react';
// import TodoLayout from '../../Layout/TodoLayout';
const TodoLayout = lazy(() => import('../../Layout/TodoLayout'));

const TodoPresenter = ({ isTodoLoad }) => {
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        {isTodoLoad ? '' : <TodoLayout />}
      </Suspense>
    </>
  );
};

export default TodoPresenter;
