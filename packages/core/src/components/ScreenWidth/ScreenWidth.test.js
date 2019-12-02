import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ScreenWidth from './ScreenWidth';
import WindowDimensionsProvider from '../WindowDimensionsProvider/WindowDimensionsProvider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <WindowDimensionsProvider>
      <ScreenWidth render={() => <div />} />
    </WindowDimensionsProvider>,
    div,
  );
});
