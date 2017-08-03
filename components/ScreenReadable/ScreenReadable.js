import React, { PropTypes } from 'react';

import css from './ScreenReadable.css';

const ScreenReadable = ({ children, ...rest }) => (
  <span className={ css.root } { ...rest }>{ children }</span>
);

ScreenReadable.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScreenReadable;
