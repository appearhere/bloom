import React from 'react';
import { render } from 'react-dom';

import { NextLink, PreviousLink, PaginationLink } from './PaginationLink';

describe('PaginationLink', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<PaginationLink page={0}>0</PaginationLink>, div);
  });
});

describe('NextLink', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<NextLink page={0} />, div);
  });
});

describe('PreviousLink', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<PreviousLink page={0} />, div);
  });
});
