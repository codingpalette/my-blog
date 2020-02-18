import React, { useState, memo, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Common/Button';

const TagBoxContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 15px;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
`;

const TagForm = styled.form`
  overflow: hidden;
  display: flex;
  width: 256px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-right: 15px;
  border-bottom: 1px solid #6c63ff;
  input,
  button {
    font-size: 1rem;
  }
  input {
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
    line-height: 1;
  }
`;

const Tag = styled.span`
  padding: 10px 15px;
  background-color: #edf2f7;
  font-size: 1rem;
  color: #4a5568;
  line-height: 1;
  border-radius: 15px;
  margin-right: 10px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const TagListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

// memo를 사용하여 tag 값이 바뀔 때만 리렌더링되도록 처리
const TagItem = memo(({ tag, onRemove }) => (
  <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
));

// memo를 사용하여 tags 값이 바뀔 때만 리렌더링되도록 처리
const TagList = memo(({ tags, onRemove }) => (
  <TagListContainer>
    {tags.map(tag => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListContainer>
));

const TagBox = ({ onChangeTags, tags }) => {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);

  const insertTag = useCallback(
    tag => {
      if (!tag) return; // 공백이라면 추가하지 않음
      if (localTags.includes(tag)) return; // 이미 존재한다면 추가하지 않음
      const nextTags = [...localTags, tag];
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags],
  );

  const onRemove = useCallback(
    tag => {
      const nextTags = localTags.filter(t => t !== tag);
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags],
  );

  const onChange = useCallback(e => {
    setInput(e.target.value);
  });

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      console.log(input);
      insertTag(input.trim()); // 앞뒤 공백 없앤 후 등록
      setInput(''); // input 초기화
    },
    [input, insertTag],
  );

  // tags 값이 바뀔 때
  useEffect(() => {
    setLocalTags(tags);
  }, [tags]);

  return (
    <>
      <TagBoxContainer>
        <TagForm onSubmit={onSubmit}>
          <input
            value={input}
            onChange={onChange}
            placeholder="태그를 입력하세요"
          />
          <Button type="submit" ghost="true">
            추가
          </Button>
        </TagForm>
        <TagList tags={localTags} onRemove={onRemove} />
      </TagBoxContainer>
    </>
  );
};

export default TagBox;
