// @flow
import * as React from 'react';
import cx from 'classnames';
import Carousel from 'nuka-carousel';

import noop from '../../../utils/noop';
import BtnContainer from '../../BtnContainer/BtnContainer';
import FittedImage from '../../FittedImage/FittedImage';
import getValidIndex from '../../../utils/getValidIndex/getValidIndex';
import HeartBtn from '../../HeartBtn/HeartBtn';
import Icon from '../../Icon/Icon';
import ScreenReadable from '../../ScreenReadable/ScreenReadable';
import css from './DestinationListingCard.css';
import type { Image } from '../../FittedImage/FittedImage';

type Props = {
  href: string,
  images: Array<Image>,
  priceFromLabel?: React.Node,
  price: React.Node,
  priceUnit: React.Node,
  badge?: React.Node,
  name: React.Node,
  className?: string,
  bodyClassName?: string,
  carouselClassName?: string,
  accessibilityNextLabel: string,
  accessibilityPrevLabel: string,
  carouselOverlay: React.Node,
  information: Array<string>,
  onClick: Function,
  fixedHeight: boolean,
  children?: React.Node,
  onFavouriteClick: Function,
  onCarouselChange: Function,
  favourite: boolean,
  favouriteable?: boolean,
  target: '_self' | '_blank' | '_parent' | '_top',
  variant: 'default' | 'special',
};
type State = {
  fav: boolean,
  visibleImageIndex: number,
};
class DestinationListingCard extends React.Component<Props, State> {
  static defaultProps = {
    accessibilityNextLabel: 'Show next slide',
    accessibilityPrevLabel: 'Show previous slide',
    href: '#',
    images: [],
    information: [],
    fixedHeight: false,
    onClick: noop,
    onFavouriteClick: noop,
    onCarouselChange: noop,
    target: '_self',
    variant: 'default',
  };

  state = {
    fav: false,
    visibleImageIndex: 0,
  };

  onClick = (e: SyntheticEvent<HTMLButtonElement>): void => {
    this.props.onClick(e, this.props.href);
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
      badge,
      name,
      className,
      bodyClassName,
      carouselClassName,
      carouselOverlay,
      information,
      fixedHeight,
      children,
      onFavouriteClick,
      onCarouselChange,
      onClick,
      favourite,
      favouriteable,
      target,
      variant,
      ...rest
    } = this.props;

    return (
      <div {...rest} className={cx(css.root, className, fixedHeight ? css.fixedHeight : null)}>
        {favouriteable && (
          <HeartBtn className={css.heart} onClick={onFavouriteClick} active={favourite} />
        )}
        <div className={cx(css.carousel, carouselClassName)}>
          {carouselOverlay}
          <BtnContainer onClick={this.handlePrevImage} className={cx(css.control, css.prev)}>
            <Icon className={cx(css.icon, css.prevIcon)} name="chevron" />
            <ScreenReadable>{accessibilityPrevLabel}</ScreenReadable>
          </BtnContainer>
          <BtnContainer onClick={this.handleNextImage} className={cx(css.control, css.next)}>
            <Icon className={cx(css.icon, css.nextIcon)} name="chevron" />
            <ScreenReadable>{accessibilityNextLabel}</ScreenReadable>
          </BtnContainer>
          <div className={css.inner}>
            <Carousel
              slideIndex={visibleImageIndex}
              wrapAround
              swiping={false}
              dragging={false}
              beforeSlide={onCarouselChange}
              withoutControls
            >
              {images.map(({ src, ...imageProps }) => (
                <a href={href} key={src} onClick={this.onClick} target={target}>
                  <div className={css.imageContainer}>
                    <FittedImage className={css.image} src={src} {...(imageProps: any)} />
                  </div>
                </a>
              ))}
            </Carousel>
          </div>
        </div>
        <div className={cx(css.body, bodyClassName)}>
          <a href={href} onClick={this.onClick} className={css.bodyLink} target={target}>
            <div className={css.title}>
              <div className={css.priceContainer}>
                {priceFromLabel && <span className={css.priceFromLabel}>{priceFromLabel}</span>}
                <span className={css.price}>{price}</span>
                {'\u00a0'}
                <span className={css.priceUnit}>{priceUnit}</span>
              </div>
            </div>
            <div className={css.name}>{name}</div>
            {(badge || information.length > 0) && (
              <div className={css.additionalInformationBlock}>
                {badge && <div className={css.additionalInformationBadge}>{badge}</div>}
                {information.length > 0 && (
                  <div className={cx(css.additionalInformationText, css[variant])}>
                    {information
                      .filter(info => info)
                      .map(info => <span>{info}</span>)
                      .reduce((accu, elem, i, arr) => {
                        const wrappedEl = (
                          <span
                            key={`info-${i}`}
                            className={css.additionalInformationItem}
                            style={{
                              maxWidth: `calc(${100 / arr.length}% - 1rem)`,
                            }}
                          >
                            {elem}
                          </span>
                        );
                        const spacer = (
                          <span key={`info-spacer-${i}`} className={css.spacer}>
                            •
                          </span>
                        );

                        return accu === null ? [wrappedEl] : [...accu, spacer, wrappedEl];
                      }, null)}
                  </div>
                )}
              </div>
            )}
          </a>
          {children && <div className={css.footer}>{children}</div>}
        </div>
      </div>
    );
  }
}

export default DestinationListingCard;
