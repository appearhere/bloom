import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import css from './Card.css';

const Card = ({ className, href, target, children, ...rest }) => {
  const Component = href ? 'a' : 'div';

  const classes = cx(css.root, href ? css.link : null, className);

  return (
    <Component {...rest} className={classes} href={href} target={href ? target : null}>
      {children}
    </Component>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  children: PropTypes.node,
};

Card.defaultProps = {
  target: '_self',
};

export default Card;
