import PropTypes from 'prop-types';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  PictureCard,
  Carousel,
  ControlledCarousel
} from '@appearhere/bloom';

const StorySlide = ({ number }) => (
  <div key={`slide-${number}`} style={{ paddingLeft: '2%', paddingRight: '2%' }}>
    <PictureCard
      src={`http://placekitten.com/g/287/4${number * 2 + 10}`}
      style={{
        height: '300px',
        verticalAlign: 'middle',
        textAlign: 'center',
        fontSize: '5rem',
      }}
      center
      href="#"
    >
      {number}
    </PictureCard>
  </div>
);
StorySlide.propTypes = { number: PropTypes.number };
const slides = [...Array(10).keys()].map(i => <StorySlide number={i} key={i} />);

storiesOf('Carousel', module).add('Default', () => (
  <Carousel onChange={action('Slide changed')}>{slides}</Carousel>
));

storiesOf('Controlled Carousel', module)
  .add('Default', () => <ControlledCarousel>{slides}</ControlledCarousel>)
  .add('Muliple in view 💯', () => (
    <ControlledCarousel slidesToShow={3}>{slides}</ControlledCarousel>
  ))
  .add('Infinite ∞', () => <ControlledCarousel wrapAround>{slides}</ControlledCarousel>)
  .add('Peaking 🐦', () => <ControlledCarousel peaking>{slides}</ControlledCarousel>)
  .add('🐦 + ∞ + 💯', () => (
    <ControlledCarousel peaking wrapAround slidesToShow={3}>
      {slides}
    </ControlledCarousel>
  ));
