import React from 'react';
import { cleanup } from '@testing-library/react';
import { render } from 'utils/test';
import { RandomImager } from 'components';

const { getByTestId } = render(<RandomImager />);

it(`should be render with no image`, () => {
  const noImage = getByTestId('no-image');
  expect(noImage);
});
