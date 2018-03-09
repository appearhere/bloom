import React from 'react';
import { render } from 'react-dom';

import Dropdown from './Dropdown';

const TestComponent = () => <button />;

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Dropdown target={<TestComponent />}>
      <TestComponent />
    </Dropdown>,
    div,
  );
});
