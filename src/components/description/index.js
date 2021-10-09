import styled from 'styled-components';
import { Box } from 'ui';

const Description = styled(Box)`
  margin: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  & > span {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export default Description;
