import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StackItem from './StackItem';

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Section = styled.div`
  display: inline-block;
  width: 30%;
  vertical-align: top;
  margin: 20px;
`;

const Queue = styled.div`
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 20px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  color: #333;
`;

const EventLoopVisualizer = ({ callStack, taskQueue, microtaskQueue }) => {
  return (
    <Container>
      <Section>
        <Title>Call Stack</Title>
        <Queue>
          {callStack.length > 0 ? callStack.map((task, index) => (
            <StackItem key={index} task={task} />
          )) : <p>Empty</p>}
        </Queue>
      </Section>

      <Section>
        <Title>Task Queue</Title>
        <Queue>
          {taskQueue.length > 0 ? taskQueue.map((task, index) => (
            <StackItem key={index} task={task} />
          )) : <p>Empty</p>}
        </Queue>
      </Section>

      <Section>
        <Title>Microtask Queue</Title>
        <Queue>
          {microtaskQueue.length > 0 ? microtaskQueue.map((task, index) => (
            <StackItem key={index} task={task} />
          )) : <p>Empty</p>}
        </Queue>
      </Section>
    </Container>
  );
};

export default EventLoopVisualizer;
