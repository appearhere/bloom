import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import css from './Statement.css';

const Statement = ({ children, className, number, ...rest }) => (
  <span>
    <strong { ...rest } className={ cx(css.statement, className) } >
      { children }
    </strong>
    { number && <span className={ cx(css.number) }>{ number }</span> }
  </span>
);

Statement.propTypes = {
  number: PropTypes.number,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Statement;
