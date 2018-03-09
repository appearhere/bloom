import React from 'react';
import { render } from 'react-dom';

import Cards from './Cards';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Cards />, div);
});
