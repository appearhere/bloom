import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cx from 'classnames';

import noop from '../../utils/noop';
import Icon from '../Icon/Icon';
import ScreenReadable from '../ScreenReadable/ScreenReadable';

import css from './PaginationLink.css';

export const NextLink = props => (
  <PaginationLink {...props}>
    <Icon name="arrow" className={css.nextArrow} />
  </PaginationLink>
);

export const PreviousLink = props => (
  <PaginationLink {...props}>
    <Icon name="arrow" className={css.prevArrow} />
  </PaginationLink>
);

export class PaginationLink extends Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
    accessibilityLabel: PropTypes.string,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    accessibilityLabel: 'go to page',
    onClick: noop,
  };

  handleClick = e => {
    const { page, onClick } = this.props;
    onClick(e, page);
  };

  render() {
    const { accessibilityLabel, page, active, children, disabled } = this.props;

    return (
      <a
        href={!disabled ? `?page=${page}` : null}
        className={cx(css.root, active ? css.active : null, disabled ? css.disabled : null)}
        onClick={this.handleClick}
      >
        {children}
        <ScreenReadable>
          {accessibilityLabel} {page}
        </ScreenReadable>
      </a>
    );
  }
}
