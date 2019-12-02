import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';

window.matchMedia = jest.fn().mockImplementation(query => {
  return {
    matches: false,
  };
});

import ScreenSize from './ScreenSize';

it('renders without crashing', () => {
  const { container } = render(
    <ScreenSize render={({}) => (
      <div />
    )} />
  );
});
