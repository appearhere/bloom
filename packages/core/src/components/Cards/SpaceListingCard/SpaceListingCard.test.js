import React from 'react';
import { render } from 'react-dom';

import SpaceListingCard from './SpaceListingCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<SpaceListingCard images={[]} />, div);
});
