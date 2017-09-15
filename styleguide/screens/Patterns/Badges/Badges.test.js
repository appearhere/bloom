import React from 'react';
import { render } from 'react-dom';

import Badges from './Badges';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Badges />, div);
});
