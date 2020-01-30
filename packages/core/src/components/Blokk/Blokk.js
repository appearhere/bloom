// @flow
import React from 'react';
import cx from 'classnames';

import css from './Blokk.css';

type Props = {
  length: number,
  variant: 'light' | 'dark',
  className?: string,
}

const Blokk = ({ variant, length, className }: Props) => (
  <span
    className={cx(css.root, css[variant], className)}
    style={{
      maxWidth: `${length}em`,
    }}
  />
);

Blokk.defaultProps = {
  variant: 'light',
};

export default Blokk;
