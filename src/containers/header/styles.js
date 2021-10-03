import { css } from 'styled-components';

export default {
  base: css`
    height: 50px;
    width: 100%;
    background: ${({ theme }) => theme.colors.background};
    padding: 1rem;
    font-size: large;
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  `,
};
