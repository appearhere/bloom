import React from 'react';
import { render } from 'react-dom';

import Input from './Input';

jest.mock('./Input.css', () => ({
  enter: 'enter',
  appear: 'appear',
  enterActive: 'enterActive',
  appearActive: 'appearActive',
  leave: 'leave',
  leaveActive: 'leaveActive',
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Input />, div);
});

it('renders an error without crashing', () => {
  const div = document.createElement('div');
  render(<Input error="foobara" />, div);
});
