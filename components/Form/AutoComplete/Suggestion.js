import React, { PropTypes } from 'react';
import cx from 'classnames';

import css from './Suggestion.css';

const Suggestion = ({ className, children, ...rest }) => (
  <span { ...rest } className={ cx(css.root, className) }>{ children }</span>
);

Suggestion.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Suggestion;
