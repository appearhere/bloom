import React from 'react';
import { render } from 'react-dom';

import Tooltip from './Tooltip';

const TestComponent = () => <button />;

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Tooltip
      target={ <TestComponent /> }
    >
      <TestComponent />
    </Tooltip>,
    div
  );
});