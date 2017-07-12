import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import getValidIndex from '../../../utils/getValidIndex/getValidIndex';
import Carousel from '../../Carousel/Carousel';
import BtnContainer from '../../BtnContainer/BtnContainer';
import Badge from '../../Badge/Badge';
import Icon from '../../Icon/Icon';
import ScreenReadable from '../../ScreenReadable/ScreenReadable';
import FittedImage from '../../FittedImage/FittedImage';
import css from './DestinationListingCard.css';

const badgeContextPropType = (props) => {
  if (props.badgeLabel && !props.badgeContext) {
    throw new Error(
      'the prop badgeContext must be present when the prop badgeLabel has been provided.',
    );
  }

  return null;
};

export default class DestinationListingCard extends Component {
  static propTypes = {
    href: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
      }),
    ),
    priceFromLabel: PropTypes.node,
    price: PropTypes.node,
    priceUnit: PropTypes.node,
    badgeLabel: PropTypes.string,
    badgeContext: badgeContextPropType,
    name: PropTypes.node,
    className: PropTypes.string,
    bodyClassName: PropTypes.string,
    carouselClassName: PropTypes.string,
    accessibilityNextLabel: PropTypes.string,
    accessibilityPrevLabel: PropTypes.string,
    carouselOverlay: PropTypes.node,
    information: PropTypes.array,
    onClick: PropTypes.func,
    fixedHeight: PropTypes.bool,
  };

  static defaultProps = {
    accessibilityNextLabel: 'Show next slide',
    accessibilityPrevLabel: 'Show previous slide',
    href: '#',
    images: [],
    information: [],
    fixedHeight: false,
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
  };

  handlePrevImage = () => {
    this.setState(({ visibleImageIndex }, { images }) => {
      const newIndex = getValidIndex(visibleImageIndex - 1, images.length, 1);

      return {
        visibleImageIndex: newIndex,
      };
    });
  };

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
      badgeLabel,
      badgeContext,
      name,
      className,
      bodyClassName,
      carouselClassName,
      carouselOverlay,
      information,
      onClick,
      fixedHeight,
      ...rest,
    } = this.props;

    return (
      <div { ...rest } className={ cx(css.root, className, fixedHeight ? css.fixedHeight : null) }>
        <div className={ cx(css.carousel, carouselClassName) }>
          { carouselOverlay }
          <BtnContainer onClick={ this.handlePrevImage } className={ cx(css.control, css.prev) }>
            <Icon className={ cx(css.icon, css.prevIcon) } name="chevron" />
            <ScreenReadable>
              { accessibilityPrevLabel }
            </ScreenReadable>
          </BtnContainer>
          <BtnContainer onClick={ this.handleNextImage } className={ cx(css.control, css.next) }>
            <Icon className={ cx(css.icon, css.nextIcon) } name="chevron" />
            <ScreenReadable>
              { accessibilityNextLabel }
            </ScreenReadable>
          </BtnContainer>
          <div className={ css.inner }>
            <Carousel
              lowestVisibleItemIndex={ visibleImageIndex }
              wrapAround
              swiping={ false }
              dragging={ false }
            >
              { images.map(({ src, alt }) =>
                (<a href={ href } key={ src } onClick={ onClick }>
                  <div className={ css.imageContainer }>
                    <FittedImage className={ css.image } src={ src } alt={ alt } />
                  </div>
                </a>)) }
            </Carousel>
          </div>
        </div>
        <a href={ href } className={ cx(css.body, bodyClassName) } onClick={ onClick }>
          <div className={ css.priceContainer }>
            { priceFromLabel &&
              <span className={ css.priceFromLabel }>
                { priceFromLabel }
              </span> }
            <span className={ css.price }>
              { price }
            </span>
            { '\u00a0' }
            <span className={ css.priceUnit }>
              { priceUnit }
            </span>
            { (badgeLabel && badgeContext) && (
              <Badge className={ css.badge } context={ badgeContext }>
                { badgeLabel }
              </Badge>
            ) }
          </div>
          <div className={ css.name }>
            { name }
          </div>
          <div className={ css.additionalInformationBlock }>
            { information
              .filter(info => info)
              .map(info => (<span>
                { info }
              </span>))
              .reduce((accu, elem, i, arr) => {
                const wrappedEl = (
                  <span
                    key={ `info-${i}` }
                    className={ css.additionalInformationItem }
                    style={ {
                      maxWidth: `calc(${100 / arr.length}% - 1rem)`,
                    } }
                  >
                    { elem }
                  </span>
                );
                const spacer = (
                  <span key={ `info-spacer-${i}` } className={ css.spacer }>
    : null;
                    •
                  </span>
                );

                return accu === null ? [wrappedEl] : [...accu, spacer, wrappedEl];
              }, null) }
          </div>
        </a>
      </div>
    );
  }
}
