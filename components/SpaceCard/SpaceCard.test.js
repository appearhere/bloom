import React from 'react';
import { render } from 'react-dom';

import SpaceCard from './SpaceCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <SpaceCard
      name=""
      image=""
      price=""
    />,
    div
  );
});