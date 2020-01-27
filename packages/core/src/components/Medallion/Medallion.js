//@flow

import * as React from 'react';
import cx from 'classnames';

import css from './Medallion.css';

type Props = {
  className: string,
  children: React.Node,
  variant: 'light' | 'dark',
}

const Medallion = ({ className, variant, children, ...rest }: Props) => (
  <span {...rest} className={cx(css.root, css[variant], className)}>
    {children}
  </span>
);

Medallion.defaultProps = {
  variant: 'light',
};

export default Medallion;
