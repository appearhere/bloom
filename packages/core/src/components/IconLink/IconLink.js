import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon/Icon';
import css from './IconLink.css';

const IconLink = ({
  href,
  iconName,
  target,
  text,
  inverted,
  ...rest
}) => (
  <a href={href} target={target} className={cx(css.iconLink, { [css.inverted]: inverted })} {...rest}>
    <span className={css.text}>{text}</span> <Icon name={iconName} className={css.icon} />
  </a>
);

IconLink.defaultProps = {
  inverted: false,
  target: '_parent',
};

IconLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  target: PropTypes.string,
  inverted: PropTypes.bool,
};

export default IconLink;
