import 'mutationobserver-shim';

import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import NukaCarousel from 'nuka-carousel';
import nanoid from 'nanoid';
import Icon from '../Icon/Icon';
import SectionHeader from '../Type/SectionHeader/SectionHeader';
import BtnContainer from '../BtnContainer/BtnContainer';
import ScreenReadable from '../ScreenReadable/ScreenReadable';

import css from './Carousel.css';

const Carousel = props => {
  const id = nanoid();
  const [slideIndex, setSlideIndex] = useState(0);

  const renderTopRightControls = () => {
    if (!props.useTopRightControls) return null;
    return (
      <div className={css.controls}>
        <SectionHeader title={props.title} level={2} className={css.title} />
        {props.slidesToShow < props.children.length && (
          <div className={css.buttons}>
            <BtnContainer
              onClick={() => setSlideIndex(slideIndex - 1)}
              className={css.button}
              disabled={slideIndex === 0}
            >
              <Icon className={cx(css.chevron, css.prevIcon)} name="chevron" />
              <ScreenReadable>{props.accessibilityPrevLabel}</ScreenReadable>
            </BtnContainer>
            <BtnContainer
              onClick={() => setSlideIndex(slideIndex + 1)}
              className={css.button}
              disabled={slideIndex === props.children.length - props.slidesToShow}
            >
              <Icon className={cx(css.chevron, css.nextIcon)} name="chevron" />
              <ScreenReadable>{props.accessibilityNextLabel}</ScreenReadable>
            </BtnContainer>
          </div>
        )}
      </div>
    );
  };

  const renderCenterLeftcontrols = () => {
    if (!props.useCenterControls || (!props.infinite && slideIndex === 0)) return null;
    return (
      <BtnContainer onClick={() => setSlideIndex(slideIndex - 1)} className={cx(css.control, css.prev)}>
        <Icon className={css.prevIcon} name="chevron" />
        <ScreenReadable>{props.accessibilityPrevLabel}</ScreenReadable>
      </BtnContainer>
    )
  }

  const renderCenterRightcontrols = () => {
    if (!props.useCenterControls || (!props.infinite && slideIndex === props.children.length - props.slidesToShow)) return null;
    return (
      <BtnContainer onClick={() => setSlideIndex(slideIndex + 1)} className={cx(css.control, css.next)}>
        <Icon className={css.nextIcon} name="chevron" />
        <ScreenReadable>{props.accessibilityNextLabel}</ScreenReadable>
      </BtnContainer>
    )
  }

  return (
    <div className={css.carousel}>
      {renderTopRightControls()}
      {renderCenterLeftcontrols()}
      {renderCenterRightcontrols()}
      <NukaCarousel slideIndex={slideIndex} {...props}>
        {props.children.map((slide) => (
          <div key={id} className={css.slideInner}>
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
  useTopRightControls: true,
  useCenterControls: false,
  accessibilityNextLabel: 'Show next slide',
  accessibilityPrevLabel: 'Show previous slide',
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  slidesToShow: PropTypes.number,
  withoutControls: PropTypes.bool,
  dragging: PropTypes.bool,
  useCenterControls: PropTypes.bool,
  useTopRightControls: PropTypes.bool,
  accessibilityNextLabel: PropTypes.string,
  accessibilityPrevLabel: PropTypes.string,
};

export default Carousel;
