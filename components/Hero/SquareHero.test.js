import React from 'react';
import { render } from 'react-dom';
import SquareHero from './SquareHero';

it('renders with an image without crashing', () => {
  const div = document.createElement('div');
  render(
    <SquareHero image="" alt="">
      requires children
    </SquareHero>,
    div
  );
});

it('renders with a video without crashing', () => {
  const div = document.createElement('div');
  render(
    <SquareHero
      videoProps={ {
        videoClassName: '',
        posterClassName: '',
        posterSrc: <source />,
        videoSrc: <source />,
      } }
    >
      requires children
    </SquareHero>,
    div
  );
});
