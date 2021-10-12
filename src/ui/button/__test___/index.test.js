import React from 'react';
import { cleanup } from '@testing-library/react';
import { render } from 'utils/test';
import { Button } from 'ui';

const text = 'hello world';

const button = render(<Button>{text}</Button>);

it(`should be render with ${text} text`, () => {
  expect(button.getByText(text)).toHaveTextContent(text);
});
