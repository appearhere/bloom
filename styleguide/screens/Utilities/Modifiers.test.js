import React from 'react';
import { render } from 'react-dom';

import Modifiers from './Modifiers';

jest.mock('react-router-dom', () => ({
  // eslint-disable-next-line react/prop-types
  Link: ({ children }) => <span>{ children }</span>,
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Modifiers />, div);
});
