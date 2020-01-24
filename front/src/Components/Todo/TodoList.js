import React, { useEffect } from 'react';
import styled from 'styled-components';
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
  }
  li button {
    display: block;
    width: 50px;
    padding: 10px 5px;
    box-sizing: border-box;
  }
`;

const TodoList = () => {
  const { ListContent } = useSelector(state => state.todos);
  console.log(ListContent);
  const dispatch = useDispatch();
  return (
    <>
      <ListBox>
        <ul>
          {ListContent.map(list => (
            <li key={list.id}>
              <span>{list.text}</span>
              <button type="button">삭제</button>
            </li>
          ))}
        </ul>
      </ListBox>
    </>
  );
};

export default TodoList;
