import React, { PropTypes } from 'react';

import Carousel from 'components/Carousel/Carousel';
import css from './Styleguide.css';

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

const Styleguide = () => (
  <div className={ css.root } style={{ overflowX: 'hidden' }}>
    <h1>Welcome to Bloom</h1>
    <div className={css.carouselContainer}>
      <Carousel items={ slides } />
    </div>
  </div>
);

export default Styleguide;
