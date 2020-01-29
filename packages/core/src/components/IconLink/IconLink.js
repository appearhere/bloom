// @flow
import React from 'react';
import cx from 'classnames';
import Icon from '../Icon/Icon';
import css from './IconLink.css';

type Props = {
  href: string,
  text: string,
  iconName: string,
  target: string,
  inverted: boolean,
}

const IconLink = ({ href, iconName, target, text, inverted, ...rest}: Props) => (
  <a href={href} target={target} className={cx(css.iconLink, { [css.inverted]: inverted })} {...(rest: any)}>
    <span className={css.text}>{text}</span> <Icon name={iconName} className={css.icon} />
  </a>
);

IconLink.defaultProps = {
  inverted: false,
  target: '_parent',
};

export default IconLink;
