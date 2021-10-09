import React from 'react';
import styled, { css } from 'styled-components';
import { Box } from 'ui';
import { IconArrow } from 'icons';

export default function ArrowButton(props) {
  return (
    <ArrowButtonContaner {...props}>
      <IconArrow />
    </ArrowButtonContaner>
  );
}

const ArrowButtonContaner = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ iconSize }) => iconSize};
  width: ${({ iconSize }) => iconSize};
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 0.5rem;

  background-color: ${({ theme }) => theme.colors.primary[0]};
  & > svg {
    width: ${({ iconSize }) => iconSize};
    height: ${({ iconSize }) => iconSize};
    fill: ${({ theme }) => theme.colors.gray};
    ${({ direction }) =>
      direction === 'right'
        ? css`
            transform: rotate(0deg);
          `
        : css`
            transform: rotate(-180deg);
          `}
  }
`;

ArrowButton.defaultProps = {
  iconSize: '24px',
};
