import React from 'react';
import { render } from 'react-dom';

import Input from './Input';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Input />, div);
});
