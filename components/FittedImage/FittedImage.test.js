import React from 'react';
import { render } from 'react-dom';

import FittedImage from './FittedImage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<FittedImage src="" />, div);
});