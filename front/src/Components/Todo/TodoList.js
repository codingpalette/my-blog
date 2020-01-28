import React from 'react';
import styled from 'styled-components';
import { DEL_TODO_REQUEST, UPDATE_TODO_REQUEST } from '../../modules/todos';
import { useSelector, useDispatch } from 'react-redux';

const ListBox = styled.div`
  width: 100%;
  margin-top: 15px;
  padding: 10px;
  box-sizing: border-box;
  li {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
  }
  li span {
    flex: 1;
    display: block;
    font-size: 12px;
    cursor: pointer;
  }
  li button {
    display: block;
    width: 50px;
    padding: 10px 5px;
    box-sizing: border-box;
  }
`;

const Text = styled.span`
  text-decoration: ${props => (props.done ? 'none' : 'line-through')};
`;

const TodoList = () => {
  const { ListContent } = useSelector(state => state.todos);
  // console.log(ListContent);
  const dispatch = useDispatch();

  const delEvent = id => e => {
    // console.log(id);
    dispatch({
      type: DEL_TODO_REQUEST,
      data: id,
    });
  };

  const doneEvent = (id, done) => e => {
    dispatch({
      type: UPDATE_TODO_REQUEST,
      data: { id, done },
    });
  };
  return (
    <>
      {ListContent && ListContent.length >= 1 && (
        <ListBox>
          <ul>
            {ListContent.map(list => (
              <li key={list.id}>
                <Text
                  done={list.done.toString()}
                  onClick={doneEvent(list.id, list.done)}
                >
                  {list.text}
                </Text>
                <button type="button" onClick={delEvent(list.id)}>
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </ListBox>
      )}
    </>
  );
};

export default TodoList;
