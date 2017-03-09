import React from 'react';
import { render } from 'react-dom';

import WithActionBar from './WithActionBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<WithActionBar />, div);
});