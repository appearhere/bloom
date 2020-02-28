// @flow
import * as React from 'react';
import cx from 'classnames';
import NukaCarousel from 'nuka-carousel';
import shortid from 'shortid';
import Icon from '../Icon/Icon';
import BtnContainer from '../BtnContainer/BtnContainer';
import ScreenReadable from '../ScreenReadable/ScreenReadable';

import css from './Carousel.css';

type Props = {
  children: Array<React.Node>,
  title?: string,
  slidesToShow: number,
  withoutControls: boolean,
  dragging: boolean,
  useCenterControls: boolean,
  useTopRightControls: boolean,
  accessibilityNextLabel: string,
  accessibilityPrevLabel: string,
  infinite?: boolean,
  titleSize: 'small' | 'medium' | 'large'
};

const Carousel = (props: Props) => {
  const {
    children,
    title,
    slidesToShow,
    withoutControls,
    dragging,
    useCenterControls,
    useTopRightControls,
    accessibilityNextLabel,
    accessibilityPrevLabel,
    infinite,
    titleSize,
  } = props;
  const [slideIndex, setSlideIndex] = React.useState(0);

  const renderTopRightControls = () => (
    <div className={css.controls}>
      { title && <h2 className={cx(css.title, {
        [css.small]: titleSize === 'small',
        [css.medium]: titleSize === 'medium',
        [css.large]: titleSize === 'large',
      })}>{title}</h2> }
      {slidesToShow < children.length && (
        <div className={css.buttons}>
          <BtnContainer
            onClick={() => setSlideIndex(slideIndex - 1)}
            className={css.button}
            disabled={slideIndex === 0}
          >
            <Icon className={cx(css.chevron, css.prevIcon)} name="chevron" />
            <ScreenReadable>{accessibilityPrevLabel}</ScreenReadable>
          </BtnContainer>
          <BtnContainer
            onClick={() => setSlideIndex(slideIndex + 1)}
            className={css.button}
            disabled={slideIndex === children.length - slidesToShow}
          >
            <Icon className={cx(css.chevron, css.nextIcon)} name="chevron" />
            <ScreenReadable>{accessibilityNextLabel}</ScreenReadable>
          </BtnContainer>
        </div>
      )}
    </div>
  );

  const renderCenterLeftControls = () => {
    if (!infinite && slideIndex === 0) return null;
    return (
      <BtnContainer
        onClick={() => setSlideIndex(slideIndex - 1)}
        className={cx(css.control, css.prev)}
      >
        <Icon className={css.prevIcon} name="chevron" />
        <ScreenReadable>{accessibilityPrevLabel}</ScreenReadable>
      </BtnContainer>
    );
  };

  const renderCenterRightControls = () => {
    if (!infinite && slideIndex === children.length - slidesToShow) return null;
    return (
      <BtnContainer
        onClick={() => setSlideIndex(slideIndex + 1)}
        className={cx(css.control, css.next)}
      >
        <Icon className={css.nextIcon} name="chevron" />
        <ScreenReadable>{accessibilityNextLabel}</ScreenReadable>
      </BtnContainer>
    );
  };

  return (
    <div className={css.carousel}>
      {useTopRightControls && renderTopRightControls()}
      {useCenterControls && renderCenterLeftControls()}
      {useCenterControls && renderCenterRightControls()}
      <NukaCarousel slideIndex={slideIndex} {...(props: any)}>
        {children.map(slide => (
          <div key={shortid.generate()} className={css.slideInner}>
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
  titleSize: 'large'
};

export default Carousel;
