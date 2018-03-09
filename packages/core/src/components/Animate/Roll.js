import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { spring, TransitionMotion } from 'react-motion';

const DEFAULT_SPRINT_CONFIG = { stiffness: 250, damping: 25 };

export default class Roll extends Component {
  static propTypes = {
    children: PropTypes.any,
    width: PropTypes.string,
    springConfig: PropTypes.shape({
      stiffness: PropTypes.number,
      damping: PropTypes.number,
    }),
  };

  static defaultProps = {
    width: 'auto',
    springConfig: DEFAULT_SPRINT_CONFIG,
  };

  getStyles = () => {
    const { springConfig } = this.props;

    return {
      y: spring(0, springConfig),
      opacity: spring(1, springConfig),
    };
  };

  willEnter = () => ({
    y: 50,
    opacity: 0,
  });

  willLeave = () => {
    const { springConfig } = this.props;

    return {
      y: spring(-50, springConfig),
      opacity: spring(0, springConfig),
    };
  };

  render() {
    const { children: child, width } = this.props;

    return (
      <TransitionMotion
        styles={[
          {
            key: child.props.id,
            style: this.getStyles(),
            data: child,
          },
        ]}
        willEnter={this.willEnter}
        willLeave={this.willLeave}
      >
        {interpolated => (
          <div
            style={{
              position: 'relative',
              display: 'inline-block',
              verticalAlign: 'top',
              width,
            }}
          >
            {interpolated.map(({ key, data, style }) => (
              <div
                key={key}
                style={{
                  position: style.y === 0 ? 'relative' : 'absolute',
                  opacity: style.opacity,
                  transform: `translate3d(0, ${style.y}%, 0)`,
                  width,
                  willChange: 'transform, opacity',
                  backfaceVisibility: 'hidden',
                }}
              >
                {data}
              </div>
            ))}
          </div>
        )}
      </TransitionMotion>
    );
  }
}
