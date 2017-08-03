import React from 'react';
import { render } from 'react-dom';

import TabBarItem from './TabBarItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<TabBarItem />, div);
});
