// @flow
import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

type Props = {
  transform: Function,
  startValue: number,
  endValue: number,
  className?: string,
  onRest?: Function,
}

export default class Counter extends Component<Props> {
  static defaultProps = {
    transform: (val: number) => val,
    startValue: 0,
  };

  render() {
    const { transform, startValue, endValue, className, onRest } = this.props;

    return (
      <Motion
        defaultStyle={{
          x: startValue,
        }}
        style={{
          x: spring(endValue, { stiffness: 390, damping: 46 }),
        }}
        onRest={onRest}
      >
        {({ x }) => <span className={className}>{transform(x)}</span>}
      </Motion>
    );
  }
}
