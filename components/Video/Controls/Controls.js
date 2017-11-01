import PropTypes from 'prop-types';
import React, { cloneElement, Children } from 'react';

import css from './Controls.css';

const Controls = ({ children, ...props }) => (
  <div className={ css.root }>
    { Children.map(children, child => cloneElement(child, props)) }
  </div>
);

Controls.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]),
};

export default Controls;
