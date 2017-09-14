import React from 'react';
import { render } from 'react-dom';

import Iconography from './Iconography';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Iconography />, div);
});
