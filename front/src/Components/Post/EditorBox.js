import React, { useRef, useEffect } from 'react';

import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';
import Editor from 'tui-editor';
import Viewer from 'tui-editor/dist/tui-editor-Viewer';

const EditorBox = () => {
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

    ViewerElement.current = new Viewer({
      el: document.querySelector('#viewer'),
      height: '500px',
      initialValue: '# content to be rendered',
    });
  }, []);

  const onClick = e => {
    console.log(EditorElement.current.getHtml());
  };

  return (
    <>
      <div>
        <div id="editor"></div>
        <div id="viewer"></div>
        <button onClick={onClick}>저장</button>
      </div>
    </>
  );
};

export default EditorBox;
