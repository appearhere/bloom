import React, { PropTypes } from 'react';
import cx from 'classnames';

import css from './Carousel.css';

const CarouselInner = ({ children, className, style, slideWidth = 100, ...rest }) => {
  const classes = cx(css.root, css.animate, className);

  return (
    <div
      className={ classes }
      style={ style }
      { ...rest }
    >
      { children.map((slide, i) => (
        <div
          key={ i }
          className={ css.slide }
          style={ {
            width: `${slideWidth}%`,
          } }
        >
          { slide }
        </div>
      )) }
    </div>
  );
};

CarouselInner.propTypes = {
  children: PropTypes.array.isRequired,
  slideWidth: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default CarouselInner;