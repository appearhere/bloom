import React from 'react';
import { render } from 'react-dom';

import Carousel from './Carousel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Carousel>
      <div>hi</div>
    </Carousel>,
    div,
  );
});
