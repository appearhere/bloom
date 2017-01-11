import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Pagination from './Pagination';

storiesOf('Pagination', module)
  .add('Start of pagination', () => (
    <Pagination currentPage={ 1 } totalPages={ 10 } displayRange={ 3 } />
  ))
  .add('Middle of pagination', () => (
    <Pagination currentPage={ 5 } totalPages={ 10 } displayRange={ 3 } />
  ))
  .add('End of pagination', () => (
    <Pagination currentPage={ 10 } totalPages={ 10 } displayRange={ 3 } />
  ))
  .add('Close to start', () => (
    <Pagination currentPage={ 4 } totalPages={ 10 } displayRange={ 3 } />
  ))
  .add('Close to end', () => (
    <Pagination currentPage={ 7 } totalPages={ 10 } displayRange={ 3 } />
  ))
  .add('Short track', () => (
    <Pagination currentPage={ 3 } totalPages={ 3 } displayRange={ 3 } />
  ))
  .add('Large display range', () => (
    <Pagination currentPage={ 3 } totalPages={ 3 } displayRange={ 10 } />
  ));