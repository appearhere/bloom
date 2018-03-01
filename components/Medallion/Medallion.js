import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import css from './Medallion.css';

const Medallion = ({ className, variant, children, ...rest }) => (
  <span
    {...rest}
    className={cx(
      css.root,
      css[variant],
      className,
    )}
  >
    { children }
  </span>
);

Medallion.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['light', 'dark']),
};

Medallion.defaultProps = {
  variant: 'light',
};

export default Medallion;
