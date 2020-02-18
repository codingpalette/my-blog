import React, { useState, memo, useCallback, useEffect } from 'react';
import styled from 'styled-components';

const TagBoxContainer = styled.div`
  width: 100%;
  margin-top: 15px;
  border: 1px solid #ddd;
`;

const TagForm = styled.form`
  overflow: hidden;
  display: flex;
  width: 256px;
  input,
  button {
    font-size: 1rem;
  }
  input {
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
  }
`;

const Tag = styled.div`
  margin-right: 0.5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const TagListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

// memo를 사용하여 tag 값이 바뀔 때만 리렌더링되도록 처리
const TagItem = memo(({ tag, onRemove }) => (
  <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
));

// memo를 사용하여 tags 값이 바뀔 때만 리렌더링되도록 처리
const TagList = memo(({ tags, onRemove }) => (
  <TagListBlock>
    {tags.map(tag => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListBlock>
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
          <button type="submit">추가</button>
        </TagForm>
        <TagList tags={localTags} onRemove={onRemove} />
      </TagBoxContainer>
    </>
  );
};

export default TagBox;
