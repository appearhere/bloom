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

const citeClasses = cx(
  css.base,
  css.cite,
  m.fontRegular,
  m.demi,
  m.uppercase,
);

const Quote = ({ children, citation, className, ...rest }) => (
  <blockquote className={ className } { ...rest }>
    <div className={ bodyClasses }>{ children }</div>
    <cite className={ citeClasses }>{ citation }</cite>
  </blockquote>
);

Quote.propTypes = {
  children: PropTypes.node.isRequired,
  citation: PropTypes.node,
  className: PropTypes.string,
};

export default Quote;