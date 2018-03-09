import React from 'react';
import { render } from 'react-dom';

import DestinationListingCard from './DestinationListingCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<DestinationListingCard />, div);
});
