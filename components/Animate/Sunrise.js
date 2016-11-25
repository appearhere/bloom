import React, { Component, PropTypes } from 'react';
import OnVisible from 'react-on-visible';
import cx from 'classnames';

import css from './Sunrise.css';

export default class Sunrise extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    children: PropTypes.node,
    percent: PropTypes.number,
    start: PropTypes.bool,
    transitionDelay: PropTypes.number,
  };

  static defaultProps = {
    start: true,
    transitionDelay: 0,
  }

  constructor(props) {
    super(props);

    this.state = {
      visible: props.visible,
      hasPlayed: false,
    };
  }

  handleChange = (visible) => {
    const { start } = this.props;

    this.setState({
      visible,
    });

    if (visible && start) {
      this.hasPlayed();
    }
  }

  hasPlayed = () => {
    const { hasPlayed } = this.state;
    if (hasPlayed) return;

    this.setState({ hasPlayed: true });
  }

  render() {
    const { children, percent, start, transitionDelay } = this.props;
    const { visible, hasPlayed } = this.state;

    const classes = cx(css.root, visible && (start || hasPlayed) ? css.visible : null);

    return (
      <OnVisible percent={ percent } onChange={ this.handleChange }>
        <div
          className={ classes }
          style={ {
            transitionDelay: `${transitionDelay}ms`,
          } }
        >
          { children }
        </div>
      </OnVisible>
    );
  }
}