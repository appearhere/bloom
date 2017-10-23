import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cx from 'classnames';

import css from './BtnContainer.css';

export default class BtnContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['submit', 'button', 'reset', 'menu']),
  };

  static defaultProps = {
    type: 'button',
  };

  render() {
    const { className, type, children, ...rest } = this.props;
    const classes = cx(css.root, className);

    return (
      <button
        className={ classes }
        type={ type }
        { ...rest }
      >
        { children }
      </button>
    );
  }
}
