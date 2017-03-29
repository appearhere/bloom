import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, number } from '@kadira/storybook-addon-knobs';

import Pagination from './Pagination';
import PaginationTrack from './PaginationTrack';

const SimplePagination = props => (
  <Pagination { ...props }>
    <PaginationTrack { ...props } />
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
));