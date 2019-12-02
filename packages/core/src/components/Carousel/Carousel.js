import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import NukaCarousel from 'nuka-carousel';
import Icon from '../Icon/Icon';
import SectionHeader from '../Type/SectionHeader/SectionHeader';

import css from './Carousel.css';

const Carousel = props => {
  const [slideIndex, setSlideIndex] = useState(0);

  const renderDesktopControls = () => {
    return (
      <div className={css.controls}>
        <SectionHeader title={props.title} level={2} className={css.title} />
        {props.slidesToShow < props.children.length && (
          <div className={css.buttons}>
            <button
              className={cx(css.button)}
              disabled={slideIndex === 0}
              onClick={() => setSlideIndex(slideIndex - 1)}
            >
              <Icon className={cx(css.chevron, css.prevIcon)} name="chevron-right" />
            </button>
            <button
              className={cx(css.button)}
              disabled={slideIndex === props.children.length - props.slidesToShow}
              onClick={() => setSlideIndex(slideIndex + 1)}
            >
              <Icon className={cx(css.chevron, css.nextIcon)} name="chevron-right" />
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      {renderDesktopControls()}
      <NukaCarousel slideIndex={slideIndex} {...props}>
        {props.children.map((slide, index) => (
          <div key={index} className={css.slideInner}>
            {slide}
          </div>
        ))}
      </NukaCarousel>
    </div>
  );
};

Carousel.defaultProps = {
  withoutControls: true,
  dragging: false,
  slidesToShow: 1,
  title: '',
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  slidesToShow: PropTypes.number,
  withoutControls: PropTypes.bool,
  dragging: PropTypes.bool,
};

export default Carousel;
