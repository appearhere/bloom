import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import css from './Wrapper.css';

const Wrapper = ({ children, className }) => (
  <div className={cx(css.root, className)}>{ children }</div>
);

Wrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Wrapper;
