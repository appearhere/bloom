//@flow
import * as React from 'react';

import cx from 'classnames';

import css from './Figure.css';

type Props = {
  className?: string,
  caption: React.Node,
  children?: React.Node,
}
const Figure = (props: Props) => {
  const { className, caption, children, ...rest } = props;

  const classes = cx(css.root, className);
  const captionClasses = cx(css.caption);

  return (
    <figure {...rest} className={classes}>
      {children}
      <figcaption className={captionClasses}>{caption}</figcaption>
    </figure>
  );
};

export default Figure;
