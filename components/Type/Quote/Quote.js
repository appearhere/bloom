import React, { PropTypes } from 'react';
import cx from 'classnames';

import m from '../../../globals/modifiers.css';
import css from './Quote.css';

const bodyClasses = cx(
  css.base,
  css.quoteBody,
  m.fontLgIii,
  m.uppercase,
);

const Quote = ({ children, citation, className, citeClassName, ...rest }) => {
  const citeClasses = cx(
    citeClassName,
    css.base,
    css.cite,
    m.fontRegular,
    m.demi,
    m.uppercase,
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
