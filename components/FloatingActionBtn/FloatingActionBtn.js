import React, { PropTypes } from 'react';
import classnames from 'classnames';

import css from './FloatingActionBtn.css';

/**
 * https://material.io/guidelines/components/buttons-floating-action-button.html
 */
const FloatingActionBtn = (props) => {
  const {
    children,
    className,
    onClick,
    type,
    disabled,
    context,
    ...rest,
  } = props;

  const handleClick = (e) => {
    onClick(e);
  };

  const classes = classnames(
    css.root,
    className,
    css[context],
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

FloatingActionBtn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'reset', 'button', 'menu']),
  disabled: PropTypes.bool,
  context: PropTypes.oneOf(['primary', 'danger', 'action', 'whiteout']),
};

FloatingActionBtn.defaultProps = {
  type: 'button',
};

export default FloatingActionBtn;