import React from 'react';
import { render } from 'react-dom';

import Chip from './Chip';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Chip />,
    div,
  );
});
