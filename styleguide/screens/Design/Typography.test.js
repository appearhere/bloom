import React from 'react';
import { render } from 'react-dom';

import Typography from './Typography';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Typography />, div);
});
