import React from 'react';
import { Box } from 'ui';
import styles from './styles';

export default function Header({ title, ...props }) {
  return (
    <Box as="header" css={styles.base} {...props}>
      <Box as="h4">{title}</Box>
    </Box>
  );
}

Header.defaultProps = {
  title: 'image approval application',
};
