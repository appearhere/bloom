import React from 'react';
import { render } from 'react-dom';

import Badge from './Badge';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Badge />, div);
});
