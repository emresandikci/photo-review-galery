import styled, { css } from 'styled-components';
import { Box } from 'ui';

const IconContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-color: ${({ theme }) => theme.colors.primary[0]};
  border-radius: 50%;
  position: ${({ position }) => position};
  opacity: 0.8;
  color: ${({ textColor }) => textColor};
  ${({ top }) =>
    top &&
    css`
      top: ${top};
    `}
  ${({ bottom }) =>
    bottom &&
    css`
      bottom: ${bottom};
    `}
  ${({ right }) =>
    right &&
    css`
      right: ${right};
    `}
  ${({ left }) =>
    left &&
    css`
      left: ${left};
    `}
  svg {
    width: ${({ iconSize }) => iconSize};
    height: ${({ iconSize }) => iconSize};
    fill: ${({ iconColor }) => iconColor};
  }
`;

IconContainer.defaultProps = {
  height: ' 24px',
  width: ' 24px',
  iconSize: '1rem',
  iconColor: '#fff',
  textColor: '#fff',
  position: 'absolute',
  top: '5px',
  right: '8px',
  left: null,
  bottom: null,
};

export default IconContainer;
