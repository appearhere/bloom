import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import getValidIndex from '../../../utils/getValidIndex/getValidIndex';
import Carousel from '../../Carousel/Carousel';
import BtnContainer from '../../BtnContainer/BtnContainer';
import Icon from '../../Icon/Icon';
import ScreenReadable from '../../ScreenReadable/ScreenReadable';
import FittedImage from '../../FittedImage/FittedImage';
import css from './SpaceListingCard.css';

export default class SpaceListingCard extends Component {
  static propTypes = {
    href: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
      })
    ),
    accessibilityNextLabel: PropTypes.string,
    accessibilityPrevLabel: PropTypes.string,
  };

  static defaultProps = {
    accessibilityNextLabel: 'Show next slide',
    accessibilityPrevLabel: 'Show previous slide',
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
    } = this.props;

    return (
      <div className={ css.root }>
        <div className={ css.carousel }>
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
          <a
            href={ href }
            className={ css.inner }
          >
            <Carousel lowestVisibleItemIndex={ visibleImageIndex } wrapAround>
              { images.map(({ src, alt }) => (
                <div key={ src }>
                  <FittedImage
                    className={ css.image }
                    src={ src }
                    alt={ alt }
                  />
                </div>
              )) }
            </Carousel>
          </a>
        </div>
        <a
          href={ href }
          className={ css.spaceDetail }
        >
          { /* TODO: Add space details e.g., name and price here */}
        </a>
      </div>
    );
  }
}
