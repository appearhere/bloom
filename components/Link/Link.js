import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import css from './Link.css';
import Icon from '../Icon/Icon';

const Link = ({ href, className, bodyClassName, iconClassName, children, ...rest }) => (
  <a { ...rest } href={ href } className={ cx(css.root, className) }>
    <span className={ cx(css.body, bodyClassName) }>{ children }</span>
    <Icon className={ cx(css.icon, iconClassName) } name="chevron-right" />
  </a>
);

Link.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  bodyClassName: PropTypes.string,
  iconClassName: PropTypes.string,
  children: PropTypes.node,
};

export default Link;
