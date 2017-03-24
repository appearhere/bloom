import React from 'react';
import { render } from 'react-dom';

import EmptyListingCard from './EmptyListingCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<EmptyListingCard />, div);
});