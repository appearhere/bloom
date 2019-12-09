import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Carousel from './Carousel';

window.matchMedia = jest.fn().mockImplementation(() => {
  return {
    matches: false,
  };
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Carousel>
      <span>child</span>
      <span>child</span>
    </Carousel>,
    div,
  );
});
