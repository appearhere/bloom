import React from 'react';
import { render } from 'react-dom';

import HorizontalOverflowBar from './HorizontalOverflowBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <HorizontalOverflowBar>
      { link => link({ key: 1 }) }
    </HorizontalOverflowBar>,
    div
  );
});