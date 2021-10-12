import React from 'react';
import { cleanup } from '@testing-library/react';
import { render } from 'utils/test';
import { Button } from 'ui';

const text = 'hello world';

const { getByText } = render(<Button>{text}</Button>);

it(`should be render with ${text} text`, () => {
  expect(getByText(text)).toHaveTextContent(text);
});
