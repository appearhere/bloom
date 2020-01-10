import PropTypes from 'prop-types';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  PictureCard,
  Carousel,
} from '@appearhere/bloom';

const StorySlide = ({ number }) => (
  <div key={`slide-${number}`}>
    <PictureCard
      src={`https://placekitten.com/g/287/4${number * 2 + 10}`}
      style={{
        height: '300px',
        verticalAlign: 'middle',
        textAlign: 'center',
        fontSize: '5rem',
        width: '200px'
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


storiesOf('Carousel', module)
.add('Default', () => (
  <Carousel slidesToShow={4} onChange={action('Slide changed')}>{slides}</Carousel>
))
.add('With Title', () => (
  <Carousel title="Carousel Title" slidesToShow={4} onChange={action('Slide changed')}>{slides}</Carousel>
))
.add('With Center controls', () => (
  <Carousel title="Carousel Title" useCenterControls useTopRightControls={false} slidesToShow={4} onChange={action('Slide changed')}>{slides}</Carousel>
));
