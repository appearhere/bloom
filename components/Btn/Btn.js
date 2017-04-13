import React, { PropTypes } from 'react';
import classnames from 'classnames';
import noop from '../../utils/noop';

import css from './Btn.css';

const Btn = (props) => {
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
  } = props;

  const classes = classnames(
    css.root,
    className,
    css[context],
    css[variant],
    css[priority],
  );

  return (
    <button
      className={ classes }
      type={ type }
      onClick={ onClick }
      disabled={ disabled }
      { ...rest }
    >
      { children }
    </button>
  );
};

Btn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'reset', 'button', 'menu']),
  disabled: PropTypes.bool,

  context: PropTypes.oneOf(['default', 'primary', 'danger', 'action', 'whiteout']),
  variant: PropTypes.oneOf(['default', 'hollow', 'subtle']),
  priority: PropTypes.oneOf(['high', 'normal']),
};

Btn.defaultProps = {
  type: 'button',
  onClick: noop,
  context: 'default',
  variant: 'default',
  priority: 'normal',
};

export default Btn;