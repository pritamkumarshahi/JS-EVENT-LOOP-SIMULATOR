import React from 'react';
import styled from 'styled-components';
import StackItem from './StackItem';
import { FaInfoCircle } from 'react-icons/fa'; // Add an info icon

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 20px;
  background-color: #1d1f21;
  border-radius: 20px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
  margin: 20px 0;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
`;

const Queue = styled.div`
  background-color: #2b2d2f;
  border-radius: 15px;
  padding: 20px;
  min-height: 220px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #4a90e2;
  box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h6`
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Tooltip = styled.div`
  visibility: hidden;
  width: 200px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px;
  position: absolute;
  z-index: 1;
  bottom: 125%; /* Adjust this to place tooltip above the info icon */
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;

  &:after {
    content: '';
    position: absolute;
    top: 100%; /* Arrow pointing downwards */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;

const InfoIcon = styled(FaInfoCircle)`
  margin-left: 8px;
  color: #4a90e2;
  cursor: pointer;

  &:hover + ${Tooltip} {
    visibility: visible;
    opacity: 1;
  }
`;

const Placeholder = styled.p`
  color: #999999;
  font-size: 1rem;
  margin-top: 50px;
`;

const EventLoopVisualizer = ({ callStack, taskQueue, microtaskQueue }) => {
  return (
    <Container>
      <Section>
        <Title>
          Call Stack
          <TooltipContainer>
            <InfoIcon />
            <Tooltip>Holds the currently executing function in a LIFO order.</Tooltip>
          </TooltipContainer>
        </Title>
        <Queue>
          {callStack.length > 0 ? (
            callStack.map((task, index) => <StackItem key={index} task={task} />)
          ) : (
            <Placeholder>Empty</Placeholder>
          )}
        </Queue>
      </Section>

      <Section>
        <Title>
          Task Queue
          <TooltipContainer>
            <InfoIcon />
            <Tooltip>Holds tasks that are ready to be executed after the call stack is empty.</Tooltip>
          </TooltipContainer>
        </Title>
        <Queue>
          {taskQueue.length > 0 ? (
            taskQueue.map((task, index) => <StackItem key={index} task={task} />)
          ) : (
            <Placeholder>Empty</Placeholder>
          )}
        </Queue>
      </Section>

      <Section>
        <Title>
          Microtask Queue
          <TooltipContainer>
            <InfoIcon />
            <Tooltip>Holds higher-priority tasks like promises, executed before tasks in the task queue.</Tooltip>
          </TooltipContainer>
        </Title>
        <Queue>
          {microtaskQueue.length > 0 ? (
            microtaskQueue.map((task, index) => <StackItem key={index} task={task} />)
          ) : (
            <Placeholder>Empty</Placeholder>
          )}
        </Queue>
      </Section>
    </Container>
  );
};

export default EventLoopVisualizer;
