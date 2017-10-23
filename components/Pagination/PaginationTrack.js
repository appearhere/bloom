import PropTypes from 'prop-types';
import React from 'react';
import first from 'lodash/fp/first';
import last from 'lodash/fp/last';

import getPaginationTrack from './getPaginationTrack';
import { PaginationLink } from './PaginationLink';

import css from './Pagination.css';

const FILLER = 'filler';
const FIRST_PAGE = 1;
const FILLER_THRESHOLD = 2;

const PaginationFiller = () => <span className={ css.filler }>&hellip;</span>;

const PaginationTrack = (props) => {
  const {
    LinkComponent,
    FillerComponent,
    currentPage,
    totalPages,
    displayRange,
    linkProps,
  } = props;

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
    <ul className={ css.track }>
      { track.map((page, i) => {
        const key = page === FILLER ? `${FILLER}_${i}` : page;

        return (
          <li className={ css.page } key={ key }>
            { page === FILLER ? (
              <FillerComponent />
            ) : (
              <LinkComponent
                { ...linkProps }
                page={ page }
                active={ page === currentPage }
              >
                { page }
              </LinkComponent>
            ) }
          </li>
        );
      }) }
    </ul>
  );
};

PaginationTrack.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  displayRange: PropTypes.number,
  LinkComponent: PropTypes.func,
  FillerComponent: PropTypes.func,
  linkProps: PropTypes.object,
};

PaginationTrack.defaultProps = {
  displayRange: 9,
  LinkComponent: PaginationLink,
  FillerComponent: PaginationFiller,
  linkProps: {},
};

export default PaginationTrack;
