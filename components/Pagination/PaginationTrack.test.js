import React from 'react';
import { render } from 'react-dom';

import PaginationTrack from './PaginationTrack';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <PaginationTrack
      currentPage={1}
      totalPages={10}
    />,
    div
  );
});
