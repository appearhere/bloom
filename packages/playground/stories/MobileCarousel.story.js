import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  PictureCard,
  MobileCarousel,
} from '@appearhere/bloom';

const StorySlide = ({ number }) => (
  <div
    key={`slide-${number}`}
    style={{
      height: '100%',
    }}
  >
    <PictureCard
      src={`https://placekitten.com/g/287/4${number * 2 + 10}`}
      style={{
        verticalAlign: 'middle',
        textAlign: 'center',
        fontSize: '5rem',
        width: '200px',
        height: number % 2 ? '300px' : null,
      }}
      center
      href="#"
    >
      {number}
    </PictureCard>
  </div>
);
const slides = [...Array(10).keys()].map(i => <StorySlide number={i} key={i} />);


storiesOf('MobileCarousel', module)
.add('Default', () => (
  <MobileCarousel slidesToShow={4} onChange={action('Slide changed')}>{slides}</MobileCarousel>
))
.add('With Title', () => (
  <MobileCarousel title="Carousel Title" slidesToShow={4} onChange={action('Slide changed')}>{slides}</MobileCarousel>
))
.add('With small Title', () => (
  <MobileCarousel titleSize="small" title="Carousel Title" slidesToShow={4} onChange={action('Slide changed')}>{slides}</MobileCarousel>
));
