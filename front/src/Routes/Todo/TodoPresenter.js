import React, { useEffect } from 'react';
import TodoLayout from '../../Layout/TodoLayout';

import { useSelector, useDispatch } from 'react-redux';
import { LOAD_TODO_REQUEST } from '../../modules/todos';

const TodoPresenter = () => {
  const { ListContent, isTodoLoad } = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_TODO_REQUEST,
    });
  }, [dispatch]);

  console.log(ListContent);
  return (
    <>
      <TodoLayout />
      {/* {isTodoLoad ? <div>loading</div> : <div>ok</div>}
      <div>Sub</div> */}
    </>
  );
};

export default TodoPresenter;
