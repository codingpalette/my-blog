import React from 'react';
import styled from 'styled-components';
import TodoInput from '../Components/Todo/TodoInput';
import TodoList from '../Components/Todo/TodoList';

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  max-width: 300px;
  transform: translate(-50%, -50%);
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
      <Container className="content_box">
        <TodoInput />
        <TodoList />
      </Container>
    </>
  );
};

export default TodoLayout;
