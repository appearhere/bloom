import React from 'react';
import { render } from 'react-dom';

import DropdownInner from './DropdownInner';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<DropdownInner />, div);
});