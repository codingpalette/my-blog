import React, { useState, useRef, useEffect, memo } from 'react';
import styled from 'styled-components';

import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';
import Editor from 'tui-editor';
import Viewer from 'tui-editor/dist/tui-editor-Viewer';

const InputTitle = styled.input`
  border: none;
  background-color: #edf2f7;
  width: 100%;
  display: block;
  padding: 8px 16px;
  box-sizing: border-box;
  outline: none;
  margin-bottom: 15px;
  border-radius: 0;
  font-size: 18px;
  &::placeholder {
    color: #4a5568;
  }
  @media (prefers-color-scheme: dark) {
    background-color: #333;
  }
`;

const Select = styled.select`
  border: none;
  background-color: #edf2f7;
  width: 100%;
  display: block;
  padding: 8px 16px;
  box-sizing: border-box;
  outline: none;
  margin-bottom: 15px;
  border-radius: 0;
  font-size: 18px;
  @media (prefers-color-scheme: dark) {
    background-color: #333;
  }
`;

const EditorBox = memo(() => {
  const [titlevalue, setTitlevalue] = useState('');
  const [selectvalue, setSelectvalue] = useState('HTML');

  const titleCange = e => {
    setTitlevalue(e.target.value);
  };

  const selectChange = e => {
    setSelectvalue(e.target.value);
  };

  const EditorElement = useRef(null);
  const ViewerElement = useRef(null);

  useEffect(() => {
    EditorElement.current = new Editor({
      el: document.querySelector('#editor'),
      initialEditType: 'wysiwyg', // 'markdown'
      previewStyle: 'vertical',
      height: '500px',
      initialValue: '# content to be rendered',
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

  return (
    <>
      <InputTitle
        placeholder="제목을 입력해주세요"
        value={titlevalue}
        onChange={titleCange}
      />

      <Select value={selectvalue} onChange={selectChange}>
        <option vlaue="HTML">HTML</option>
        <option vlaue="CSS">CSS</option>
        <option vlaue="JavaScript">JavaScript</option>
        <option vlaue="React">React</option>
      </Select>

      <div id="editor"></div>
      {/* <div id="viewer"></div> */}
    </>
  );
});

export default EditorBox;
