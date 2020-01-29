import React from 'react';
import { render } from 'react-dom';

import Navigation from './Navigation';

jest.mock('react-router-dom', () => ({
  // eslint-disable-next-line react/prop-types
  NavLink: ({ children }) => <div>{children}</div>,
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Navigation />, div);
});