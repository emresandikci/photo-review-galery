import React from 'react';
import { IconPlus, Spinner } from 'icons';
import styled, { css } from 'styled-components';
import { Box } from 'ui';

export default function NoImage({ isLoading, hasError, ...props }) {
  return (
    <NoImageContainer {...props}>
      {!isLoading && !hasError && <IconPlus />}
      {isLoading && <Spinner />}
      {!isLoading && hasError && hasError}
    </NoImageContainer>
  );
}

NoImage.defaultProps = {
  height: '70px',
  width: '120px',
  iconSize: '24px',
  isLoading: false,
};

const NoImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 10px;

  & > svg {
    width: ${({ iconSize }) => iconSize};
    height: ${({ iconSize }) => iconSize};
    fill: ${({ theme }) => theme.colors.darkGray};
  }

  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
`;
