import React from 'react';
import styled from 'styled-components';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const EditorContainer = styled.div`
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
`;

const CodeEditor = ({ code, setCode }) => {
  return (
    <EditorContainer>
      <CodeMirror
        value={code}
        height="200px"
        theme="light"
        extensions={[javascript()]}
        onChange={(value) => setCode(value)}
      />
    </EditorContainer>
  );
};

export default CodeEditor;
