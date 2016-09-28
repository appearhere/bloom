import React, { PropTypes } from 'react';
import { storiesOf } from '@kadira/storybook';
import Carousel from './Carousel';

const Slide = ({ i }) => (
  <div
    style={ {
      width: '100%',
      height: '300px',
    } }
  >
    <div
      style={ {
        width: '100%',
        height: '300px',
        backgroundColor: 'red',
      } }
    >
      slide { i }
    </div>
  </div>
);

Slide.propTypes = {
  i: PropTypes.number,
};

const slides = [<Slide i={ 0 } />, <Slide i={ 1 } />, <Slide i={ 2 } />, <Slide i={ 3 } />, <Slide i={ 4 } />, <Slide i={ 5 } />, <Slide i={ 6 } />, <Slide i={ 7 } />];

storiesOf('Carousel', module)
  .add('lol', () => (
    <div style={ { width: '80vW', overflowX: 'visible', margin: '0 auto' } }>
      <Carousel items={ slides } />
    </div>
  ));