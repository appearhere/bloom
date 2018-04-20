import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import css from './Heading.css';

const Heading = ({ className, children, ...rest }) => (
  <span {...rest} className={cx(css.root, className)}>
    {children}
  </span>
);

Heading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Heading;
