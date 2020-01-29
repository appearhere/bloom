// @flow

import * as React from 'react';
import cx from 'classnames';

import css from './Marker.css';

type Props = {
  className?: string,
  children: React.Node,
  scrollClassName?: string,
  variant: 'light' | 'dark',
}

const Marker = ({ className, scrollClassName, children, variant }: Props) => (
  <div className={cx(css.root, css[variant], className)}>
    <div className={cx(css.scrollContainer, scrollClassName)}>{children}</div>
  </div>
);

Marker.defaultProps = {
  variant: 'light',
};

export default Marker;
