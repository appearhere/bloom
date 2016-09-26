import React, { PropTypes } from 'react';

import css from './Wrapper.css';

export default ({ children }) => (
  <div className={ css.root }>{ children }</div>
);