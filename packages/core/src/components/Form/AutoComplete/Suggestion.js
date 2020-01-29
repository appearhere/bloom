// @flow
import * as React from 'react';
import cx from 'classnames';

import css from './Suggestion.css';

type Props = {
  className?: string,
  children: React.Node,
}

const Suggestion = ({ className, children, ...rest }: Props) => (
  <span {...rest} className={cx(css.root, className)}>
    {children}
  </span>
);


export default Suggestion;
