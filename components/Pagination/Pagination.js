import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import css from './Pagination.css';
import { PreviousLink, NextLink } from './PaginationLink';

export default class Pagination extends Component {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    children: PropTypes.node,
    PreviousComponent: PropTypes.func,
    NextComponent: PropTypes.func,
    className: PropTypes.string,
    showPrevNext: PropTypes.bool,
    arrowProps: PropTypes.object,
  };

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
      <div className={ cx(css.root, className) }>
        { showPrevNext && (
          <span className={ css.page }>
            <PreviousComponent
              { ...arrowProps }
              page={ currentPage - 1 }
              disabled={ currentPage === 1 }
            />
          </span>
        ) }
        { children }
        { showPrevNext && (
          <span className={ css.page }>
            <NextComponent
              { ...arrowProps }
              page={ currentPage + 1 }
              disabled={ currentPage === totalPages }
            />
          </span>
        ) }
      </div>
    );
  }
}