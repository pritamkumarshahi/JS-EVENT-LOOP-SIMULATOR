import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StackItemContainer = styled(motion.div)`
  background-color: #4a90e2; /* CRED-inspired blue */
  color: white;
  padding: 12px 20px;
  margin: 10px 0;
  border-radius: 12px;
  width: 90%;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); /* Subtle shadow for depth */
  font-size: 1.1rem;
  font-weight: 500;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* Hover effect to lift the item */
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4); /* Stronger shadow on hover */
  }
`;

const StackItem = ({ task }) => (
  <StackItemContainer
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    layout
  >
    {task}
  </StackItemContainer>
);

export default StackItem;
