import React from 'react';
import { render } from 'react-dom';

import Banner from './Banner';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Banner />, div);
});