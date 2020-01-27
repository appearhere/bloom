//@flow

import * as React from 'react';
import classnames from 'classnames';
import noop from '../../utils/noop';

import css from './Btn.css';

type Props = {
  children: React.Node,
  className?: string,
  onClick: Function,
  type: 'submit' | 'reset' | 'button' | 'menu',
  disabled?: boolean,
  context: 'default' | 'primary' | 'danger' | 'action' | 'whiteout',
  variant: 'default' | 'hollow' | 'subtle',
  priority: 'high' | 'normal'
}

export default class Btn extends React.Component<Props> {
  button: HTMLButtonElement;

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
  };

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
      ...rest
    } = this.props;

    const classes = classnames(css.root, className, css[context], css[variant], css[priority]);

    return (
      <button
        ref={c => {
          this.button = c;
        }}
        className={classes}
        type={type}
        onClick={onClick}
        disabled={disabled}
        {...(rest: any)}
      >
        {children}
      </button>
    );
  }
}
