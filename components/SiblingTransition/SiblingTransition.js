import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TransitionMotion, spring } from 'react-motion';

import noop from '../../utils/noop';
import css from './SiblingTransition.css';
import { SIBLING_TRANSITION as DEFAULT_SPRING_CONFIG } from '../../constants/springs';

export default class SiblingTransition extends Component {
  static propTypes = {
    springConfig: PropTypes.shape({
      stiffness: PropTypes.number,
      damping: PropTypes.number,
    }),
    animate: PropTypes.bool,
    route: PropTypes.string.isRequired,
    children: PropTypes.element,
    shouldAnimateLeft: PropTypes.func,
    didLeave: PropTypes.func,
  };

  static defaultProps = {
    springConfig: DEFAULT_SPRING_CONFIG,
    didLeave: noop,
  };

  componentWillReceiveProps(nextProps) {
    const { route: oldRoute } = this.props;
    const { route: newRoute, animate } = nextProps;

    if (!animate) this.setState({ newRoute: null, oldRoute: null });
    if (newRoute !== oldRoute) this.setState({ newRoute, oldRoute });
  }

  getStyles = () => {
    const { springConfig } = this.props;

    return {
      x: spring(0, springConfig),
    };
  }

  willEnter = () => {
    const { shouldAnimateLeft, animate } = this.props;
    const { newRoute, oldRoute } = this.state;

    if (!animate) return { x: 0 };

    const transitionLeft = shouldAnimateLeft(newRoute, oldRoute);

    return {
      x: transitionLeft ? 100 : -100,
    };
  }

  willLeave = () => {
    const { springConfig, animate, shouldAnimateLeft } = this.props;
    const { newRoute, oldRoute } = this.state;

    if (!animate) return { x: 0 };

    const transitionLeft = shouldAnimateLeft(newRoute, oldRoute);

    return {
      x: spring(transitionLeft ? -100 : 100, springConfig),
    };
  }

  render() {
    const {
      route,
      children: child,
      didLeave,
      ...rest
    } = this.props;

    return (
      <TransitionMotion
        {...rest}
        styles={[{
          key: route,
          style: this.getStyles(),
          data: child,
        }]}
        willEnter={this.willEnter}
        willLeave={this.willLeave}
        didLeave={didLeave}
      >
        { interpolated => (
          <div className={css.container}>
            { interpolated.map(({ key, data, style }) => (
              <div
                key={key}
                className={css.animated}
                style={{
                  position: style.x === 0 ? 'relative' : 'absolute',
                  transform: `translate3d(${style.x}%, 0, 0)`,
                }}
              >
                { data }
              </div>
            )) }
          </div>
        ) }
      </TransitionMotion>
    );
  }
}
