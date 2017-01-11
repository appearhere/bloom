import React, { Component, PropTypes } from 'react';
import first from 'lodash/fp/first';
import last from 'lodash/fp/last';
import cx from 'classnames';

import css from './Pagination.css';
import getPaginationTrack from './getPaginationTrack';
import {
  PaginationLink,
  PaginationFiller,
  PaginationPrevNext,
} from './PaginationLink';

const FILLER = 'filler';
const FIRST_PAGE = 1;
const FILLER_THRESHOLD = 2;

export default class Pagination extends Component {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    displayRange: PropTypes.number,
    LinkComponent: PropTypes.func,
    FillerComponent: PropTypes.func,
    PrevNextComponent: PropTypes.func,
    className: PropTypes.string,
    showPrevNext: PropTypes.bool,
    accessibilityLabel: PropTypes.string,
  };

  static defaultProps = {
    displayRange: 9,
    LinkComponent: PaginationLink,
    FillerComponent: PaginationFiller,
    PrevNextComponent: PaginationPrevNext,
    showPrevNext: true,
  };

  render() {
    const {
      totalPages,
      displayRange,
      currentPage,
      className,
      LinkComponent,
      FillerComponent,
      PrevNextComponent,
      showPrevNext,
      accessibilityLabel,
    } = this.props;

    const trackPartial = getPaginationTrack(currentPage, totalPages, displayRange);

    const firstPartial = first(trackPartial);
    const lastPartial = last(trackPartial);

    const startFillerIndex = FIRST_PAGE + FILLER_THRESHOLD;
    const endFillerIndex = totalPages - FILLER_THRESHOLD;

    const fillerStart = firstPartial > startFillerIndex;
    const fillerEnd = lastPartial < endFillerIndex;
    const closeToStart = firstPartial === startFillerIndex;
    const closeToEnd = lastPartial === endFillerIndex;

    const track = [
      FIRST_PAGE,
      fillerStart ? FILLER : null,
      closeToStart ? '2' : null,
      ...trackPartial,
      fillerEnd ? FILLER : null,
      closeToEnd ? totalPages - 1 : null,
      totalPages,
    ].filter(page => page !== null);

    return (
      <ul className={ cx(css.root, className) }>
        { showPrevNext && (
          <li className={ css.page }>
            <PrevNextComponent
              page={ currentPage - 1 }
              currentPage={ currentPage }
              totalPages={ totalPages }
              disabled={ currentPage === FIRST_PAGE }
              accessibilityLabel={ accessibilityLabel }
            />
          </li>
        ) }

        { track.map((page, i) => {
          const key = page === FILLER ? `${FILLER}_${i}` : page;

          return (
            <li className={ css.page } key={ key }>
              { page === FILLER ? (
                <FillerComponent />
              ) : (
                <LinkComponent
                  page={ page }
                  currentPage={ currentPage }
                  active={ page === currentPage }
                  accessibilityLabel={ accessibilityLabel }
                />
              ) }
            </li>
          );
        }) }

        { showPrevNext && (
          <li className={ css.page }>
            <PrevNextComponent
              page={ currentPage + 1 }
              currentPage={ currentPage }
              totalPages={ totalPages }
              disabled={ currentPage === totalPages }
              accessibilityLabel={ accessibilityLabel }
            />
          </li>
        ) }
      </ul>
    );
  }
}