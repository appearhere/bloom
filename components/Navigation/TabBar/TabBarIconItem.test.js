import React from 'react';
import { render } from 'react-dom';

import TabBarIconItem from './TabBarIconItem';

jest.mock('../../Icon/Icon');

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<TabBarIconItem icon="star" />, div);
});