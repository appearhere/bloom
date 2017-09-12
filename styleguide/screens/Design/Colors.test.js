import React from 'react';
import { render } from 'react-dom';

import Colors from './Colors';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Colors />, div);
});
