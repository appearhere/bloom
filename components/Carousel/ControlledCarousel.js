import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cx from 'classnames';

import BtnContainer from '../BtnContainer/BtnContainer';
import Carousel from './Carousel';
import Icon from '../Icon/Icon';
import IndicatorGroup from '../Indicators/IndicatorGroup';
import ScreenReadable from '../ScreenReadable/ScreenReadable';

import m from '../../globals/modifiers.css';
import css from './ControlledCarousel.css';

import getValidIndex from '../../utils/getValidIndex/getValidIndex';

export default class ControlledCarousel extends Component {
  static propTypes = {
    accessibilityNextLabel: PropTypes.string,
    accessibilityPrevLabel: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    defaultSlideIndex: PropTypes.number,
    innerClassName: PropTypes.string,
    showIndicators: PropTypes.bool,
    slidesToScroll: PropTypes.number,
    slidesToShow: PropTypes.number,
    wrapAround: PropTypes.bool,
  };

  static defaultProps = {
    accessibilityNextLabel: 'Show next slide',
    accessibilityPrevLabel: 'Show previous slide',
    defaultSlideIndex: 0,
    showIndicators: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    wrapAround: false,
  };

  constructor(props) {
    super(props);
    this.state = { lowestVisibleItemIndex: props.defaultSlideIndex || 0 };
  }

  handlePreviousSlide = () => {
    const { lowestVisibleItemIndex } = this.state;
    const { slidesToScroll } = this.props;
    this.goToIndex(lowestVisibleItemIndex - slidesToScroll);
  }

  handleNextSlide = () => {
    const { lowestVisibleItemIndex } = this.state;
    const { slidesToScroll } = this.props;
    this.goToIndex(lowestVisibleItemIndex + slidesToScroll);
  }

  handleChange = (lowestVisibleItemIndex) => {
    this.setState({ lowestVisibleItemIndex });
  }

  goToIndex(i) {
    const { slidesToShow, children } = this.props;
    const nonEmptyChildren = children.filter(item => item);

    const lowestVisibleItemIndex = getValidIndex(i, nonEmptyChildren.length, slidesToShow);

    this.setState({ lowestVisibleItemIndex });
  }

  render() {
    const { lowestVisibleItemIndex } = this.state;
    const {
      accessibilityNextLabel,
      accessibilityPrevLabel,
      children,
      className,
      innerClassName,
      showIndicators,
      slidesToShow,
      wrapAround,
      ...rest,
    } = this.props;
    const nonEmptyChildren = children.filter(item => item);

    const prevDisabled = !wrapAround && lowestVisibleItemIndex <= 0;
    const nextDisabled = !wrapAround &&
      lowestVisibleItemIndex >= nonEmptyChildren.length - slidesToShow;

    const indicatorCount = wrapAround
      ? nonEmptyChildren.length
      : nonEmptyChildren.length - (slidesToShow - 1);

    return (
      <div className={ cx(css.root, className) }>
        <div className={ innerClassName }>
          <Carousel
            slidesToShow={ slidesToShow }
            lowestVisibleItemIndex={ lowestVisibleItemIndex }
            wrapAround={ wrapAround }
            onChange={ this.handleChange }
            { ...rest }
          >
            { nonEmptyChildren }
          </Carousel>
        </div>
        <div className={ css.controls }>
          <BtnContainer
            onClick={ this.handlePreviousSlide }
            className={ cx(css.control, css.prev) }
            disabled={ prevDisabled }
          >
            <Icon name="chevron" />
            <ScreenReadable>{ accessibilityPrevLabel }</ScreenReadable>
          </BtnContainer>
          <BtnContainer
            onClick={ this.handleNextSlide }
            className={ cx(css.control, css.next) }
            disabled={ nextDisabled }
          >
            <Icon name="chevron" />
            <ScreenReadable>{ accessibilityNextLabel }</ScreenReadable>
          </BtnContainer>
        </div>
        { showIndicators && (
          <IndicatorGroup activeIndicator={ lowestVisibleItemIndex } className={ css.indicators }>
            { indicator => (
              <div>
                { [...Array(indicatorCount)].map((child, i) => indicator({
                  i,
                  key: i,
                  className: cx(m.dib, m.mt0, m.mrs, css.indicator),
                })) }
              </div>
            ) }
          </IndicatorGroup>
        ) }
      </div>
    );
  }
}
