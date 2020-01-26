import React from 'react';
import TodoLayout from '../../Layout/TodoLayout';

const TodoPresenter = ({ isTodoLoad }) => {
  console.log(isTodoLoad);
  return <>{isTodoLoad ? '' : <TodoLayout />}</>;
};

export default TodoPresenter;
