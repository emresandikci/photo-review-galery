import React from 'react';
import styles from './styles';
import { Box } from 'ui';

export default function Container(props) {
  return (
    <Box
      as="main"
      css={`
        ${styles.base}
      `}
      {...props}
    />
  );
}
