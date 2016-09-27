import React, { PropTypes } from 'react';
import cx from 'classnames';

import m from '../../../globals/modifiers.css';
import css from './Synopsis.css';

const titleClasses = cx(
  css.base,
  css.title,
  m.fontTitleBase,
);

const bodyClasses = cx(
  css.base,
  css.body,
  m.fontBase,
);

const Synopsis = ({ title, body, className, ...rest }) => (
  <div className={ className } { ...rest }>
    <h2 className={ titleClasses }>{ title }</h2>
    <p className={ bodyClasses }>{ body }</p>
  </div>
);

Synopsis.propTypes = {
  title: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Synopsis;