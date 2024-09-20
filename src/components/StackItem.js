import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StackItemContainer = styled(motion.div)`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  width: 80%;
  text-align: center;
`;

const StackItem = ({ task }) => (
  <StackItemContainer
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
  >
    {task}
  </StackItemContainer>
);

export default StackItem;
