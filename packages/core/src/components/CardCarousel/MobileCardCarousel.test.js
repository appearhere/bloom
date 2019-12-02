import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MobileCardCarousel from './MobileCardCarousel';

it('renders without crashing', () => {
  const { container } = render(
    <MobileCardCarousel>
      <span>child</span>
      <span>child</span>
    </MobileCardCarousel>
  );
});
