import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TagListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled(Link)`
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
    opacity: 0.8;
  }
`;

const TagList = () => {
  const { tags } = useSelector(state => state.posts.meta);
  // console.log(tags);
  return (
    <>
      <TagListContainer>
        {tags.length >= 1 &&
          tags.map(item => (
            <Tag key={item} to="/">
              {item}
            </Tag>
          ))}
      </TagListContainer>
    </>
  );
};

export default TagList;
