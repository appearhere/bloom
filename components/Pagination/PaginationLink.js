import React, { PropTypes } from 'react';
import cx from 'classnames';

import Icon from '../Icon/Icon';
import ScreenReadable from '../ScreenReadable/ScreenReadable';

import css from './PaginationLink.css';

export const NextLink = props => (
  <PaginationLink { ...props }>
    <Icon name="arrow" />
  </PaginationLink>
);

export const PreviousLink = props => (
  <PaginationLink { ...props }>
    <Icon name="arrow" className={ css.prevArrow } />
  </PaginationLink>
);

export const PaginationLink = ({ accessibilityLabel, page, active, children, disabled }) => (
  <a
    href={ !disabled ? `?page=${page}` : null }
    className={ cx(
      css.root,
      active ? css.active : null,
      disabled ? css.disabled : null,
    ) }
  >
    { children }
    <ScreenReadable>{ accessibilityLabel } { page }</ScreenReadable>
  </a>
);

PaginationLink.propTypes = {
  page: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  accessibilityLabel: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};

PaginationLink.defaultProps = {
  accessibilityLabel: 'go to page',
};