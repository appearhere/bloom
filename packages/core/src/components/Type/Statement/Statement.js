// @flow

import * as React from 'react';
import cx from 'classnames';

import css from './Statement.css';

type Props = {
  number: number,
  children: React.Node,
  className?: string,
}

const Statement = ({ children, className, number, ...rest }: Props) => (
  <span>
    <strong {...rest} className={cx(css.statement, className)}>
      {children}
    </strong>
    {number && <span className={cx(css.number)}>{number}</span>}
  </span>
);

export default Statement;
