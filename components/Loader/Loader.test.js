import React from 'react';
import { render } from 'react-dom';

import Loader from './Loader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Loader />, div);
});