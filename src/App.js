import React, { useState, useEffect } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import CodeEditor from './components/CodeEditor';
import EventLoopVisualizer from './components/EventLoopVisualizer';
import { overrideAsync } from './utils/overrideAsync';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const App = () => {
  const [userCode, setUserCode] = useState('');
  const [callStack, setCallStack] = useState([]);
  const [taskQueue, setTaskQueue] = useState([]);
  const [microtaskQueue, setMicrotaskQueue] = useState([]);

  // Simulate the event loop, processing tasks and microtasks in order
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
        const currentTask = callStack[callStack.length - 1]; // Get the last task
        setCallStack((prev) => prev.slice(0, -1)); // Remove the last task from the call stack
      }
    }, 1000); // Run every 1 second for demonstration purposes

    return () => clearInterval(eventLoop);
  }, [callStack, taskQueue, microtaskQueue]);

  // Initialize async overrides for setTimeout, Promises, and synchronous code
  const asyncOverrides = overrideAsync(setTaskQueue, setMicrotaskQueue, setCallStack);

  const simulateCodeExecution = () => {
    // Reset the call stack and queues before running the code
    setCallStack([]);
    setTaskQueue([]);
    setMicrotaskQueue([]);

    // Only apply async overrides once
    // if (!window.overridesApplied) {
      asyncOverrides.start();
      window.overridesApplied = true; // Ensure overrides are only applied once
    // }

    try {
      const wrappedCode = `(function() { ${userCode} })();`;
      eval(wrappedCode); // Dangerous for untrusted code; avoid in production
    } catch (error) {
      console.error('Error executing code:', error);
    }

    // Restore original async methods after code execution
    asyncOverrides.stop();
  };
  

  return (
    <>
      <GlobalStyles />
      <h1>JavaScript Event Loop Simulator</h1>

      <CodeEditor code={userCode} setCode={setUserCode} />

      <Button onClick={simulateCodeExecution}>Run Code</Button>

      <EventLoopVisualizer
        callStack={callStack}
        taskQueue={taskQueue}
        microtaskQueue={microtaskQueue}
      />
    </>
  );
};

export default App;