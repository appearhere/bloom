// @flow
import React from 'react';
import classnames from 'classnames';

import css from './Indicator.css';

type Props = {
  active?: boolean,
  className?: string,
}

const Indicator = ({ active, className, ...rest }: Props) => {
  const classes = classnames(css.root, active ? css.active : null, className);

  return <div className={classes} {...(rest: any)} />;
};

export default Indicator;
