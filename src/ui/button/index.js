import styled, { css } from 'styled-components';
import { Box } from 'ui';

const Button = styled(Box)`
  background-color: ${({ theme }) => theme.colors.primary[0]};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;
  border-radius: 2px;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  padding: 1px;
  min-width: 120px;
  min-height: 60px;
  border-radius: 30px;
  :hover {
    background: ${({ theme }) => theme.colors.primary[1]};
  }
  :active {
    background: ${({ theme }) => theme.colors.primary[2]};
  }
  :disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary[0]};
      :hover {
        background: ${({ theme }) => theme.colors.secondary[1]};
      }
      :active {
        background: ${({ theme }) => theme.colors.secondary[2]};
      }
      :disabled {
        opacity: 0.2;
        cursor: not-allowed;
      }
    `}
`;

Button.defaultProps = {
  as: 'button',
};
export default Button;
