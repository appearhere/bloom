// @flow
import * as React from 'react';

import classnames from 'classnames';

import css from './FloatingActionBtn.css';

type Props = {
  children: React.Node,
  className?: string,
  onClick: Function,
  type: 'submit' | 'reset' | 'button' | 'menu',
  disabled?: boolean,
  context: 'primary' | 'danger' | 'action' | 'whiteout',
}

/**
 * https://material.io/guidelines/components/buttons-floating-action-button.html
 */
const FloatingActionBtn = (props: Props) => {
  const { children, className, onClick, type, disabled, context, ...rest } = props;

  const handleClick = e => {
    onClick(e);
  };

  const classes = classnames(css.root, className, css[context]);

  return (
    <button className={classes} type={type} onClick={handleClick} disabled={disabled} {...(rest: any)}>
      {children}
    </button>
  );
};

FloatingActionBtn.defaultProps = {
  type: 'button',
};

export default FloatingActionBtn;
