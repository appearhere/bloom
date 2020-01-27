//@flow
import * as React from 'react';

import cx from 'classnames';

import css from './Heading.css';

type Props = {
  className?: string,
  children: React.Node,
}

const Heading = ({ className, children, ...rest }: Props) => (
  <span {...rest} className={cx(css.root, className)}>
    {children}
  </span>
);

export default Heading;
