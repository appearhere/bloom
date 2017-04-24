import React, { PropTypes } from 'react';
import cx from 'classnames';

import css from './Marker.css';

const Marker = ({ className, children }) => (
  <div className={ cx(css.root, className) }>
    { children }
  </div>
);

Marker.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Marker;