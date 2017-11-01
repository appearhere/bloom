/*
  global
  window: true,
 */

import PropTypes from 'prop-types';

import React, { Component } from 'react';
import { subscribe } from 'subscribe-ui-event';

export default class EdgeFade extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    threshold: PropTypes.number,
  };

  static defaultProps = {
    threshold: 150,
  }

  state = {
    opacity: 1,
  };

  componentDidMount() {
    this.isNearEdge();
    this.scrollEventSubscription = subscribe('scroll', this.isNearEdge, {
      useRAF: true,
    });
  }

  componentWillUnmount() {
    this.scrollEventSubscription.unsubscribe();
  }

  getCurrentPosition = () => {
    const { top, bottom } = this.wrapper.getBoundingClientRect();

    return {
      fromTop: top,
      fromBottom: window.innerHeight - bottom,
    };
  };

  isNearEdge = () => {
    const { threshold } = this.props;
    const { fromTop, fromBottom } = this.getCurrentPosition();

    if (fromTop - threshold < 0 && fromTop) {
      this.setState({
        opacity: fromTop.toFixed(0) / threshold,
      });
    } else if (fromBottom - threshold < 0 && fromBottom) {
      this.setState({
        opacity: fromBottom.toFixed(0) / threshold,
      });
    } else {
      this.setState({
        opacity: 1,
      });
    }
  };

  render() {
    const { children } = this.props;
    const { opacity } = this.state;

    return (
      <div
        ref={ (c) => { this.wrapper = c; } }
        style={ {
          opacity,
        } }
      >
        { children }
      </div>
    );
  }
}
