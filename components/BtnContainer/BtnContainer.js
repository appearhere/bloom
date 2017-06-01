import React, { PropTypes } from 'react';
import cx from 'classnames';

import css from './BtnContainer.css';

const BtnContainer = ({ className, type, children, ...props }) => {
  const classes = cx(css.root, className);

  return (
    <button
      className={ classes }
      type={ type }
      { ...props }
    >
      { children }
    </button>
  );
};

BtnContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['submit', 'button', 'reset', 'menu']),
};

BtnContainer.defaultProps = {
  type: 'button',
};

export default BtnContainer;