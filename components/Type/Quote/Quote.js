import React, { PropTypes } from 'react';
import cx from 'classnames';

import css from './Quote.css';

const Quote = (props) => {
  const {
    children,
    citation,
    className,
    citeClassName,
    textAlign,
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
    <blockquote className={ cx(css[textAlign], className) } { ...rest }>
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
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
};

Quote.defaultProps = {
  textAlign: 'center',
};

export default Quote;
