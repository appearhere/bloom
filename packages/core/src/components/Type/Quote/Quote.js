// @flow

import * as React from 'react';
import cx from 'classnames';

import css from './Quote.css';

type Props = {
  children: React.Node,
  citation: React.Node,
  className?: string,
  citeClassName?: string,
}

const Quote = (props: Props) => {
  const { children, citation, className, citeClassName, ...rest } = props;

  const bodyClasses = cx(css.base, css.quoteBody);

  const citeClasses = cx(citeClassName, css.base, css.cite);

  return (
    <blockquote className={className} {...(rest: any)}>
      <div className={bodyClasses}>{children}</div>
      <cite className={citeClasses}>{citation}</cite>
    </blockquote>
  );
};

export default Quote;
