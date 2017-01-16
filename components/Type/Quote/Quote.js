import React, { PropTypes } from 'react';
import cx from 'classnames';

import css from './Quote.css';

const Quote = (props) => {
  const {
    children,
    citation,
    className,
    citeClassName,
    ...rest,
  } = props;

  const bodyClasses = cx(
    css.base,
    css.quoteBody,
  );

  const citeClasses = cx(
    citeClassName,
    css.base,
    css.cite,
  );

  return (
    <blockquote className={ className } { ...rest }>
      <div className={ bodyClasses }>{ children }</div>
      <cite className={ citeClasses }>{ citation }</cite>
    </blockquote>
  );
};

Quote.propTypes = {
  children: PropTypes.node.isRequired,
  citation: PropTypes.node,
  className: PropTypes.string,
  citeClassName: PropTypes.string,
};

export default Quote;
