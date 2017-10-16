import React from 'react';
import { render } from 'react-dom';

import Tooltip from './Tooltip';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Tooltip />, div);
});
