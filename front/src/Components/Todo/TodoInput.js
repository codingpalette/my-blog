import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { ADD_TODO_REQUEST } from '../../modules/todos';

const InputBox = styled.div`
  max-width: 300px;
  width: 100%;
  form {
    display: flex;
    align-items: center;
  }
  input {
    display: block;
    flex: 1;
    outline: none;
  }
  button {
    display: block;
    width: 50px;
    padding: 10px 5px;
    box-sizing: border-box;
  }
`;

const TodoInput = () => {
  const [value, setValue] = useState('');
  const inputEl = useRef(null);
  const dispatch = useDispatch();
  const onChange = e => {
    setValue(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    dispatch({
      type: ADD_TODO_REQUEST,
      data: value,
    });
    setValue('');
    inputEl.current.focus();
  };

  useEffect(() => {
    inputEl.current.focus();
  }, []);
  return (
    <>
      <InputBox>
        <form onSubmit={onSubmit}>
          <input
            value={value}
            onChange={onChange}
            ref={inputEl}
            placeholder="할 일을 입력해주세요."
          />
          <button type="submit">등록</button>
        </form>
      </InputBox>
    </>
  );
};

export default TodoInput;
