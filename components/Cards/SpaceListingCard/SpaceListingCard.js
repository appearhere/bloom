import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import getValidIndex from '../../../utils/getValidIndex/getValidIndex';
import Carousel from '../../Carousel/Carousel';
import BtnContainer from '../../BtnContainer/BtnContainer';
import Icon from '../../Icon/Icon';
import Link from '../../Link/Link';
import ScreenReadable from '../../ScreenReadable/ScreenReadable';
import FittedImage from '../../FittedImage/FittedImage';
import css from './SpaceListingCard.css';
import Blokk from '../../Blokk/Blokk';

export default class SpaceListingCard extends Component {
  static propTypes = {
    href: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
      })
    ),
    price: PropTypes.node,
    priceUnit: PropTypes.node,
    name: PropTypes.node,
    location: PropTypes.node,
    size: PropTypes.node,
    className: PropTypes.string,
    bodyClassName: PropTypes.string,
    placeLabel: PropTypes.string,
    placeHref: PropTypes.string,
    accessibilityNextLabel: PropTypes.string,
    accessibilityPrevLabel: PropTypes.string,
  };

  static defaultProps = {
    accessibilityNextLabel: 'Show next slide',
    accessibilityPrevLabel: 'Show previous slide',
    href: '#',
    images: [],
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
      price,
      priceUnit,
      name,
      location,
      size,
      className,
      placeHref,
      placeLabel,
      bodyClassName,
    } = this.props;

    const shouldRenderEmptyState = !(
      (images.length > 0) &&
      (price && priceUnit) &&
      name &&
      location && size
    );

    return (
      <div className={ cx(css.root, className) }>
        <div className={ css.carousel }>
          { placeLabel && placeHref && (
            <Link
              href={ placeHref }
              className={ css.placeLink }
              iconClassName={ css.placeLinkIcon }
            >
              { placeLabel }
            </Link>
          ) }
          { !shouldRenderEmptyState && (
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
          ) }
          <div
            href={ href }
            className={ css.inner }
          >
            <Carousel
              lowestVisibleItemIndex={ visibleImageIndex }
              wrapAround
              dragging
            >
              { !shouldRenderEmptyState ? images.map(({ src, alt }) => (
                <div key={ src }>
                  <FittedImage
                    className={ css.image }
                    src={ src }
                    alt={ alt }
                  />
                </div>
              )) : (
                <div>
                  <div className={ css.image } />
                </div>
              ) }
            </Carousel>
          </div>
        </div>
        { !shouldRenderEmptyState ? (
          <a
            href={ href }
            className={ cx(css.body, bodyClassName) }
          >
            <div>
              <span className={ css.price }>{ price }</span>
              { '\u00a0' }
              <span className={ css.priceUnit }>{ priceUnit }</span>
            </div>
            <div className={ css.name }>{ name }</div>
            <div className={ css.additionalInfo }>
              <span className={ css.location }>{ location }</span>
              <span className={ css.spacer }>•</span>
              <span className={ css.size }>{ size }</span>
            </div>
          </a>
        ) : (
          <div className={ cx(css.body, bodyClassName) }>
            <Blokk length={ 4 } />
            <Blokk length={ 12 } />
            <Blokk length={ 7 } />
          </div>
        ) }
      </div>
    );
  }
}
