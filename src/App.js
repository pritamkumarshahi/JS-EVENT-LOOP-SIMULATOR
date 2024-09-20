import React, { useState, useEffect } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import CodeEditor from './components/CodeEditor';
import EventLoopVisualizer from './components/EventLoopVisualizer';
import { overrideAsync } from './utils/overrideAsync';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1d1f21;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  padding: 20px;
`;

const Title = styled.h6`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #e6e6e6;
`;

const Button = styled.button`
  padding: 12px 24px;
  margin: 20px 0;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357ABD;
  }
`;

const EditorContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
`;

const EventLoopContainer = styled.div`
  width: 100%;
  max-width: 800px;
`;

const Footer = styled.footer`
  margin-top: 40px;
  padding: 20px;
  color: #aaaaaa;
  font-size: 1rem;
  text-align: center;

  a {
    color: #4a90e2;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      color: #357ABD;
    }
  }
`;

const App = () => {
  const [userCode, setUserCode] = useState('');
  const [callStack, setCallStack] = useState([]);
  const [taskQueue, setTaskQueue] = useState([]);
  const [microtaskQueue, setMicrotaskQueue] = useState([]);

  useEffect(() => {
    const eventLoop = setInterval(() => {
      if (callStack.length === 0) {
        if (microtaskQueue.length > 0) {
          const nextMicrotask = microtaskQueue.shift();
          setCallStack((prev) => [...prev, nextMicrotask]);
        } else if (taskQueue.length > 0) {
          const nextTask = taskQueue.shift();
          setCallStack((prev) => [...prev, nextTask]);
        }
      } else {
        const currentTask = callStack[callStack.length - 1];
        setCallStack((prev) => prev.slice(0, -1));
      }
    }, 1000);

    return () => clearInterval(eventLoop);
  }, [callStack, taskQueue, microtaskQueue]);

  const asyncOverrides = overrideAsync(setTaskQueue, setMicrotaskQueue, setCallStack);

  const simulateCodeExecution = () => {
    setCallStack([]);
    setTaskQueue([]);
    setMicrotaskQueue([]);

    asyncOverrides.start();
    window.overridesApplied = true;

    try {
      const wrappedCode = `(function() { ${userCode} })();`;
      eval(wrappedCode);
    } catch (error) {
      console.error('Error executing code:', error);
    }

    asyncOverrides.stop();
  };

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Title>JavaScript Event Loop Simulator</Title>

        <EditorContainer>
          <CodeEditor code={userCode} setCode={setUserCode} />
        </EditorContainer>

        <Button onClick={simulateCodeExecution}>Run Code</Button>

        <EventLoopContainer>
          <EventLoopVisualizer
            callStack={callStack}
            taskQueue={taskQueue}
            microtaskQueue={microtaskQueue}
          />
        </EventLoopContainer>

        {/* Footer with credit */}
        <Footer>
          Built by <a href="https://github.com/pritamkumarshahi" target="_blank" rel="noopener noreferrer">Pritam.</a> Design inspired by CRED.
        </Footer>
      </AppContainer>
    </>
  );
};

export default App;
