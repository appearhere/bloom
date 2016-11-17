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
  };

  static defaultProps = {
    start: true,
  }

  constructor(props) {
    super(props);

    this.state = {
      visible: props.visible,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(visible) {
    this.setState({
      visible,
    });
  }

  render() {
    const { children, percent, start } = this.props;
    const { visible } = this.state;

    const classes = cx(css.root, visible && start ? css.visible : null);

    return (
      <OnVisible percent={ percent } onChange={ this.handleChange }>
        <div className={ classes }>
          { children }
        </div>
      </OnVisible>
    );
  }
}