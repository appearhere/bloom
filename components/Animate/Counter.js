import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion';

export default class Counter extends Component {
  static propTypes = {
    transform: PropTypes.func,
    startValue: PropTypes.number,
    endValue: PropTypes.number.isRequired,
    className: PropTypes.string,
    onRest: PropTypes.func,
  };

  static defaultProps = {
    transform: val => val,
    startValue: 0,
  };

  render() {
    const {
      transform,
      startValue,
      endValue,
      className,
      onRest,
    } = this.props;

    return (
      <Motion
        defaultStyle={ {
          x: startValue,
        } }
        style={ {
          x: spring(endValue, { stiffness: 390, damping: 46 }),
        } }
        onRest={ onRest }
      >
        { ({ x }) => (
          <span className={ className }>
            { transform(x) }
          </span>
        ) }
      </Motion>
    );
  }
}
