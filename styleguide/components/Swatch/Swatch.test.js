import React from 'react';
import { render } from 'react-dom';

import Color from './Color';

jest.mock('./Colors.css', () => ({
  red: 'className',
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Color color="red" />, div);
});
