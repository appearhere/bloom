import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';

import { Pagination, PaginationTrack } from '@appearhere/bloom';

const SimplePagination = props => (
  <Pagination {...props}>
    <PaginationTrack {...props} />
  </Pagination>
);

const PageButton = ({ onClick, page }) => (
  <button
    onClick={e => {
      onClick(e, page);
    }}
  >
    {page}
  </button>
);

const NextButton = ({ onClick, page }) => (
  <button
    onClick={e => {
      onClick(e, page);
    }}
  >
    Next
  </button>
);

const PreviousButton = ({ onClick, page }) => (
  <button
    onClick={e => {
      onClick(e, page);
    }}
  >
    Previous
  </button>
);

const EventedPagination = props => (
  <Pagination
    NextComponent={NextButton}
    PreviousComponent={PreviousButton}
    arrowProps={{ onClick: action('click arrow') }}
    {...props}
  >
    <PaginationTrack
      LinkComponent={PageButton}
      linkProps={{ onClick: action('click page') }}
      {...props}
    />
  </Pagination>
);

const stories = storiesOf('Pagination', module);
stories.addDecorator(withKnobs);

stories
  .add('With track', () => (
    <SimplePagination
      currentPage={number('current page', 1)}
      totalPages={number('total pages', 10)}
      displayRange={number('track range', 3)}
    />
  ))
  .add('Evented pagination', () => (
    <EventedPagination
      currentPage={number('current page', 1)}
      totalPages={number('total pages', 10)}
      displayRange={number('track range', 3)}
    />
  ));
