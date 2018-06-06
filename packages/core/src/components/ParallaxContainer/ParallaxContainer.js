/*
  global
  window: true,
 */

import PropTypes from 'prop-types';

import React, { Component } from 'react';
import { subscribe } from 'subscribe-ui-event';
import cx from 'classnames';

import css from './ParallaxContainer.css';

export default class ParallaxContainer extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    speed: PropTypes.number,
    topOffset: PropTypes.number,
    className: PropTypes.string,
  };

  static defaultProps = {
    speed: 1,
    topOffset: 0,
  };

  state = {
    top: 0,
  };

  componentDidMount() {
    this.updatePosition();
    this.scrollEventSubscription = subscribe('scroll', this.updatePosition, {
      useRAF: true,
    });
  }

  componentWillUnmount() {
    this.scrollEventSubscription.unsubscribe();
  }

  updatePosition = () => {
    const { speed } = this.props;
    const scrollPosition =
      (window.pageYOffset || document.scrollTop) - (document.clientTop || 0) || 0;

    this.setState({
      top: scrollPosition * speed,
    });
  };

  render() {
    const { children, topOffset, className } = this.props;
    const { top } = this.state;

    return (
      <div
        className={cx(css.root, className)}
        style={{
          top: 0 - top + topOffset,
        }}
      >
        {children}
      </div>
    );
  }
}
