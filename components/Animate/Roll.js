import React, { Component, PropTypes } from 'react';
import { spring, TransitionMotion } from 'react-motion';

export default class Roll extends Component {
  static propTypes = {
    children: PropTypes.any,
    width: PropTypes.string,
  };

  static defaultProps = {
    width: 'auto',
  };

  getStyles = () => ({
    y: spring(0),
    opacity: spring(1),
  });

  willEnter = () => ({
    y: 100,
    opacity: 0,
  });

  willLeave = () => ({
    y: spring(-100),
    opacity: spring(0),
  });

  render() {
    const { children: child, width } = this.props;

    return (
      <TransitionMotion
        styles={ [{
          key: child.props.id,
          style: this.getStyles(),
          data: child,
        }] }
        willEnter={ this.willEnter }
        willLeave={ this.willLeave }
      >
        { interpolated => (
          <div
            style={ {
              position: 'relative',
              display: 'inline-block',
              verticalAlign: 'top',
              width,
            } }
          >
            { interpolated.map(({ key, data, style }) => (
              <div
                key={ key }
                style={ {
                  position: style.y === 0 ? 'relative' : 'absolute',
                  opacity: style.opacity,
                  transform: `translate3d(0, ${style.y}%, 0)`,
                  width,
                } }
              >
                { data }
              </div>
            )) }
          </div>
        )}
      </TransitionMotion>
    );
  }
}