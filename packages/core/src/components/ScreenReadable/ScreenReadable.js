// @flow

import * as React from 'react';

import css from './ScreenReadable.css';

type Props = {
  children: string | Array<any> | React.Element<any> | number,
}

const ScreenReadable = ({ children, ...rest }: Props) => (
  <span className={css.root} {...(rest: any)}>
    {children}
  </span>
);

export default ScreenReadable;
