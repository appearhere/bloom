import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Chip from './Chip';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Chip/>,
    div,
  );
});

it('displays the correct text and href', () => {
  const { queryByText } = render(
    <Chip text="Active" href="https://appearhere.co.uk"/>,
  );

  expect(queryByText(/Active/i)).toBeTruthy();
  expect(document.querySelector("a").getAttribute("href")).toBe("https://appearhere.co.uk");
});
