import React, { PropTypes } from 'react';
import cx from 'classnames';

import css from './Marker.css';

const Marker = ({ className, scrollClassName, children, variant }) => (
  <div className={ cx(css.root, css[variant], className) }>
    <div className={ cx(css.scrollContainer, scrollClassName) }>
      { children }
    </div>
  </div>
);

Marker.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  scrollClassName: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'dark']),
};

Marker.defaultProps = {
  variant: 'light',
};

export default Marker;
