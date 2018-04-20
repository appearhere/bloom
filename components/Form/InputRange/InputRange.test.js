import React from 'react';
import { render } from 'react-dom';

import InputRange from './InputRange';

describe('Default InputRange', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<InputRange name="" value={0} minValue={0} maxValue={1} />, div);
  });
});

describe('Multi InputRange', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(
      <InputRange
        name=""
        value={{
          min: 0,
          max: 1,
        }}
        minValue={0}
        maxValue={1}
      />,
      div,
    );
  });
});
