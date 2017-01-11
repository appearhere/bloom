import React from 'react';
import { render } from 'react-dom';

import {
  PaginationLink,
  PaginationFiller,
  PaginationPrevNext,
} from './PaginationLink';

describe('PaginationLink', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(
      <PaginationLink
        page={ 0 }
      />,
      div
    );
  });
});

describe('PaginationFiller', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<PaginationFiller />, div);
  });
});

describe('PaginationPrevNext', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(
      <PaginationPrevNext
        page={ 0 }
        currentPage={ 0 }
        totalPages={ 0 }
      />,
      div
    );
  });
});