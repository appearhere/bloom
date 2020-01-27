//@flow

import * as React from 'react';
import cx from 'classnames';

import noop from '../../utils/noop';
import Icon from '../Icon/Icon';
import ScreenReadable from '../ScreenReadable/ScreenReadable';

import css from './PaginationLink.css';

type Props = {
  page: number,
  children: React.Node,
  accessibilityLabel: string,
  active: boolean,
  disabled: boolean,
  onClick: Function,
}

export const NextLink = (props: Props) => (
  <PaginationLink {...props}>
    <Icon name="arrow" className={css.nextArrow} />
  </PaginationLink>
);

export const PreviousLink = (props: Props) => (
  <PaginationLink {...props}>
    <Icon name="arrow" className={css.prevArrow} />
  </PaginationLink>
);

export class PaginationLink extends React.Component<Props> {
  static defaultProps = {
    accessibilityLabel: 'go to page',
    onClick: noop,
  };

  handleClick = (e: Event) => {
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
