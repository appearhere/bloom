import React from 'react';
import { render } from 'react-dom';

import TabBarItem from './TabBarItem';

jest.mock('../../Icon/Icon');

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<TabBarItem name="star" />, div);
});