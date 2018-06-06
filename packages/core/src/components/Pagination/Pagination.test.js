import React from 'react';
import { render } from 'react-dom';

import Pagination from './Pagination';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Pagination currentPage={1} totalPages={10} />, div);
});
