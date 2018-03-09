import React from 'react';
import { render } from 'react-dom';

import CondensedSpaceCard from './CondensedSpaceCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<CondensedSpaceCard />, div);
});
