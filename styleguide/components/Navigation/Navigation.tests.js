import React from 'react';
import { render } from 'react-dom';

import Navigation from './Navigation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Navigation />, div);
});
