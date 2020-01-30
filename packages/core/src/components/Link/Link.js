// @flow
import * as React from 'react';
import cx from 'classnames';

import css from './Link.css';
import Icon from '../Icon/Icon';

type Props = {
  href: string,
  className?: string,
  bodyClassName?: string,
  iconClassName?: string,
  children: React.Node,
}

const Link = ({ href, className, bodyClassName, iconClassName, children, ...rest }: Props) => (
  <a {...rest} href={href} className={cx(css.root, className)}>
    <span className={cx(css.body, bodyClassName)}>{children}</span>
    <Icon className={cx(css.icon, iconClassName)} name="chevron-right" />
  </a>
);

export default Link;
