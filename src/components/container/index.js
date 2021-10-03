import styled from 'styled-components';
import { Box } from 'ui';

const Container = styled(Box)`
  margin: 0;
  padding: 0 1rem;
  height: 100%;
`;

Container.defaultProps = {
  as: 'main',
};

export default Container;
