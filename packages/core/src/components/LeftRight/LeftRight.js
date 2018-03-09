import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import css from './LeftRight.css';

const LeftRight = props => {
  const {
    className,
    leftClassName,
    rightClassName,
    primarySide,
    leftChildren,
    rightChildren,
    ...rest
  } = props;

  const classes = cx(css.root, className);

  const leftClasses = cx(css.left, primarySide === 'left' ? css.large : null, leftClassName);

  const rightClasses = cx(css.right, primarySide === 'right' ? css.large : null, rightClassName);

  return (
    <div {...rest} className={classes}>
      <div className={leftClasses}>{leftChildren}</div>
      <div className={rightClasses}>{rightChildren}</div>
    </div>
  );
};

LeftRight.propTypes = {
  className: PropTypes.string,
  leftClassName: PropTypes.string,
  rightClassName: PropTypes.string,
  leftChildren: PropTypes.node,
  rightChildren: PropTypes.node,
  primarySide: PropTypes.oneOf(['left', 'right']),
};

LeftRight.defaultProps = {
  primarySide: 'left',
};

export default LeftRight;
