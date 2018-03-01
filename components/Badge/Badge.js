import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import css from './Badge.css';

const Badge = ({ className, children, context, hollow, ...rest }) => (
  <span
    {...rest}
    className={cx(
      css.root,
      css[context],
      hollow ? css.hollow : null,
      className
    )}
  >
    { children }
  </span>
);

Badge.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  context: PropTypes.oneOf(['primary', 'special']),
  hollow: PropTypes.bool,
};

export default Badge;
