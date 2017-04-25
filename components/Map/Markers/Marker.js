import React, { PropTypes } from 'react';
import cx from 'classnames';

import css from './Marker.css';

const Marker = ({ className, scrollClassName, children }) => (
  <div className={ cx(css.root, className) }>
    <div className={ cx(css.scrollContainer, scrollClassName) }>
      { children }
    </div>
  </div>
);

Marker.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  scrollClassName: PropTypes.string,
};

export default Marker;