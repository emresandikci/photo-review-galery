import styled from 'styled-components';
import { Box } from 'ui';

const Image = styled(Box)`
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
  object-fit: cover;
  max-width: 500px;
`;

Image.defaultProps = {
  as: 'img',
  width: '180px',
  height: 'auto',
};

export default Image;
