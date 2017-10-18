import React from 'react';
import { render } from 'react-dom';

import Tether from './Tether';

jest.mock('react-router-dom', () => ({
  // eslint-disable-next-line react/prop-types
  Link: ({ children }) => <span>{ children }</span>,
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Tether />, div);
});
