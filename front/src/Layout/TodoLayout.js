import React from 'react';
import styled from 'styled-components';
import TodoInput from '../Components/Todo/TodoInput';
import TodoList from '../Components/Todo/TodoList';

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TodoLayout = () => {
  return (
    <>
      <Container>
        <TodoInput />
        <TodoList />
      </Container>
    </>
  );
};

export default TodoLayout;
