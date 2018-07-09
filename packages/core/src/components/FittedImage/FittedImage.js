import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExecutionEnvironment from 'exenv';

const objectFitImages = ExecutionEnvironment.canUseDOM ? require('object-fit-images') : null;

export default class FittedImage extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
  };

  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM && typeof objectFitImages === 'function') {
      objectFitImages(this.component);
    }
  }

  render() {
    const { src, alt, className, ...rest } = this.props;

    return (
      <img
        {...rest}
        className={className}
        src={src}
        alt={alt}
        ref={c => {
          this.component = c;
        }}
      />
    );
  }
}
