import React, { useState, useRef, useEffect, memo } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { POST_ADD_REQUEST } from '../../modules/posts';

import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';
import Editor from 'tui-editor';
// import Viewer from 'tui-editor/dist/tui-editor-Viewer';
import PostBtnBox from './PostBtnBox';

const InputTitle = styled.input`
  font-size: 18px;
`;

const Select = styled.select`
  font-size: 18px;
`;

const EditorBox = memo(({ history }) => {
  const [title, setTitle] = useState('');
  const [select, setSelect] = useState('HTML');

  const titleCange = e => {
    setTitle(e.target.value);
  };

  const selectChange = e => {
    setSelect(e.target.value);
  };

  const EditorElement = useRef(null);
  // const ViewerElement = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    EditorElement.current = new Editor({
      el: document.querySelector('#editor'),
      initialEditType: 'wysiwyg', // 'markdown'
      previewStyle: 'vertical',
      height: '500px',
      initialValue: '',
      exts: [
        {
          name: 'chart',
          minWidth: 100,
          maxWidth: 600,
          minHeight: 100,
          maxHeight: 300,
        },
        'scrollSync',
        'colorSyntax',
        'uml',
        'mark',
        'table',
      ],
    });

    // ViewerElement.current = new Viewer({
    //   el: document.querySelector('#viewer'),
    //   height: '500px',
    //   initialValue: '# content to be rendered',
    // });
  }, []);

  // const onClick = e => {
  //   console.log(EditorElement.current.getHtml());
  // };

  const onSubmit = e => {
    e.preventDefault();
    const content = EditorElement.current.getHtml();

    if (title === '') {
      alert('제목을 입력해 주세요.');
      return;
    }

    if (content === '') {
      alert('내용을 입력해 주세요.');
      return;
    }

    const preview = content.replace(/(<([^>]+)>)/gi, '').substring(0, 300);
    const today = new Date();

    let Year = today.getFullYear();
    let Month = '' + (today.getMonth() + 1);
    let Day = '' + today.getDate();

    if (Month.length < 2) Month = '0' + Month;
    if (Day.length < 2) Day = '0' + Day;

    const CreateDate = `${Year.toString()}-${Month}-${Day}`;
    const createdAt = today.getTime();
    const reserseCreatedAt = -today.getTime();

    dispatch({
      type: POST_ADD_REQUEST,
      data: {
        title,
        select,
        preview,
        content,
        CreateDate,
        createdAt,
        reserseCreatedAt,
      },
    });
    history.push('/');
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="input_box">
          <InputTitle
            placeholder="제목을 입력해주세요"
            value={title}
            onChange={titleCange}
          />
        </div>

        <div className="input_box">
          <Select value={select} onChange={selectChange}>
            <option vlaue="HTML">HTML</option>
            <option vlaue="CSS">CSS</option>
            <option vlaue="JavaScript">JavaScript</option>
            <option vlaue="React">React</option>
          </Select>
        </div>

        <div id="editor"></div>
        {/* <div id="viewer"></div> */}
        <PostBtnBox />
      </form>
    </>
  );
});

export default withRouter(EditorBox);
