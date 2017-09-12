import React from 'react';
import { render } from 'react-dom';

import Goals from './Goals';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Goals />, div);
});
