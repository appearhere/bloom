import React, { PropTypes } from 'react';
import cx from 'classnames';

import m from '../../../globals/modifiers.css';
import css from './Synopsis.css';

const titleClasses = cx(
  css.base,
  css.title,
);

const bodyClasses = cx(
  css.base,
  css.body,
);

const Synopsis = ({ title, children, className, ...rest }) => (
  <div className={ className } { ...rest }>
    <h2 className={ titleClasses }>{ title }</h2>
    <div className={ bodyClasses }>{ children }</div>
  </div>
);

Synopsis.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Synopsis;