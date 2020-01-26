import React, { useEffect } from 'react';
import TodoPresenter from './TodoPresenter';

import { useSelector, useDispatch } from 'react-redux';
import { LOAD_TODO_REQUEST } from '../../modules/todos';

const TodoContainer = () => {
  const { ListContent, isTodoLoad } = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_TODO_REQUEST,
    });
  }, [dispatch]);

  // console.log(ListContent);

  return (
    <>
      <TodoPresenter isTodoLoad={isTodoLoad} />
      {/* {isTodoLoad ? <div>loading</div> : <div>ok</div>}
      <div>Sub</div> */}
    </>
  );
};

export default TodoContainer;
