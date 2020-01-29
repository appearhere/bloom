// @flow
import React, { Component } from 'react';
import ExecutionEnvironment from 'exenv';

const objectFitImages = ExecutionEnvironment.canUseDOM ? require('object-fit-images') : null;

export type Image = { 
  src: string,
  alt: string,
}

type Props = {
  ...Image,
  className?: string,
}

export default class FittedImage extends Component<Props> {
  component: ?HTMLImageElement;
  
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
