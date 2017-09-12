import React from 'react';
import { render } from 'react-dom';

import Swatch from './Swatch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Swatch />, div);
});
