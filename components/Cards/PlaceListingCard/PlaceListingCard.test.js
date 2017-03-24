import React from 'react';
import { render } from 'react-dom';

import PlaceListingCard from './PlaceListingCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<PlaceListingCard images={ [] } />, div);
});