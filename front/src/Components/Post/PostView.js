import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';
// import Editor from 'tui-editor';
import Viewer from 'tui-editor/dist/tui-editor-Viewer';

const PostViewContainer = styled.div`
  margin-bottom: 15px;
`;

const Title = styled.h2`
  font-size: 20px;
  text-align: center;
`;

const DateBox = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  opacity: 0.75;
  p {
    margin-left: 5px;
  }
`;

const PostView = () => {
  const { meta, doc } = useSelector(state => state.posts);
  // console.log(meta, doc);
  const { title, date } = meta;
  const { content } = doc;
  const ViewerElement = useRef(null);

  useEffect(() => {
    ViewerElement.current = new Viewer({
      el: document.querySelector('#viewer'),
      initialValue: content,
    });
  }, [content]);
  return (
    <>
      <PostViewContainer>
        <Title>{title}</Title>
        <DateBox>
          <FontAwesomeIcon icon={faCalendar} />
          <p>
            작성일 <span>{date}</span>
          </p>
        </DateBox>
        <div id="viewer"></div>
      </PostViewContainer>
    </>
  );
};

export default PostView;
