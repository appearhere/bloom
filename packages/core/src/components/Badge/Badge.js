// @flow
import React from 'react';
import classNames from 'classnames/bind';
import Icon from '../Icon/Icon';

import css from './Badge.css';

const cx = classNames.bind(css);

type Props = {
  className?: string,
  children: any,
  context: 'primary' | 'special',
  hollow?: boolean,
  icon?: string,
}

const Badge = ({ className, children, context, hollow, icon, ...rest }: Props) => (
  <span {...rest} className={cx(css.root, css[context], hollow ? css.hollow : null, className)}>
    {icon && <Icon className={css.icon} name={icon}/>}
    {children}
  </span>
);

export default Badge;
