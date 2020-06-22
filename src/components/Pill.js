import React from 'react';
import { StyledPill } from './StyledPill.js';
import { ReactComponent as MinusIcon } from '../icons/remove-outline.svg';
import { ReactComponent as PlusIcon } from '../icons/add-outline.svg';

function Pill({ count, handleCountChange }) {
  return (
    <StyledPill>
      <div
        className="count-btn count-btn__decrement"
        onClick={() => handleCountChange(-1)}
      >
        <MinusIcon className="icon" height="32px" width="32px" />
      </div>
      <span className="count-display">{count}</span>
      <div
        className="count-btn count-btn__increment"
        onClick={() => handleCountChange(1)}
      >
        <PlusIcon className="icon" height="32px" width="32px" />
      </div>
    </StyledPill>
  );
}

export default Pill;
