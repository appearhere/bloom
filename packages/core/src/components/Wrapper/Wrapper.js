// @flow

import * as React from 'react';
import cx from 'classnames';

import css from './Wrapper.css';

type Props = {
  children: React.Element<any>,
  className: string,
}

const Wrapper = ({ children, className }: Props) => (
  <div className={cx(css.root, className)}>{children}</div>
);

export default Wrapper;
