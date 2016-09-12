import React, { PropTypes } from 'react';
import css from './Btn.css';

const Btn = props => {
  const {
    className,
    type,
    children,
    ...rest,
  } = props;

  const classes = [
    css.root,
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
  children: PropTypes.node.isRequired,
};

Btn.defaultProps = {
  type: 'button',
};

export default Btn;