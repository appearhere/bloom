import React, { PropTypes } from 'react';
import css from './Btn.css';

const Btn = props => {
  const {
    className,
    type,
    children,
    context,
    variant,
    ...rest,
  } = props;

  const classes = [
    css.root,
    context ? css[context] : null,
    variant ? css[variant] : null,
    className,
  ].join(' ');

  return (
    <button className={classes} type={type} {...rest}>
      { children }
    </button>
  );
};

Btn.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'reset', 'button', 'menu']),
  context: PropTypes.oneOf(['primary', 'danger', 'whiteOut']),
  variant: PropTypes.oneOf(['default', 'hollow', 'text']),
  children: PropTypes.node.isRequired,
};

Btn.defaultProps = {
  type: 'button',
};

export default Btn;