import React, { PropTypes } from 'react';
import cx from 'classnames';

import ScreenReadable from '../ScreenReadable/ScreenReadable';
import css from './PaginationLink.css';
import Icon from '../Icon/Icon';

const PREV = 'prev';
const NEXT = 'next';

export const PaginationPrevNext = ({ page, currentPage, disabled, accessibilityLabel }) => {
  const dir = page > currentPage ? NEXT : PREV;

  return (
    <a
      href={ !disabled ? `?page=${page}` : null }
      className={ cx(css.root, {
        [css.disabled]: disabled,
      }) }
    >
      <Icon
        name="arrow"
        className={ dir === PREV ? css.prevArrow : null }
      />
      <ScreenReadable>{ accessibilityLabel } { page }</ScreenReadable>
    </a>
  );
};

PaginationPrevNext.propTypes = {
  page: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  accessibilityLabel: PropTypes.string,
};

PaginationPrevNext.defaultProps = {
  accessibilityLabel: 'go to page',
};


export const PaginationFiller = () => <span className={ css.filler }>&hellip;</span>;

export const PaginationLink = ({ page, active, accessibilityLabel }) => (
  <a
    href={ `?page=${page}` }
    className={ cx(css.root, {
      [css.active]: active,
    }) }
  >
    <ScreenReadable>{ accessibilityLabel }</ScreenReadable> { page }
  </a>
);

PaginationLink.propTypes = {
  page: PropTypes.number.isRequired,
  active: PropTypes.bool,
  accessibilityLabel: PropTypes.string,
};

PaginationLink.defaultProps = {
  accessibilityLabel: 'go to page',
};
