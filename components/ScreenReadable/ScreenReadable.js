import React, { PropTypes } from 'react';

import css from './ScreenReadable.css';

const ScreenReadable = ({ children }) => (
  <span className={css.root}>{ children }</span>
);

ScreenReadable.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScreenReadable;