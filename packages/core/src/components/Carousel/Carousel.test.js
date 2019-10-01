import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Carousel from './Carousel';

it('renders without crashing', () => {
  const { container } = render(
    <Carousel>
      <span>child</span>
    </Carousel>
  );
});
