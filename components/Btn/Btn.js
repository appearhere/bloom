import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import noop from '../../utils/noop';

import css from './Btn.css';

export default class Btn extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['submit', 'reset', 'button', 'menu']),
    disabled: PropTypes.bool,

    context: PropTypes.oneOf(['default', 'primary', 'danger', 'action', 'whiteout']),
    variant: PropTypes.oneOf(['default', 'hollow', 'subtle']),
    priority: PropTypes.oneOf(['high', 'normal']),
  };

  static defaultProps = {
    type: 'button',
    onClick: noop,
    context: 'default',
    variant: 'default',
    priority: 'normal',
  };

  focus = () => {
    this.button.focus();
  };

  blur = () => {
    this.button.blur();
  }

  render() {
    const {
      children,
      className,
      onClick,
      type,
      disabled,
      context,
      variant,
      priority,
      ...rest,
    } = this.props;

    const classes = classnames(
      css.root,
      className,
      css[context],
      css[variant],
      css[priority]
    );

    return (
      <button
        ref={ (c) => { this.button = c; } }
        className={ classes }
        type={ type }
        onClick={ onClick }
        disabled={ disabled }
        { ...rest }
      >
        { children }
      </button>
    );
  }
}
