import React, { PropTypes } from 'react';
import classnames from 'classnames';

import css from './Indicator.css';

const Indicator = ({ active, className, ...rest }) => {
  const classes = classnames(
    css.root,
    active ? css.active : null,
    className,
  );

  return <div className={ classes } { ...rest } />;
};

Indicator.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
};

export default Indicator;