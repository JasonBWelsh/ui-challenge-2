import styled from 'styled-components';

export const StyledPill = styled.div`
  padding: 0 6px;
  height: 40px;
  width: 130px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 4px 8px 12px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .count-btn {
    padding: 0;
    cursor: pointer;
    background: transparent;
    border-radius: 50%;
    height: 32px;
    width: 32px;
  }

  .count-btn__decrement {
    transition: all 0.3s ease;
    &:hover {
      background: #e26e6e;
    }

    &:hover line {
      stroke: #fff !important;
    }

    line {
      stroke: #e26e6e !important;
      transition: all 0.3s ease;
    }
  }

  .count-btn__increment {
    transition: all 0.3s ease;

    &:hover {
      background: #8ed273;
    }

    &:hover line {
      stroke: #fff !important;
    }

    line {
      stroke: #8ed273 !important;
      transition: all 0.3s ease;
    }
  }

  .count-display {
    font-weight: 600;
    font-size: 20px;
    color: #6a85a0;
    line-height: 40px;
    text-align: center;
  }
`;
