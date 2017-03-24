import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import getValidIndex from '../../../utils/getValidIndex/getValidIndex';
import Carousel from '../../Carousel/Carousel';
import BtnContainer from '../../BtnContainer/BtnContainer';
import Icon from '../../Icon/Icon';
import ScreenReadable from '../../ScreenReadable/ScreenReadable';
import FittedImage from '../../FittedImage/FittedImage';
import css from './DestinationListingCard.css';

export default class DestinationListingCard extends Component {
  static propTypes = {
    href: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
      })
    ),
    priceFromLabel: PropTypes.node,
    price: PropTypes.node,
    priceUnit: PropTypes.node,
    name: PropTypes.node,
    className: PropTypes.string,
    bodyClassName: PropTypes.string,
    carouselClassName: PropTypes.string,
    accessibilityNextLabel: PropTypes.string,
    accessibilityPrevLabel: PropTypes.string,
    carouselOverlay: PropTypes.node,
    information: PropTypes.array,
  };

  static defaultProps = {
    accessibilityNextLabel: 'Show next slide',
    accessibilityPrevLabel: 'Show previous slide',
    href: '#',
    images: [],
    information: [],
  };

  state = {
    visibleImageIndex: 0,
  };

  handleNextImage = () => {
    this.setState(({ visibleImageIndex }, { images }) => {
      const newIndex = getValidIndex(visibleImageIndex + 1, images.length, 1);

      return {
        visibleImageIndex: newIndex,
      };
    });
  }

  handlePrevImage = () => {
    this.setState(({ visibleImageIndex }, { images }) => {
      const newIndex = getValidIndex(visibleImageIndex - 1, images.length, 1);

      return {
        visibleImageIndex: newIndex,
      };
    });
  }

  render() {
    const { visibleImageIndex } = this.state;
    const {
      href,
      images,
      accessibilityPrevLabel,
      accessibilityNextLabel,
      priceFromLabel,
      price,
      priceUnit,
      name,
      className,
      bodyClassName,
      carouselClassName,
      carouselOverlay,
      information,
    } = this.props;

    return (
      <div className={ cx(css.root, className) }>
        <div className={ cx(css.carousel, carouselClassName) }>
          { carouselOverlay }
          <div className={ css.carouselControls }>
            <BtnContainer
              onClick={ this.handlePrevImage }
              className={ cx(css.control, css.prev) }
            >
              <Icon name="chevron" />
              <ScreenReadable>{ accessibilityPrevLabel }</ScreenReadable>
            </BtnContainer>
            <BtnContainer
              onClick={ this.handleNextImage }
              className={ cx(css.control, css.next) }
            >
              <Icon name="chevron" />
              <ScreenReadable>{ accessibilityNextLabel }</ScreenReadable>
            </BtnContainer>
          </div>
          <div className={ css.inner }>
            <Carousel
              lowestVisibleItemIndex={ visibleImageIndex }
              wrapAround
              swiping={ false }
              dragging={ false }
            >
              { images.map(({ src, alt }) => (
                <a href={ href } key={ src }>
                  <FittedImage
                    className={ css.image }
                    src={ src }
                    alt={ alt }
                  />
                </a>
              )) }
            </Carousel>
          </div>
        </div>
        <a href={ href } className={ cx(css.body, bodyClassName) }>
          <div className={ css.name }>
            { priceFromLabel && <span className={ css.priceFromLabel }>{ priceFromLabel }</span> }
            <span className={ css.price }>{ price }</span>
            { '\u00a0' }
            <span className={ css.priceUnit }>{ priceUnit }</span>
          </div>
          <div className={ css.name }>{ name }</div>
          <div className={ css.additionalInfo }>
            {
              information
                .filter(info => info)
                .map(info => <span>{ info }</span>)
                .reduce((accu, elem) => (
                    accu === null
                      ? [elem]
                      : [...accu, <span className={ css.spacer }>•</span>, elem]
                  ),
                  null
                )
            }
          </div>
        </a>
      </div>
    );
  }
}
