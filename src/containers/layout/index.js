import React from 'react';
import { Box } from 'ui';
import { Header } from 'containers';
import { Container } from 'components';

export default function Layout({ children, ...props }) {
  return (
    <Box {...props}>
      <Header />
      <Container>{children}</Container>
    </Box>
  );
}
