import React from 'react';
import { render } from 'react-dom';

import WithCross from './WithCross';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<WithCross />, div);
});
