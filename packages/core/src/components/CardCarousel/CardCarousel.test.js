import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';

window.matchMedia = jest.fn().mockImplementation(query => {
  return {
    matches: false,
  };
});

import CardCarousel from './CardCarousel';

it('renders without crashing', () => {
  const { container } = render(
    <CardCarousel>
      <span>child</span>
      <span>child</span>
    </CardCarousel>
  );
});
