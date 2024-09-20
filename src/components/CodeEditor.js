import React from 'react';
import styled from 'styled-components';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const EditorContainer = styled.div`
  margin: 20px;
  border: 2px solid #4a90e2;
  border-radius: 15px;
  overflow: hidden;
  background-color: #1d1f21;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
`;

const StyledCodeMirror = styled(CodeMirror)`
  height: 200px;
  background-color: #1d1f21;
  color: #fff;
  
  .cm-editor {
    background-color: #1d1f21;
    color: #fff;
  }

  .cm-scroller {
    overflow: auto !important;
  }

  .cm-gutters {
    background-color: #121212;
    color: #4a90e2;
    border-right: 1px solid #4a90e2;
  }

  .cm-activeLineGutter {
    background-color: #2a2d2e;
  }

  .cm-activeLine {
    background-color: #2a2d2e;
  }
`;

const CodeEditor = ({ code, setCode }) => {
  return (
    <EditorContainer>
      <StyledCodeMirror
        value={code}
        height="200px"
        theme="dark"
        extensions={[javascript()]}
        onChange={(value) => setCode(value)}
      />
    </EditorContainer>
  );
};

export default CodeEditor;
