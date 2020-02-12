import React, { useState, useRef, useEffect, memo } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { POST_ADD_REQUEST } from '../../modules/posts';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';

import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';
import Editor from 'tui-editor';
// import Viewer from 'tui-editor/dist/tui-editor-Viewer';
import PostBtnBox from './PostBtnBox';

registerLocale('ko', ko);

const TitleInput = styled.input`
  font-size: 24px;
  font-weight: bold;
  &::placeholder {
    color: #aeb5bd;
  }
`;

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
  const [startDate, setStartDate] = useState(new Date());

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
  }, []);

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
    let dd = startDate.getDate();
    let mm = startDate.getMonth() + 1; //January is 0!
    const yyyy = startDate.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    const date = yyyy + '-' + mm + '-' + dd;
    dispatch({
      type: POST_ADD_REQUEST,
      data: {
        title,
        category,
        name,
        description,
        date,
        tags,
        content,
      },
    });
    history.push('/');
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <TitleInput placeholder="제목을 입력해주세요" />
        {/* <InputTag
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

        <DatePicker
          selected={startDate}
          dateFormat="yyyy-MM-dd"
          onChange={date => setStartDate(date)}
          locale="ko"
        />

        <InputTag
          placeholder="description"
          value={description}
          onChange={descriptionChange}
        /> */}

        <div id="editor"></div>
        {/* <div id="viewer"></div> */}
        <PostBtnBox />
      </form>
    </>
  );
});

export default withRouter(EditorBox);
