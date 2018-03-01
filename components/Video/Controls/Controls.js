import PropTypes from 'prop-types';
import React from 'react';

import css from './Controls.css';

const Controls = ({ children }) => (
  <div className={css.root}>
    { children }
  </div>
);

Controls.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]),
};

export default Controls;
