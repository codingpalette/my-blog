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

const InputTag = styled.input`
  font-size: 18px;
`;

const Select = styled.select`
  font-size: 18px;
`;

const EditorBox = memo(({ history }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('html');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [tags] = useState([]);

  const titleChange = e => {
    setTitle(e.target.value);
  };

  const categoryChange = e => {
    setCategory(e.target.value);
  };

  const nameChange = e => {
    setName(e.target.value);
  };

  const descriptionChange = e => {
    setDescription(e.target.value);
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

    if (name === '') {
      alert('네임을 입력해 주세요.');
      return;
    }

    if (description === '') {
      alert('description을 입력해 주세요.');
      return;
    }

    if (content === '') {
      alert('내용을 입력해 주세요.');
      return;
    }

    // const preview = content.replace(/(<([^>]+)>)/gi, '').substring(0, 300);

    dispatch({
      type: POST_ADD_REQUEST,
      data: {
        title,
        category,
        name,
        description,
        tags,
        content,
      },
    });
    history.push('/');
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <InputTag
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={titleChange}
        />

        <Select value={category} onChange={categoryChange}>
          <option vlaue="html">HTML</option>
          <option vlaue="css">CSS</option>
          <option vlaue="javascript">JavaScript</option>
          <option vlaue="react">React</option>
        </Select>

        <InputTag
          placeholder="네임을 입력해주세요"
          value={name}
          onChange={nameChange}
        />

        <InputTag
          placeholder="description"
          value={description}
          onChange={descriptionChange}
        />

        <div id="editor"></div>
        {/* <div id="viewer"></div> */}
        <PostBtnBox />
      </form>
    </>
  );
});

export default withRouter(EditorBox);
