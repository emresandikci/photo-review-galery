import React from 'react';
import { Header } from 'containers';
import { Container } from 'components';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}
