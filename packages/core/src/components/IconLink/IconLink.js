import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon/Icon';
import css from './IconLink.css';

const IconLink = ({ href, iconName, target, text, inverted }) => (
  <a href={href} className={cx(css.iconLink, {[css.inverted]: inverted})}>
    {text} <Icon name={iconName} className={css.icon} />
  </a>
);

IconLink.defaultProps = {
  inverted: false,
}

IconLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  target: PropTypes.string,
  inverted: PropTypes.bool.isRequired,
}

export default IconLink;
