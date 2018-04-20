import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import noop from '../../../utils/noop';
import Icon from '../../../components/Icon/Icon';
import ScreenReadable from '../../../components/ScreenReadable/ScreenReadable';
import Badge from '../../../components/Badge/Badge';

import css from './SiteHeader.css';

const SiteHeader = ({ version, onLinkClick }) => (
  <div className={css.root}>
    <NavLink exact to="/" onClick={onLinkClick} className={css.link}>
      <Icon name="appearhere-brackets" className={css.logo} />
      <ScreenReadable>Back home</ScreenReadable>
    </NavLink>
    <Badge className={css.version}>v{version}</Badge>
  </div>
);

SiteHeader.propTypes = {
  onLinkClick: PropTypes.func,
  version: PropTypes.string,
};

SiteHeader.defaultProps = {
  onLinkClick: noop,
};

export default SiteHeader;
