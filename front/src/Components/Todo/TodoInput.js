import React from 'react';
import styled from 'styled-components';

const InputBox = styled.div`
  max-width: 300px;
  width: 100%;
`;

const TodoInput = () => {
  return (
    <>
      <InputBox>
        <form>
          <input placeholder="할 일을 입력해주세요." />
          <button type="submit">등록</button>
        </form>
      </InputBox>
    </>
  );
};

export default TodoInput;
