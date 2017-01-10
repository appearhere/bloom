import React from 'react';
import ReactDOM from 'react-dom';

import SpaceFeatureCard from './SpaceFeatureCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <SpaceFeatureCard
      name=""
      price=""
      src=""
    />,
    div
  );
});