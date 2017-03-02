import React, { PropTypes } from 'react';
import cx from 'classnames';

import css from './Link.css';
import Icon from '../Icon/Icon';

const Link = ({ href, className, iconClassName, children, ...rest }) => (
  <a { ...rest } href={ href } className={ cx(css.root, className) }>
    { children } <Icon className={ cx(css.icon, iconClassName) } name="chevron" />
  </a>
);

Link.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  children: PropTypes.node,
};

export default Link;