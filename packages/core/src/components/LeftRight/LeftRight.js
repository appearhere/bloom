//@flow
import * as React from 'react';
import cx from 'classnames';

import css from './LeftRight.css';

type Props = {
  className?: string,
  leftClassName?: string,
  rightClassName?: string,
  leftChildren: React.Node,
  rightChildren: React.Node,
  primarySide: 'left' | 'right',
}

const LeftRight = (props: Props) => {
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

LeftRight.defaultProps = {
  primarySide: 'left',
};

export default LeftRight;
