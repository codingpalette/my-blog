import React from 'react';
import styled from 'styled-components';

const ListBox = styled.div`
  max-width: 300px;
  width: 100%;
  border: 1px solid #ccc;
  margin-top: 15px;
  padding: 10px;
  box-sizing: border-box;
`;

const TodoList = () => {
  return (
    <>
      <ListBox>
        <ul>
          <li>
            <span>list1</span>
            <button type="button">삭제</button>
          </li>
        </ul>
      </ListBox>
    </>
  );
};

export default TodoList;
