import React from 'react';
import { render } from 'react-dom';

import Dropdown from './Dropdown';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Dropdown />, div);
});
