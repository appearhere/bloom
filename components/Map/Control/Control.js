import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import css from './Control.css';

const Control = ({ className, children, ...rest }) => (
  <button
    className={ cx(css.root, className) }
    { ...rest }
  >
    { children }
  </button>
);

Control.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Control;
