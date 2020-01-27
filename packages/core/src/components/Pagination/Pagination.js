//@flow

import * as React from 'react';
import cx from 'classnames';

import css from './Pagination.css';
import { PreviousLink, NextLink } from './PaginationLink';

type Props = {
  currentPage: number,
  totalPages: number,
  children: React.Node,
  PreviousComponent: Function,
  NextComponent: Function,
  className: string,
  showPrevNext: boolean,
  arrowProps: Object,
}

export default class Pagination extends React.Component<Props> {
  static defaultProps = {
    NextComponent: NextLink,
    PreviousComponent: PreviousLink,
    showPrevNext: true,
    arrowProps: {},
  };

  render() {
    const {
      totalPages,
      currentPage,
      className,
      NextComponent,
      PreviousComponent,
      showPrevNext,
      children,
      arrowProps,
    } = this.props;

    return (
      <div className={cx(css.root, className)}>
        {showPrevNext && (
          <span className={css.page}>
            <PreviousComponent
              {...arrowProps}
              page={currentPage - 1}
              disabled={currentPage === 1}
            />
          </span>
        )}
        {children}
        {showPrevNext && (
          <span className={css.page}>
            <NextComponent
              {...arrowProps}
              page={currentPage + 1}
              disabled={currentPage === totalPages}
            />
          </span>
        )}
      </div>
    );
  }
}
