import React from 'react';
import { StyledPill } from './StyledPill.js';

function Pill({ count, handleCountChange }) {
  return (
    <StyledPill>
      <button onClick={() => handleCountChange(-1)}>-</button>
      <span>{count}</span>
      <button onClick={() => handleCountChange(1)}>+</button>
    </StyledPill>
  );
}

export default Pill;
