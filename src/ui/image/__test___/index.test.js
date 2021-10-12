import React from 'react';
import { screen } from '@testing-library/react';
import { render } from 'utils/test';
import { Image } from 'ui';

const URL =
  'https://images.unsplash.com/photo-1611162619969-50b02487f71b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5zcGxhc2glMjBsb2dvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';

it('must have src = "/logo.svg" and alt = "Logo"', () => {
  render(<Image src={URL} alt="logo" />);
  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src', URL);
  expect(img).toHaveAttribute('alt', 'logo');
});
