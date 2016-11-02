import React, { PropTypes, createElement } from 'react';
import cx from 'classnames';

import css from './Synopsis.css';

const bodyClasses = cx(
  css.base,
  css.body,
);

const Synopsis = ({ title, children, className, level, ...rest }) => {
  const titleClasses = cx(
    className,
    css.base,
    css.title,
  );

  const bodyEl = <span className={ bodyClasses }>{ children }</span>;

  return createElement(
    `h${level}`,
    { className: titleClasses, ...rest },
    title,
    bodyEl
  );
};

Synopsis.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  level: PropTypes.number,
};

Synopsis.defaultProps = {
  level: 1,
};

export default Synopsis;