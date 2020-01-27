//@flow
import React from 'react';
import classNames from 'classnames/bind';

import css from './Badge.css';

const cx = classNames.bind(css);

type Props = {
  className?: string,
  children: any,
  context: 'primary' | 'special',
  hollow?: boolean,
}

const Badge = ({ className, children, context, hollow, ...rest }: Props) => (
  <span {...rest} className={cx(css.root, css[context], hollow ? css.hollow : null, className)}>
    {children}
  </span>
);

export default Badge;
