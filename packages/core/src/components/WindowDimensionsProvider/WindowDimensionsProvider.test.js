import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WindowDimensionsProvider from './WindowDimensionsProvider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<WindowDimensionsProvider />, div);
});
