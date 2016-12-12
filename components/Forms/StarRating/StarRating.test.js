import React from 'react';
import { render } from 'react-dom';

import StarRating from './StarRating';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <StarRating name="" />,
    div
  );
});