import React from 'react';
import { render } from 'react-dom';

import WithTitleBar from './WithTitleBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<WithTitleBar />, div);
});