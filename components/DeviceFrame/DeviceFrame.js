import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { canUseDOM } from 'exenv';

import getValidIndex from '../../utils/getValidIndex/getValidIndex';
import Swap from '../Animate/Swap';

export default class DeviceFrame extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(
      PropTypes.shape({
        /* eslint-disable react/no-unused-prop-types */
        src: PropTypes.string,
        alt: PropTypes.string,
        /* eslint-enable react/no-unused-prop-types */
      })
    ).isRequired,
    deviceImage: PropTypes.string.isRequired,
    interval: PropTypes.number,
    css: PropTypes.shape({
      /* eslint-disable react/no-unused-prop-types */
      root: PropTypes.string,
      frame: PropTypes.string,
      inner: PropTypes.string,
      img: PropTypes.string,
      /* eslint-enable react/no-unused-prop-types */
    }),
  };

  static defaultProps = {
    interval: 3000,
  };

  state = {
    activeIndex: 0,
  };

  componentDidMount() {
    const { children, interval } = this.props;

    this.preloadImages();

    if (children.length > 1) {
      this.interval = setInterval(this.incrementActiveIndex, interval);
    }
  }

  componentWillUnmount() {
    if (this.interval) clearInterval(this.interval);
  }

  incrementActiveIndex = () => {
    const { children } = this.props;
    const { activeIndex } = this.state;

    this.setState({
      activeIndex: getValidIndex(activeIndex + 1, children.length, 1),
    });
  };

  preloadImages = () => {
    const { children } = this.props;

    if (canUseDOM) {
      children.forEach(({ src }) => {
        /* eslint-disable no-undef */
        const imgElm = new Image();
        imgElm.src = src;
        /* eslint-enable no-undef */
      });
    }
  }

  render() {
    const { children, interval, css, deviceImage } = this.props;
    const { activeIndex } = this.state;
    const img = children[activeIndex];

    return (
      <div className={ css.root }>
        <img
          className={ css.frame }
          src={ deviceImage }
          role="presentation"
        />
        <div className={ css.inner }>
          <Swap animationTimeout={ interval }>
            <img
              key={ activeIndex }
              className={ css.img }
              src={ img.src }
              alt={ img.alt }
            />
          </Swap>
        </div>
      </div>
    );
  }
}
