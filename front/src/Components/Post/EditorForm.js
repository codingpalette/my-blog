import React, { useState, useRef, useEffect, memo, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { POST_ADD_REQUEST, POST_DELETE_REQUEST } from '../../modules/posts';

import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';
import Editor from 'tui-editor';
// import Viewer from 'tui-editor/dist/tui-editor-Viewer';

import TagBox from './TagBox';
import PostBtnBox from './PostBtnBox';
import Popup from '../Common/Popup';

const TitleInput = styled.input`
  font-size: 2rem;
  font-weight: bold;
  color: #212529;
  margin-bottom: 15px;
  &::placeholder {
    color: #aeb5bd;
  }
  @media screen and (min-width: 768px) {
    font-size: 2.75rem;
  }
`;

const Select = styled.select`
  display: block;
  width: 100%;
  margin-bottom: 15px;
  padding: 5px 10px;
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
`;

const EditorBox = ({ history }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('html');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [url, setUrl] = useState('');
  const [popupToggle, setPopupToggle] = useState(false);
  const [viewContent, setViewContent] = useState('');
  const [deleteMode, setDeleteMode] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupText, setPopupText] = useState('');

  const { meta, doc, setId } = useSelector(state => state.posts);

  const titleChange = useCallback(e => {
    setTitle(e.target.value);
  }, []);

  const categoryChange = useCallback(e => {
    setCategory(e.target.value);
  }, []);

  const descriptionChange = useCallback(e => {
    setDescription(e.target.value);
  }, []);

  const urlChange = useCallback(e => {
    setUrl(e.target.value);
  }, []);

  const onChangeTags = useCallback(e => {
    setTags([...e]);
  });

  const EditorElement = useRef(null);
  // const ViewerElement = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (setId && Object.keys(meta).length > 0) {
      setTitle(meta.title);
      setCategory(meta.category);
      setUrl(meta.url);
      setDescription(meta.description);
      setViewContent(doc.content);
      setTags([...meta.tags]);
      console.log(meta);
    }
  }, [setId, meta, doc]);

  useEffect(() => {
    EditorElement.current = new Editor({
      el: document.querySelector('#editor'),
      initialEditType: 'wysiwyg', // 'markdown'
      previewStyle: 'vertical',
      height: '500px',
      initialValue: viewContent,
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
  }, [viewContent, dispatch]);

  const popupOpenEvent = () => {
    setId ? setPopupTitle('포스트 수정') : setPopupTitle('포스트 작성');
    setId
      ? setPopupText('포스트를 수정하시겠습니까?')
      : setPopupText('포스트를 작성하시겠습니까?');
    setPopupToggle(true);
    setDeleteMode(false);
  };

  const postDeleteEvent = () => {
    setPopupTitle('포스트 삭제');
    setPopupText('포스트를 삭제하시겠습니까?');
    setPopupToggle(true);
    setDeleteMode(true);
  };

  const popupCloseEvent = () => {
    setPopupToggle(false);
  };

  const postDelete = () => {
    dispatch({
      type: POST_DELETE_REQUEST,
      data: setId,
    });
    history.push('/');
  };

  const onSubmit = () => {
    // e.preventDefault();
    // const content = EditorElement.current.getHtml();
    const content = EditorElement.current.getMarkdown();

    if (title === '') {
      alert('제목을 입력해 주세요.');
      return;
    }

    if (content === '') {
      alert('내용을 입력해 주세요.');
      return;
    }

    if (url === '') {
      alert('URL을 입력해 주세요.');
      return;
    }

    const today = new Date();

    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    const yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    let date, createdAt;
    if (setId) {
      date = meta.date;
      createdAt = meta.createdAt;
    } else {
      date = yyyy + '-' + mm + '-' + dd;
      createdAt = new Date();
    }
    const modifiedAt = new Date();

    dispatch({
      type: POST_ADD_REQUEST,
      data: {
        title,
        category,
        url,
        description,
        date,
        tags,
        content,
        createdAt,
        modifiedAt,
      },
    });
    history.push('/');
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <TitleInput
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={titleChange}
        />
        <Select value={category} onChange={categoryChange}>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">JavaScript</option>
          <option value="react">React</option>
        </Select>

        <div id="editor"></div>
        {/* <div id="viewer"></div> */}
      </form>
      <TagBox onChangeTags={onChangeTags} tags={tags} />
      <PostBtnBox
        popupOpenEvent={popupOpenEvent}
        postDeleteEvent={postDeleteEvent}
      />
      {popupToggle && (
        <Popup
          title={popupTitle}
          popupCloseEvent={popupCloseEvent}
          postPopup
          category={category}
          urlChange={urlChange}
          descriptionChange={descriptionChange}
          description={description}
          url={url}
          deleteMode={deleteMode}
          postDelete={postDelete}
          onSubmit={onSubmit}
        >
          {popupText}
        </Popup>
      )}
    </>
  );
};

export default withRouter(memo(EditorBox));
