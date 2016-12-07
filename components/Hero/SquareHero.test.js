import React from 'react';
import { render } from 'react-dom';
import SquareHero from './SquareHero';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <SquareHero image="" alt="">
      requires children
    </SquareHero>,
    div
  );
});
