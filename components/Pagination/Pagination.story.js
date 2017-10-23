import PropTypes from 'prop-types';
import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import Pagination from './Pagination';
import PaginationTrack from './PaginationTrack';

const SimplePagination = props => (
  <Pagination { ...props }>
    <PaginationTrack { ...props } />
  </Pagination>
);

const PageButton = ({ onClick, page }) => (
  <button onClick={ (e) => { onClick(e, page); } } >
    { page }
  </button>
);
PageButton.propTypes = { onClick: PropTypes.func, page: PropTypes.any };

const NextButton = ({ onClick, page }) => (
  <button onClick={ (e) => { onClick(e, page); } } >
    Next
  </button>
);
NextButton.propTypes = { onClick: PropTypes.func, page: PropTypes.any };

const PreviousButton = ({ onClick, page }) => (
  <button onClick={ (e) => { onClick(e, page); } } >
    Previous
  </button>
);
PreviousButton.propTypes = { onClick: PropTypes.func, page: PropTypes.any };

const EventedPagination = props => (
  <Pagination
    NextComponent={ NextButton }
    PreviousComponent={ PreviousButton }
    arrowProps={ { onClick: action('click arrow') } }
    { ...props }
  >
    <PaginationTrack
      LinkComponent={ PageButton }
      linkProps={ { onClick: action('click page') } }
      { ...props }
    />
  </Pagination>
);


const stories = storiesOf('Pagination', module);
stories.addDecorator(withKnobs);

stories.add('With track', () => (
  <SimplePagination
    currentPage={ number('current page', 1) }
    totalPages={ number('total pages', 10) }
    displayRange={ number('track range', 3) }
  />
))
.add('Evented pagination', () => (
  <EventedPagination
    currentPage={ number('current page', 1) }
    totalPages={ number('total pages', 10) }
    displayRange={ number('track range', 3) }
  />
));
