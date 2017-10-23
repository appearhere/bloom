import PropTypes from 'prop-types';
import React, { createElement } from 'react';
import cx from 'classnames';

import css from './Synopsis.css';

const bodyClasses = cx(
  css.base,
  css.body,
);

const Synopsis = ({ title, children, className, level, ...rest }) => {
  const titleClasses = cx(
    css.base,
    css.title,
  );

  return (
    <div className={ className } { ...rest }>
      { createElement(
        `h${level}`,
        { className: titleClasses, ...rest },
        title
      ) }
      <div className={ bodyClasses }>{ children }</div>
    </div>
  );
};

Synopsis.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  level: PropTypes.number,
};

Synopsis.defaultProps = {
  level: 2,
};

export default Synopsis;
