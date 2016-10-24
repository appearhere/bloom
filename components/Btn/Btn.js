import React, { PropTypes } from 'react';
import classnames from 'classnames';

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
    ...rest
  } = props;

  const handleClick = (e) => {
    onClick(e);
  };

  const classes = classnames(
    css.root,
    className,
    css[context],
    css[variant],
  );

  return (
    <button
      className={ classes }
      type={ type }
      onClick={ handleClick }
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

  context: PropTypes.oneOf(['primary', 'danger', 'whiteout']),
  variant: PropTypes.oneOf(['hollow', 'subtle']),
};

Btn.defaultProps = {
  type: 'button',
};

export default Btn;