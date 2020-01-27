// @flow

import * as React from 'react';

import css from './Controls.css';

type Props = {
  children: Array<React.Element<any>> | React.Element<any>
}

const Controls = ({ children }: Props) => <div className={css.root}>{children}</div>;

export default Controls;
