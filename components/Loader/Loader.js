import React, { PropTypes } from 'react';
import cx from 'classnames';

import css from './Loader.css';

const Loader = ({ className, ...rest }) => (
  <svg { ...rest } className={ cx(css.spinner, className) } viewBox="0 0 16 16">
    <circle className={ css.circle } cx="2" cy="8" r="2" />
    <circle className={ css.circle } cx="8" cy="8" r="2" />
    <circle className={ css.circle } cx="14" cy="8" r="2" />
  </svg>
);

Loader.propTypes = {
  className: PropTypes.string,
};

export default Loader;
