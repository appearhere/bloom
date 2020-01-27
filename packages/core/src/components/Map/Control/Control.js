//@flow

import * as React from 'react';
import cx from 'classnames';

import css from './Control.css';

type Props = {
  className?: string,
  children: React.Node,
}

const Control = ({ className, children, ...rest }: Props) => (
  <button className={cx(css.root, className)} {...(rest: any)}>
    {children}
  </button>
);

export default Control;
